'use strict';

module.exports = (appConfig) => {
  return (data) => {
    var query = {
      limit: data.limit ? data.limit : appConfig.queryLimit ? appConfig.queryLimit : 10,
      skip: data.offset ? data.offset : 0,
      sort: data.order ? data.order : 'id DESC'
    };
    return Promise.resolve(query);
  }
}
