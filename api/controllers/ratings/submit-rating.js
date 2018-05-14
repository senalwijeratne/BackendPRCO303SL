// TODO: Check if the
// TODO: Turn this entire action into one trasaction
module.exports = {


  friendlyName: 'submit a new rating',


  description: 'This action will submit a new rating for an request that was completed',


  inputs: {

    //since this action is called from a card that already contains details of a history item(i.e: a request made by the user), It already has data on requestID, ratedBy and ratingOf; it's just named differently, as noted below.

    requestID: {
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
      description: 'Something went wrong in ratings/submit-rating.js',
    },

    requestNotAccepted: {
      statusCode: 500,
      description: 'The request is not a accepted/completed request.',
    },

    alreadyRated: {
      statusCode: 500,
      description: 'The request has already been rated',
    },

    success: {
      statusCode: 200,
      description: 'An API call was made. New rating record submited.',
    },

  },


  fn: async function (inputs, exits) {

    let request = await Request.findOne(inputs.requestID)

    //check if the request is 'completed'
    if(request.status == 'completed'){

      let {madeBy,requestedProf} = request


      let newRating = await Rating.create(Object.assign({
        rating: inputs.rating,
        ratedBy: madeBy,
        ratingOf: requestedProf,
        request: inputs.requestID,
      }))
      .fetch()

      //update the currentRating of the prof
      let newCurrentRating = await Rating.avg('rating', {ratingOf: requestedProf})

      await Professional.update(requestedProf)
      .set({currentRating: newCurrentRating})

      // NOTE: trigger email/app notifications

      return exits.success({newRating})

    } else if(request.rating) {
      return exits.alreadyRated()
    } else {
      return exits.requestNotAccepted()
    }


  }


};
