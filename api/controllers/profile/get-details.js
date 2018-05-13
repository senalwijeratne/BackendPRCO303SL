module.exports = {


  friendlyName: 'get the details of the user',


  description: 'This action will return the details of the requesting user',
  

  exits: {

    err: {
      statusCode: 500,
      description: 'Something went wrong in profile/get-details.js',
    },

    success: {
      statusCode: 200,
      description: 'An API call was made.',
    },

  },


  fn: async function (inputs, exits) {

    let user = await User.find(this.req.me)

    return exits.success({user})

  }


};
