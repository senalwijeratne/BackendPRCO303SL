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
      example: 'ASC'
    },

  },

  exits: {

    err: {
      statusCode: 500,
      description: 'Something went wrong in home/get-all.js',
    },
    success: {
      statusCode: 200,
      description: 'An API call was made.',
    },

  },


  fn: async function (inputs, exits) {

    let professionals = await Professional.find({
      where:{
        profType: profType,
        isRemoved: 0,
      }
    })
    .sort(sortBy + ' ' + sortOrder)

    return exits.success({professionals})

  }


};
