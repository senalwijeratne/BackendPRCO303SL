module.exports = {


  friendlyName: 'get the details of the user',


  description: 'This action will return the details of the requesting user',


  exits: {

    err: {
      statusCode: 500,
      description: 'Something went wrong in users/get-details.js',
    },

    success: {
      statusCode: 200,
      description: 'An API call was made. Returning all details of the requesting user.',
    },

  },


  fn: async function (inputs, exits) {

    let user = await User.findOne(this.req.me)

    return exits.success({user})

  }


};
