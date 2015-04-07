'use strict';

var fs = require('fs');
var join = require('path').join;

/**
 * Read files in a given directory.
 *
 * @param  {String} dir
 * @return {Array}
 */
exports.readFiles = function(dir) {
  var ret = [];

  var files = fs.readdirSync(dir);
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    var content = fs.readFileSync(join(dir, file), 'utf8');
    ret.push(content);
  }

  return ret;
};
