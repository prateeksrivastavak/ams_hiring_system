/**
 * TenantsController.js
 *
 * @description :: Server-side logic for managing subscriptions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  getAllTenants: function(req, res) {
    Tenants.find().exec((err, result) => {
      res.ok(result);
    })
  },
  bye: function(req, res) {
    return res.redirect("http://www.sayonara.com");
  }
};
