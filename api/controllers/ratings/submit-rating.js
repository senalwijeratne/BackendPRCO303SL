module.exports = {


  friendlyName: 'submit a new rating',


  description: 'This action will submit a new rating for an request that was completed',


  inputs: {

    //since this action is called from a card that already contains details of a history item(i.e: a request made by the user), It already has data on requestID, ratedBy and ratingOf; it's just named differently, as noted below.

    requestID: {
      type: 'number',
      example: 2
    },

    madeBy: {
      type: 'number',
      example: 2
    },

    requestedProf: {
      type: 'number',
      example: 2
    },

    rating: {
      type: 'number',
      isIn: [0, 1, 2, 3, 4, 5],
      example: 2
    },

  },

  exits: {

    err: {
      statusCode: 500,
      description: 'Something went wrong in history/submit-rating.js',
    },

    success: {
      statusCode: 200,
      description: 'An API call was made.',
    },

  },


  fn: async function (inputs, exits) {

    let newRating = await Rating.create(Object.assign({
      rating: inputs.rating,
      ratedBy: inputs.madeBy,
      ratingOf: inputs.requestedProf,
      request: inputs.requestID,
    }))

    return exits.success()

  }


};
