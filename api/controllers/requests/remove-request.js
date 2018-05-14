module.exports = {


  friendlyName: 'Remove a request from the system',


  description: 'This action will switch the \'isRemoved\' to true on a particualr request signifying that this user has been removed from the system',


  exits: {

    err: {
      statusCode: 500,
      description: 'Something went wrong in requests/remove-request.js',
    },

    success: {
      statusCode: 200,
      description: 'An API call was made. The specified request has been removed',
    },

  },


  fn: async function (inputs, exits) {

    let {id} = this.req.params

    await Request.update(id)
    .set({ isRemoved: true })

    return exits.success()

  }


};
