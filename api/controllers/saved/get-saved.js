module.exports = {


  friendlyName: 'get all professionals who were saved by the user',


  description: 'This action will return the details of all the professionals that were saved by the user',
  

  exits: {

    err: {
      statusCode: 500,
      description: 'Something went wrong in saved/get-saved.js',
    },

    success: {
      statusCode: 200,
      description: 'An API call was made.',
    },

  },


  fn: async function (inputs, exits) {

    let user = await User.find(this.req.me)
    .populate('savedProfs')

    let {savedProfs} = user

    return exits.success({savedProfs})

  }


};
