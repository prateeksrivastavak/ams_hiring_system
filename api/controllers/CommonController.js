/**
 * CommonController.js
 *
 * @description :: Server-side logic for managing subscriptions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var path = require('path');
const date_converted = require('../services/date_converted');
// const { resolve } = require('path/posix');
module.exports = {
  getAll: function (req, res) {
    var reqData = req.allParams();
    prepare_condition(sails.config.appConfig)(reqData).then((queryResult) => {
      (sails.models[reqData.entity]).find(queryResult).exec((err, result) => {
        if (reqData.entity === 'users') {
          result = _.map(result, (user) => {
            return _.omit(user, 'password');
          });
        }
        res.ok(result);
      });
    });
  },

  getDetailsById: function (req, res) {
    var reqData = req.allParams();
    console.log(reqData.queryDetails);
    (sails.models[reqData.entity]).findOne({ where: { id: reqData.id } }).exec((err, result) => {
      console.log(err);
      if (reqData.entity === 'users') {
        result = _.map(result, (user) => {
          return _.omit(user, 'password');
        });
      }
      res.ok(result);
    });
  },

  postData: (req, res) => {
    var reqData = req.allParams(),
   
      isUpdate = false;
      // console.log(reqData);
      sails.config.requestData = reqData.data;
    if (_.has(reqData, 'condition')) {
      (sails.models[reqData.entity]).update(reqData.condition, reqData.data).exec((queryResult) => {
        res.ok({ msg: 'updated' });
      });
    } else {
      (sails.models[reqData.entity]).create(reqData.data).exec((queryResult) => {
        res.ok(queryResult);
      });
    }
  },

  searchData: (req, res) => {
    var reqData = req.allParams();
    prepare_search_condition(reqData.entity)(reqData.data).then((queryResult) => {
      (sails.models[reqData.entity]).query(queryResult, (err, result) => {
        res.ok(result);
      });
    })
  },

  fileUpload: (req, res) => {
    var reqData = req.allParams();
    var fileName = null;
    try {
      fileName = req.file('filename')._files[0].stream.headers['content-disposition'].split('"').reverse()[1];
    } catch (e) {
      fileName = "abc.abc";
    }
    req.file('filename').upload({
      dirname: '../../upload',
      saveAs: fileName
    }, function whenDone(err, files) {
      if (err) {
        console.log(err);
        return res.serverError(err);
      }
      if (!files.length) {
        return res.serverError(new Error('No file Uploaded'))
      }
      var avatarUrl = require('util').format('%s', '../../upload');
      console.log(avatarUrl);

      var fileName1 = path.join('../../upload', fileName);
      console.log(fileName1);
      res.ok(files);
    });

  },

  saveJsonObjectInDB: (req, res) => {
    var reqData = req.allParams();
    var convertedObj = JSON.stringify([{ 1: 'a' }]);

    console.log(convertedObj.length);

    var jConvert = JSON.parse(convertedObj);
    var toAdd = { 2: 'tejas' };
    console.log(jConvert);
    jConvert.push(toAdd);
    console.log(jConvert);
    res.ok('ok');
  }

};
