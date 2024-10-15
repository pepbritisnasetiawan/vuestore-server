module.exports = (app) => {
  const orders = require('../controller/order.controller');
  const router = require('express').Router();

  router.get('/user/:id', orders.findOrder);

  app.use('/api/orders', router);
};
