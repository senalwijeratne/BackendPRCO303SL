/**
 * Request.js
 *
 * A request made by a user.
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    seenTime: {
      type: 'number',
      description: 'Time at which the request was seen',
      example: '1525676086857'
    },

    responseTime: {
      type: 'number',
      description: 'Time at which the professional responded to the request',
      example: '1525676086857'
    },

    notes: {
      type: 'string',
      description: 'Additional information that the user gave when making the request'
    },

    fee: {
      type: 'number',
      required: true,
      example: 'The fee of the request'
    },

    status: {
      type: 'string',
      defaultsTo: 'pending',
      isIn: ['pending', 'seen', 'accepted'],
      example: 'status of the request - seen/accepted/etc.',
    },

    isRemoved: {
      type: 'boolean',
      defaultsTo: 0,
      description: 'Specifies is this record was deleted/removed',
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
    // n/a

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    // n/a

    rating:{
      model:'rating',
      unique: true
    },

    madeBy: {
      model: 'user',
    },

    requestedProf: {
      model: 'professional',
    },

  },


};
