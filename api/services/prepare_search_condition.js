'use strict';

module.exports = (entity) => {
  return (data) => {
    var query = 'select * from ' + entity + ' where';
    var definitions = (sails.models[entity]).definition;

    //Condition check for like only for single entity.

    if ((_.keysIn(data)).length === 1) {
      query = query + " " + (_.keysIn(data))[0] + " like " + "'" + data[(_.keysIn(data))[0]] + "%'";
      return Promise.resolve(query);
    } else {
    	//generate query with multiple values
    }


    // for (var key in data) {
    //   if (definitions[key].type === 'string' && ) {
    //     if ((_.keyIn(data)).length === 1) {
    //       query = query + " " + key + " like " + "'" + data[key] + "%'";
    //     }
    //     _.omit(data, key);
    //     console.log(query);
    //   } else {
    //     query = query + " and " + key + " = " + keydata[key];
    //   }
    // }
    // query = query + ';';
    // return Promise.resolve(query);
  }
}


/*
	like will work only for single entity, 
	need to add add conditions and if only single integer value is there we need to remove and. 
	need to code as per condition.
*/
