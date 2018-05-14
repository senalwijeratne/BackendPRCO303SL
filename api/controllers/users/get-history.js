module.exports = {


  friendlyName: 'get the request history os the user',


  description: 'This action will return the details of all the past requests that were made by the user',


  exits: {

    err: {
      statusCode: 500,
      description: 'Something went wrong in users/get-history.js',
    },

    success: {
      statusCode: 200,
      description: 'An API call was made. Returning the history records of the requesting user.',
    },

  },


  fn: async function (inputs, exits) {

    let user = await User.find(this.req.me)
    .populate('requestsMade')

    let {requestsMade} = user

    return exits.success({requestsMade})

  }


};
