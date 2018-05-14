module.exports = {


  friendlyName: 'Get all professionals that are recorded within the system',


  description: 'This action will return all the details about all professionals that has been recorded within the system',


  exits: {

    err: {
      statusCode: 500,
      description: 'Something went wrong in professionals/get-all.js',
    },

    success: {
      statusCode: 200,
      description: 'An API call was made. Returning all details on all professionals.',
    },

  },


  fn: async function (inputs, exits) {

    let professionals = await Professional.find()
    .populate('savedBy')
    .populate('qualifications')
    .populate('ratings')
    .populate('requestedIn')
    .populate('user')

    return exits.success({professionals})

  }


};
