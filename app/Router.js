'use strict';

module.exports = [{
  path: '/pizza',
  middleware: [],
  handler: autoload('./app/routes/pizzaRoute')
}];
