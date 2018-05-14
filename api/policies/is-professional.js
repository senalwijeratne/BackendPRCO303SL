/**
 * is-professional
 *
 * A simple policy that blocks requests from non-professional.
 */
module.exports = async function (req, res, proceed) {

  // First, check whether the request comes from a logged-in user.
  if (!req.me) {
    return res.unauthorized();
  }

  // Then check that this user is a "professional".
  if (!req.me.isProf) {
    return res.forbidden();
  }//•

  // IWMIH, we've got ourselves a "super admin".
  return proceed();

};
