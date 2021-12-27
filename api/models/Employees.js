/**
 * Tenants.js
 *
 * @description :: The Tenants table
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
const moment = require('moment');
 module.exports = {
    tableName: 'employees',
    // autoCreatedAt: false,
    // autoUpdatedAt: false,
    attributes: {
      id: {
        type: 'integer',
        autoIncrement: true,
        unique: true,
        primaryKey: true
      },
      empCode: {
        type: 'string',
        columnName : 'emp_code',
        defaultsTo : function(val){
            let reqData = sails.config.requestData;
           
           
            if(reqData.region=='Asia' ||reqData.region=='Europe'){
                var dob = new Date(reqData.dateOfBirth);
               
                return reqData.firstName + reqData.lastName +  moment(dob).date()   + (moment(dob).month() +1 <10 ? ('0' + (moment(dob).month() + 1)) : moment(dob).month() +1 ) +  moment(dob).year();
            }
            return null;
        }
      },
      firstName: {
        type: 'string',
        columnName : 'first_name'
      },
      lastName: {
        type: 'string',
        columnName : 'last_name'
      },
      dateOfBirth: {
        type: 'datetime',
        columnName : 'date_of_birth'
      },
      jobTitle: {
        type: 'integer',
        columnName : 'job_title'
      },
      company: {
        type: 'integer',
        columnName : 'current_company'
      },
      country: {
        type: 'string',
        columnName : 'country'
      },
    //   contact_person: {
    //     type: 'string'
    //   },
    //   contact_number: {
    //     type: 'integer'
    //   },
    //   contact_email: {
    //     type: 'string'
    //   },
    //   address: {
    //     type: 'string'
    //   },
    //   status: {
    //     type: 'integer'
    //   },
      createdAt: {
        type: 'datetime',
        columnName : 'created_at'
      },
      updatedAt: {
        type: 'datetime',
        columnName : 'updated_at'
      },
      createdBy: {
        type: 'integer',
        columnName : 'created_by'
      },
      updatedBy: {
        type: 'integer',
        columnName : 'updated_by'
      },
      country :{
          model :'countries',
          via :'empId'
      }
    }
  };