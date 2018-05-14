module.exports = {


  friendlyName: 'get all professionals of a given category with the specified name',


  description: 'Depending on the inputs this action recives, it will return all details of all professionals with the specified name in a particular order; all specified by the user.',


  inputs: {

    name: {
      type: 'string',
      example: 'Weerasignhe'
    },

    profType: {
      type: 'string',
      required: true,
      example: 'doctor'
    },

    sortBy: {
      type: 'string',
      required: true,
      example: 'doctor'
    },

    sortOrder: {
      type: 'string',
      required: true,
      isIn: ['ASC', 'DESC'],
    },

  },

  exits: {

    err: {
      statusCode: 500,
      description: 'Something went wrong in professionals/search-by-name.js',
    },

    success: {
      statusCode: 200,
      description: 'An API call was made. Returning all professionals details with the searched name',
    },

  },


  fn: async function (inputs, exits) {

    let sortString = inputs.sortBy + ' ' + inputs.sortOrder

    let professionals = await Professional.find({
      where:{
        fullName: { 'contains' : inputs.name },
        profType: inputs.profType,
        isRemoved: 0,
      },
      sort: sortString
    })

    return exits.success({professionals})

  }


};
