'use strict';
const moment = require('moment');
module.exports = (appConfig) => {
    return (data) => {
        if (!_.isArray(data)) {
            data = _.mapKeys(data, (value, key) => {
                if (_.isDate(val)) {
                    value = moment(val).format('YYYY-MM-DD');
                    
                    return value;
                }
                return value;
            });
        } else {
            data = _.map(data, (value) => {
                var tempObj = _.mapKeys(value, (val, key) => {
                    if (_.isDate(val)) {
                        val = moment(val).format('YYYY-MM-DD');
                        console.log(val);
                        return val;
                    }
                    return val;
                });

                return tempObj;
            });
        }
        return (data);
    }
}
