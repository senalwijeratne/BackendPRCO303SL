module.exports = {


  friendlyName: 'get all professionals of a given category',


  description: 'Depending on the inputs this action recives, it will return all details of all professionals in a particular order; all specified by the user.',


  inputs: {

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
      description: 'Something went wrong in professionals/get-all.js',
    },

    success: {
      statusCode: 200,
      description: 'An API call was made. Returning all professionals details.',
    },

  },


  fn: async function (inputs, exits) {

    let sortString = inputs.sortBy + ' ' + inputs.sortOrder

    let professionals = await Professional.find({
      where:{
        profType: inputs.profType,
        isRemoved: 0,
        featured: 1,
      },
      sort: sortString
    })

    return exits.success({professionals})

  }


};
