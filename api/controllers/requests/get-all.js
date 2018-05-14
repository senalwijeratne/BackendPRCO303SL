module.exports = {


  friendlyName: 'Get all requests that are recorded within the system',


  description: 'This action will return all the details about all requests that has been are recorded within the system',


  exits: {

    err: {
      statusCode: 500,
      description: 'Something went wrong in requests/get-all.js',
    },

    success: {
      statusCode: 200,
      description: 'An API call was made. Returning all details on all requests.',
    },

  },


  fn: async function (inputs, exits) {

    let requests = await Request.find()
    .populate('rating')
    .populate('madeBy')
    .populate('requestedProf')

    return exits.success({requests})

  }


};
