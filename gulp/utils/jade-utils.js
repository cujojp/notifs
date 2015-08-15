// = = = = = = = = = = =
// Jade configs and tools
// = = = = = = = = = = =
var config = require('./config');
var fs = require('fs');
var _ = require('lodash');
var jade = require('jade');

// = = = = = = = = = = = = = =
// Jade Utilities
// = = = = = = = = = = = = = =
var jadeUtilities = {
  partial: function(templatePath, dataObj) {
    var file = String(fs.readFileSync(templatePath));

    if (typeof(dataObj) === String) {
      dataObj = JSON.parse(dataObj);
    }

    if (templatePath.match(/.jade/g)) {
      var markup = jade.compile(file, {
        filename: templatePath,
        basedir: __dirname,
        pretty: true
      })(dataObj);

      return markup;
    } else {
      return file;
    }
  },
  getData: function(a) {
    if (typeof a === 'string') {
      return fsSync.readJSON(a);
    } else {
      return a;
    }
  }
}

module.exports = {
  getData: function(path) {
    return jadeUtilities.getData(path);
  },
  partial: function(templatePath, dataObj) {
    return jadeUtilities.partial(templatePath, dataObj);
  },
  extendObj: function(obj, locals, newObj) {
    return _.extend({}, locals, newObj);
  },
  getObjectLength: function(obj) {
    return _.size(obj);
  },
  pullAt: function(arr, val) {
    obj = _.clone(arr, true);
    return _.pullAt(obj, val);
  },
  clone: function(obj) {
    return _.clone(obj);
  },
  drop: function(arr, int) {
    obj = _.clone(arr, true);
    return _.drop(obj, int);
  },
  chunk: function(arr, int) {
    obj = _.clone(arr, true);
    return _.chunk(obj, int);
  },
  isArray: function(obj) {
    return _.isArray(obj);
  },
  findWhere: function(obj, prop) {
    return _.where(obj, prop);
  }
};
