module.exports = (app) => {
  const orders = require('../controller/order.controller');
  const router = require('express').Router();

  router.get('/user/:id', orders.findOrder);
  router.post('/update/user/:id', orders.addToCart);
  router.delete('/delete/user/:id/product/:product', orders.removeFromCart);

  app.use('/api/orders', router);
};
