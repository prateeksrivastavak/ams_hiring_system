# Applicant Management System - Backend Services 

## Dev Setup

### Prerequisite Softwares
1. Mysql 5.6 or later
2. Redis server
3. Node Js 6.6+
4. Node Global packages - bunyan, nodemon

### 

 We observed that we need to setup the following in order to setup the development environment.
 1. Install the following npm components globally on the dev/prod environment in order to make your setup work fine
    `npm install -g bunyan pm2`

 2. Add the following environment variables

   * NODE_ENV with value of either `development` or `production` depending on your environment to make `node-config` work fine without errors.

     Example: export NODE_ENV=development  // Development environment
   * export NODE_APP_INSTANCE=0 to specify the number of instances to run in production
      
 3. PM2 is the process monitor that we use for purposes of live reloading, restart from crash etc. You should know how to use this tool well (Read [here](https://github.com/Unitech/pm2) for basic details and i[here](https://github.com/Unitech/PM2/blob/master/ADVANCED_README.md) for advanced guide of using PM2)

 4. Bunyan logging framework is used in our application for logging.

 5. Encountered some errors related to node-config module about setting environment and config file in the same name as your environment variable. Look [here](https://github.com/lorenwest/node-config/wiki/Strict-Mode) for some common faced issues.

 6. Setup wkhtmltopdf in your system using `sudo apt-get install wkhtmltopdf`

 7. Install Redis Server/Client to make sure that queuing works or point to right redis server in dev-0.json inside config folder

## Configuration

```
{
    developmentServer: {
    adapter: 'sails-mysql',
    host: '139.59.57.10',
    user: 'superadmin', //optional
    password: 'tech.hp!', //optional
    database: 'ams' //optional
  },
}
```

## How to Run?

'node app.js' from your root path of the project
