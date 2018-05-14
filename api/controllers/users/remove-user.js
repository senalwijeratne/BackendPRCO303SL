module.exports = {


  friendlyName: 'Remove a user from the system',


  description: 'This action will switch the \'isRemoved\' to true on a particualr user signifying that this user has been removed from the system',


  exits: {

    err: {
      statusCode: 500,
      description: 'Something went wrong in users/remove-user.js',
    },

    success: {
      statusCode: 200,
      description: 'An API call was made. The specified user has been removed',
    },

  },


  fn: async function (inputs, exits) {

    let {id} = this.req.params

    await User.update(id)
    .set({ isRemoved: true })

    return exits.success()

  }


};
