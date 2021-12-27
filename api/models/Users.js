/**
 * Users.js
 *
 * @description :: The Users table
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'users',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    id: {
      type: 'integer'
    },
    name: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    phone: {
      type: 'integer'
    },
    mobile: {
      type: 'integer'
    },
    username: {
      type: 'string'
    },
    password: {
      type: 'string'
    },
    code: {
      type: 'string'
    },
    tenant_id: {
      type: 'integer'
    },
    image: {
      type: 'string'
    },
    gender: {
      type: 'string'
    },
    dob: {
      type: 'datetime'
    },
    personal_mail: {
      type: 'string'
    },
    emergency_no: {
      type: 'integer'
    },
    office_no: {
      type: 'integer'
    },
    extension: {
      type: 'integer'
    },
    perm_addr: {
      type: 'string'
    },
    comm_addr: {
      type: 'string'
    },
    created_at: {
      type: 'datetime'
    },
    updated_at: {
      type: 'datetime'
    },
    created_by: {
      type: 'integer'
    },
    updated_by: {
      type: 'integer'
    },
    logged_in: {
      type: 'integer'
    }
  }
};