/**
 * Tenants.js
 *
 * @description :: The Tenants table
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'tenants',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
    },
    name: {
      type: 'string'
    },
    alias: {
      type: 'string'
    },
    type: {
      type: 'integer'
    },
    contact_person: {
      type: 'string'
    },
    contact_number: {
      type: 'integer'
    },
    contact_email: {
      type: 'string'
    },
    address: {
      type: 'string'
    },
    status: {
      type: 'integer'
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
    }
  }
};