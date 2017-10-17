'use strict';

module.exports = function (app) {
  // User Routes
  var users = require('../controllers/users.server.controller');

  // Setting up the users profile api
  app.route('/api/users/me').get(users.me);
  app.route('/api/users').put(users.update);
  app.route('/api/users/accounts').delete(users.removeOAuthProvider);
  app.route('/api/users/password').post(users.changePassword);
  app.route('/api/users/picture').post(users.changeProfilePicture);

  //Route to create a restuarent user
  app.route('/api/users/createUser').post(users.createUser);

   //Route to authenticate the user
    app.route('/api/users/signin').post(users.signin);

    //Route to signout
    app.route('/api/users/signout').post(users.signout);

  // Finish by binding the user middleware
  app.param('userId', users.userByID);


};
