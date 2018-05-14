module.exports = {


  friendlyName: 'submit a new request',


  description: 'This action will make a new request',


  inputs: {

    notes: {
      type: 'string',
      example: 'Blah Blah Blahh... Additional information that the user gave when making the request',
    },

    fee: {
      type: 'number',
      required: true,
      example: 300,
    },

    requestedProf: {
      type: 'number',
      required: true,
      example: 2,
    },

  },

  exits: {

    err: {
      statusCode: 500,
      description: 'Something went wrong in history/make-a-request.js',
    },

    success: {
      statusCode: 200,
      description: 'An API call was made.',
    },

  },


  fn: async function (inputs, exits) {

    let {id} = this.req.me

    let newRating = await Request.create(Object.assign({
      madeBy: id,
      requestedProf: inputs.requestedProf,
      notes: inputs.notes,
      fee: inputs.fee,
    }))

    return exits.success()

  }


};
