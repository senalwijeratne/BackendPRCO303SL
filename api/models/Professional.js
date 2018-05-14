/**
 * Professional.js
 *
 * A professional who can log in to this application.
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    emailAddress: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
      maxLength: 200,
      example: 'carol.reyna@microsoft.com'
    },

    fullName: {
      type: 'string',
      required: true,
      description: 'Full representation of the user\'s name',
      maxLength: 120,
      example: 'Lisa Microwave van der Jenny'
    },

    nicPassportNumber: {
      type: 'string',
      required: true,
      unique: true,
      description: 'The NIC number or the Passport number of the user',
      example: '960257777v',
    },

    telNumber: {
      type: 'number',
      description: 'Contact number of the user',
      example: 715485695,
    },

    location: {
      type: 'string',
      description: 'the city in which the user lives',
      example: 'Malabe',
    },

    dob: {
      type: 'number',
      description: 'User\'s date of birth',
      example: 1525703175,
    },

    profType:{
      type:'string',
      required: true,
      description: 'What type of professional is this person',
      example: 'Doctor',
    },

    fee: {
      type: 'number',
      required: true,
      description: 'The fee of the request',
      example: 1000,
    },

    experience: {
      type: 'number',
      required: true,
      description: 'How many years have this professional been in practice',
      example: 10,
    },

    workplace: {
      type: 'string',
      required: true,
      description: 'what is the primary place of work of this professional',
      example: 'Lanka Hospitals',
    },

    currentRating: {
      type: 'number',
      defaultsTo: 0,
      description: 'This professional\'s current rating.',
      example: 4.5,
    },

    featured: {
      type: 'boolean',
      defaultsTo: false,
      description: 'Specifies if this professional is featured or not',
    },

    isRemoved: {
      type: 'boolean',
      defaultsTo: false,
      description: 'Specifies if this record was deleted/removed',
    },


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
    // n/a

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    // n/a

    savedBy:{
      collection: 'user',
      via: 'savedProfs',
    },

    qualifications:{
      collection: 'qualification',
      via: 'heldBy',
    },

    ratings:{
      collection: 'rating',
      via: 'ratingOf',
    },

    requestedIn: {
      collection: 'request',
      via: 'requestedProf',
    },

    user:{
      model:'user',
      unique: true
    },

  },


};
