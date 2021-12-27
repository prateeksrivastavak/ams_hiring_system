'use strict';

module.exports = (mapperObject) => {
  return (data) => {
    var convertedObject = {};
    for (var key in mapperObject) {
      convertedObject[key] = data[mapperObject[key]];
    }
    return Promise.resolve(convertedObject);
  }
}
