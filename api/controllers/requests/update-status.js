// TODO: Turn this entire action into one trasaction
// TODO: Set responseTime when updating the status
module.exports = {


  friendlyName: 'Update the status of a request',


  description: 'This action will change the status of a request(i.e. from \'pending\' to \'accepted\')',


  inputs: {

    requestID: {
      type: 'number',
      example: 2
    },

    status: {
      type: 'string',
      isIn: ['pending', 'seen', 'accepted', 'rejected', 'completed'],
    },

  },

  exits: {

    err: {
      statusCode: 500,
      description: 'Something went wrong in ratings/submit-rating.js',
    },

    notAllowed: {
      description: 'The requesting user does not have the authority to do this.(might be trying to change a request that does not belong to the requesting professional)',
      responseType: 'unauthorized'
    },

    success: {
      statusCode: 200,
      description: 'An API call was made. The request status has been updated.',
    },

  },


  fn: async function (inputs, exits) {

    let {requestID,status} = inputs
    let {id} = this.req.me

    //find the requestng user in the User model and populate with his prof details
    let user = await User.findOne({id})
    .populate('professional')

    //extract the requestng user's professionalID from their record
    let profID = user.professional[0].id

    //Check if this request belongs to the requesting professional
    let request = await Request.findOne(requestID)

    if(request.requestedProf == profID){

      await Request.update(requestID)
      .set({
        status: status,
        // TODO: set responseTime
      })

      // NOTE: Trigger email/app notifications

      // NOTE: Take the frozen funds from the user | Send the funds to the professional after reducing the commission fee

      return exits.success()

    } else {
      return exits.notAllowed()
    }



  }


};
