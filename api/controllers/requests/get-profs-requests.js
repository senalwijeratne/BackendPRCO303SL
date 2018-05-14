module.exports = {


  friendlyName: 'get all requests of the requesting professional',


  description: 'This action will return all the details about the requests that were made to the requesting professional',


  exits: {

    err: {
      statusCode: 500,
      description: 'Something went wrong in requests/get-profs-requests.js',
    },

    success: {
      statusCode: 200,
      description: 'An API call was made. Returning all of user\'s requests.',
    },

  },


  fn: async function (inputs, exits) {

    let {id} = this.req.me

    //find the requestng user in the User model and populate with his prof details
    let user = await User.findOne({id})
    .populate('professional')

    //extract the requestng user's professionalID from their record
    let profID = user.professional[0].id

    //get all of the requests that they've received
    let requests = await Request.find({
      where: {
        requestedProf: profID,
        isRemoved: false,
      }
    })

    return exits.success({requests})

  }


};
