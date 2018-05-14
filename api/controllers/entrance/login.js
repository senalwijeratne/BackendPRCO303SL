module.exports = {


  friendlyName: 'Login',


  description: 'Log in using the provided email and password combination.',


  extendedDescription: `This action attempts to look up the user record in the database with the specified email address.  Then, if such a user exists, it uses bcrypt to compare the hashed password from the database with the provided password attempt.`,


  inputs: {

    emailAddress: {
      description: 'The email to try in this attempt, e.g. "irl@example.com".',
      type: 'string',
      required: true
    },

    password: {
      description: 'The unencrypted password to try in this attempt, e.g. "passwordlol".',
      type: 'string',
      required: true
    },

    rememberMe: {
      description: 'Whether to extend the lifetime of the user\'s session.',
      extendedDescription: `Note that this is NOT SUPPORTED when using virtual requests (e.g. sending requests over WebSockets instead of HTTP).`,
      type: 'boolean'
    },

    type: {
      description: 'Specifies what type of user is trying to login',
      extendedDescription: `The system has 3 types of users, this input allows the system to use one single login action reguardless of which type of user is trying to login`,
      type: 'string',
      isIn: ['user', 'professional', 'admin']
    }

  },


  exits: {

    success: {
      description: 'The requesting user agent has been successfully logged in.',
      extendedDescription: `Under the covers, this stores the id of the logged-in user in the session as the \`userId\` key.  The next time this user agent sends a request, assuming it includes a cookie (like a web browser), Sails will automatically make this user id available as req.session.userId in the corresponding action.  (Also note that, thanks to the included "custom" hook, when a relevant request is received from a logged-in user, that user's entire record from the database will be fetched and exposed as \`req.me\`.)`
    },

    wrongType: {
      description: 'The requesting user is using a wrong interface(i.e. Prof trying to login from the admin login page)',
      responseType: 'unauthorized'
    },

    badCombo: {
      description: `The provided email and password combination does not
      match any user in the database.`,
      responseType: 'unauthorized'
      // ^This uses the custom `unauthorized` response located in `api/responses/unauthorized.js`.
      // To customize the generic "unauthorized" response across this entire app, change that file
      // (see http://sailsjs.com/anatomy/api/responses/unauthorized-js).
      //
      // To customize the response for _only this_ action, replace `responseType` with
      // something else.  For example, you might set `statusCode: 498` and change the
      // implementation below accordingly (see http://sailsjs.com/docs/concepts/controllers).
    }

  },


  fn: async function (inputs, exits) {

    // Look up by the email address.
    // (note that we lowercase it to ensure the lookup is always case-insensitive,
    // regardless of which database we're using)
    var userRecord = await User.findOne({
      emailAddress: inputs.emailAddress.toLowerCase(),
    });

    // If there was no matching user, respond thru the "badCombo" exit.
    if(!userRecord) {
      throw 'badCombo';
    }

    //if there is a user with the provided email, check if they're are requesting from the right endpoint
    var validType = false

    if(inputs.type == 'user') {
      validType = (!userRecord.isProf && !userRecord.isSuperAdmin) ? true : false
    }
    else if(inputs.type == 'professional') {
      validType = (userRecord.isProf) ? true : false
    }
    else if(inputs.type == 'admin') {
      validType = (userRecord.isSuperAdmin) ? true : false
    }

    //if the request is coming from a valid source contine with the logging in
    if(validType){

      // If the password doesn't match, then also exit thru "badCombo".
      await sails.helpers.passwords.checkPassword(inputs.password, userRecord.password)
      .intercept('incorrect', 'badCombo');

      // If "Remember Me" was enabled, then keep the session alive for
      // a longer amount of time.  (This causes an updated "Set Cookie"
      // response header to be sent as the result of this request -- thus
      // we must be dealing with a traditional HTTP request in order for
      // this to work.)
      if (inputs.rememberMe) {
        if (this.req.isSocket) {
          sails.log.warn(
            'Received `rememberMe: true` from a virtual request, but it was ignored\n'+
            'because a browser\'s session cookie cannot be reset over sockets.\n'+
            'Please use a traditional HTTP request instead.'
          );
        } else {
          this.req.session.cookie.maxAge = sails.config.custom.rememberMeCookieMaxAge;
        }
      }//ﬁ

      // Modify the active session instance.
      this.req.session.userId = userRecord.id;

      // Send success response (this is where the session actually gets persisted)
      return exits.success();

    } else {
      return exits.wrongType()
    }


  }

};
