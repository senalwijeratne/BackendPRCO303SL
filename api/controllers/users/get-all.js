module.exports = {


  friendlyName: 'Get details of all users in the system',


  description: 'This action will return all details of all users in the system.',


  exits: {

    err: {
      statusCode: 500,
      description: 'Something went wrong in users/get-all.js',
    },

    success: {
      statusCode: 200,
      description: 'An API call was made. Returning all details of all users in the system.',
    },

  },


  fn: async function (inputs, exits) {

    let users = await User.find({
      where: {
        isSuperAdmin: false,
        isProf: false,
      },
    })

    return exits.success({users})

  }


};
