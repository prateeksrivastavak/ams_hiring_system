/**
 * AuthController.js
 *
 * @description :: Server-side logic for managing subscriptions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

module.exports = {
  login: (req, res) => {
    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash('prateek', salt, function(err, hash) {
        sails.config.globals.encPwd = hash;
        res.ok(sails.config.globals.encPwd);
      });
    });
  },

  testLogin: (req, res) => {
    bcrypt.compare('prateek', sails.config.globals.encPwd, function(err, result) {
      res.ok(result);
      // res == true
    });
  },

  auth : (req,res)=>{
  	var  obj = {id:1,name:'prateek',tenantId:1};
  	res.set('Authorization', 'Bearer - fdsafasdfasfasdfasfjasklfjlkasjflksjl');

  	res.ok(obj);
  }
};
