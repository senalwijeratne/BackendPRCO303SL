/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝
  'GET /':                   { action: 'view-homepage-or-redirect' },
  'GET /welcome':            { action: 'dashboard/view-welcome' },

  'GET /faq':                { view:   'pages/faq' },
  'GET /legal/terms':        { view:   'pages/legal/terms' },
  'GET /legal/privacy':      { view:   'pages/legal/privacy' },
  'GET /contact':            { view:   'pages/contact' },

  'GET /signup':             { action: 'entrance/view-signup' },
  'GET /email/confirm':      { action: 'entrance/confirm-email' },
  'GET /email/confirmed':    { view:   'pages/entrance/confirmed-email' },

  'GET /login':              { action: 'entrance/view-login' },
  'GET /password/forgot':    { action: 'entrance/view-forgot-password' },
  'GET /password/new':       { action: 'entrance/view-new-password' },

  'GET /account':            { action: 'account/view-account-overview' },
  'GET /account/password':   { action: 'account/view-edit-password' },
  'GET /account/profile':    { action: 'account/view-edit-profile' },


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the CloudSDK library.
  '/api/account/logout':                           { action: 'account/logout' },
  'PUT   /api/account/update-password':            { action: 'account/update-password' },
  'PUT   /api/account/update-profile':             { action: 'account/update-profile' },
  'PUT   /api/account/update-billing-card':        { action: 'account/update-billing-card' },
  'POST   /api/entrance/login':                        { action: 'entrance/login' },
  'POST  /api/entrance/signup':                       { action: 'entrance/signup' },
  'POST  /api/entrance/send-password-recovery-email': { action: 'entrance/send-password-recovery-email' },
  'POST  /api/entrance/update-password-and-login':    { action: 'entrance/update-password-and-login' },
  'POST  /api/deliver-contact-form-message':          { action: 'deliver-contact-form-message' },

  //API endpoins for Professional model
  'POST /api/professionals/get-featured':    { action: 'professionals/get-featured' },
  'GET /api/professionals/get-prof-details':    { action: 'professionals/get-prof-details' },
  'POST /api/professionals/search':    { action: 'professionals/search' },

  //API endpoins for Qualification model


  //API endpoins for Rating model
  'POST /api/ratings/submit-rating':  { action: 'ratings/submit-rating' },

  //API endpoins for Request model
  'POST /api/requests/make-a-request':  { action: 'requests/make-a-request' },
  'PUT /api/requests/update-status':  { action: 'requests/update-status' },
  'GET /api/requests/get-profs-requests':  { action: 'requests/get-profs-requests' },

  //API endpoins for User model
  'GET /api/users/get-details':    { action: 'users/get-details' },
  'GET /api/users/get-history':    { action: 'users/get-history' },
  'GET /api/users/get-saved':      { action: 'users/get-saved' },


  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗  ╦═╗╔═╗╔╦╗╦╦═╗╔═╗╔═╗╔╦╗╔═╗
  //  ║║║║╚═╗║    ╠╦╝║╣  ║║║╠╦╝║╣ ║   ║ ╚═╗
  //  ╩ ╩╩╚═╝╚═╝  ╩╚═╚═╝═╩╝╩╩╚═╚═╝╚═╝ ╩ ╚═╝
  '/terms':                   '/legal/terms',
  '/logout':                  '/api/account/logout',

};
