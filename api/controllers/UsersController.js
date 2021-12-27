/**
 * UsersController.js
 *
 * @description :: Server-side logic for managing subscriptions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  getAllUsers: function(req, res) {
    var reqData = req.allParams();
    prepare_condition(sails.config.appConfig)(reqData).then((queryResult) => {
      Users.find(queryResult).exec((err, result) => {
        result = _.map(result, (user) => {
          return _.omit(user, 'password');
        });
        res.ok(result);
      });
    });

  },

  getUser: function(req, res) {
    // console.log(sails.config.appConfig);
    var requestParams = req.allParams();
    Users.findOne(requestParams).exec((err, result) => {
      result.tenantName = sails.config.appConfig[result.tenant_id];
      result = _.omit(result, 'password');
      res.ok(result);
    })
    //res.ok('Hi There!');
  }

};
