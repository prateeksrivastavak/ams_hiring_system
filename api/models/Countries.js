/**
 * Countries.js
 *
 * @description :: The countries table
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

 module.exports = {
    tableName: 'countries',
    // autoCreatedAt: false,
    // autoUpdatedAt: false,
    attributes: {
      id: {
        type: 'integer',
        autoIncrement: true,
        primaryKey : true
      },
      empId: {
        type: 'integer',
        columnName :'emp_id',
        unique : true
      },
      name: {
        type: 'string',
        columnName : 'name'
      },
      currency: {
        type: 'string',
        columnName : 'currency'
      },
      languages: {
        type: 'string',
        columnName : 'languages'
      },
      timeZones: {
        type: 'string',
        columnName : 'time_zones'
      },
    
      createdAt: {
        type: 'datetime',
        columnName : 'created_at'
      },
      updatedAt: {
        type: 'datetime',
        columnName : 'update_at'
      },
      createdBy: {
        type: 'integer',
        columnName : 'created_by'
      },
      updatedBy: {
        type: 'integer',
        columnName : 'updated_by'
      }
    }
  };