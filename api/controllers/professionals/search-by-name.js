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
      example: 'ASC'
    },

  },

  exits: {

    err: {
      statusCode: 500,
      description: 'Something went wrong in search/search-by-name.js',
    },

    success: {
      statusCode: 200,
      description: 'An API call was made.',
    },

  },


  fn: async function (inputs, exits) {

    let sortString = sortBy + ' ' + sortOrder

    let professionals = await Professional.find({
      fullName: {
        'contains' : name
      },
      where:{
        profType: profType,
        isRemoved: 0,
      },
      sort: sortString
    })

    return exits.success({professionals})

  }


};
