const Order = require('../models/Order');

exports.createOrder = (req, res) => {
    const {user_id, total_price, status} = req.body;
    Order.create({user_id, total_price, status}, (err, result) => {
        if (err) return res.status(500).send(err);

        res.send({message: 'Order created successfully!'});
    });
};

exports.getAllOrders = (req, res) => {
    Order.findAll((err, orders) => {
        if (err) return res.status(500).send(err);

        res.send(orders);
    });
};

exports.getOrderById = (req, res) => {
    const orderId = req.params.id;

    Order.findById(orderId, (err, order) => {
        if (err) return res.status(500).send(err);
        res.send(order);
    });
};

exports.updateOrder = (req, res) => {
  const orderId = req.params.id;
  const { total_price, status } = req.body;

  Order.update(orderId, { total_price, status }, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ message: "Order updated successfully!" });
  });
};

exports.deleteOrder = (req, res) => {
  const orderId = req.params.id;
  
  Order.delete(orderId, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ message: "Order deleted successfully!" });
  });
};