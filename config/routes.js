/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */
const prefix = '/api/v1/';
module.exports.routes = {

  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
   * etc. depending on your default view engine) your home page.              *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  '/': {
    view: 'homepage'
  },

  /***************************************************************************
   *                                                                          *
   * Custom routes here...                                                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the custom routes above, it   *
   * is matched against Sails route blueprints. See `config/blueprints.js`    *
   * for configuration options and examples.                                  *
   *                                                                          *
   ***************************************************************************/
  ['GET ' + prefix + 'getAllUsers']: {
    controller: 'Users',
    action: 'getAllUsers'
  },
  ['GET ' + prefix + 'getUser']: {
    controller: 'Users',
    action: 'getUser'
  },
  ['GET ' + prefix + 'getAllTenants']: {
    controller: 'TenantsController',
    action: 'getAllTenants'
  },
  ['GET ' + prefix + 'getAll']: {
    controller: 'CommonController',
    action: 'getAll'
  },
  ['GET ' + prefix + 'getDetails']: {
    controller: 'CommonController',
    action: 'getDetailsById'
  },
  ['POST ' + prefix + 'saveData']: {
    controller: 'CommonController',
    action: 'postData'
  },
  ['POST ' + prefix + 'searchData']: {
    controller: 'CommonController',
    action: 'searchData'
  },
  ['POST ' + prefix + 'fileUpload']: {
    controller: 'CommonController',
    action: 'fileUpload'
  },
  ['POST ' + prefix + 'convertData']: {
    controller: 'CommonController',
    action: 'saveJsonObjectInDB'
  },
  ['GET ' + prefix + 'fileUploadIndex']: {
    controller: 'FileUploadController',
    action: 'index'
  },
  ['POST ' + prefix + 'login']: {
    controller: 'AuthController',
    action: 'login'
  },
  ['POST ' + prefix + 'testLogin']: {
    controller: 'AuthController',
    action: 'testLogin'
  },
  ['POST ' + prefix + 'users/auth']: {
    controller: 'AuthController',
    action: 'auth'
  }
};
