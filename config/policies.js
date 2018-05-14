/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  //check if the request is coming from a logged in user
  '*': 'is-logged-in',

  //check if the request is coming from a professional
  'requests/get-profs-requests': 'is-professional',
  'requests/update-status': 'is-professional',

  //check if the request is coming from an admin
  'users/get-all': 'is-super-admin',
  'users/remove-user': 'is-super-admin',
  'requests/get-all': 'is-super-admin',
  'requests/remove-request': 'is-super-admin',
  'professionals/get-all': 'is-super-admin',
  'professionals/remove-prof': 'is-super-admin',

  // Bypass the `is-logged-in` policy for:
  'entrance/*': true,
  'account/logout': true,
  'view-homepage-or-redirect': true,
  'deliver-contact-form-message': true,

};
