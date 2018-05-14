module.exports = {


  friendlyName: 'Remove a professional from the system',


  description: 'This action will switch the \'isRemoved\' to true on a particualr professional signifying that this professional has been removed from the system',


  exits: {

    err: {
      statusCode: 500,
      description: 'Something went wrong in professionals/remove-professional.js',
    },

    success: {
      statusCode: 200,
      description: 'An API call was made. The specified professional has been removed',
    },

  },


  fn: async function (inputs, exits) {

    let {id} = this.req.params

    await Professional.update(id)
    .set({ isRemoved: true })

    return exits.success()

  }


};
