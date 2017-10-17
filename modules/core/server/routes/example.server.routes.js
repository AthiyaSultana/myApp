'use strict';

module.exports = function(app) {
  // Routing logic   
  // ...

  var example = require('../controllers/example.server.controller');
  app.route('/api/createVendor').post(example.create);
};
