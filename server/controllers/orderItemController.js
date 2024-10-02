const OrderItem = require('../models/OrderItem');

exports.createOrderItem = (req, res) => {
  const { order_id, flower_id, quantity, price } = req.body;
  OrderItem.create({ order_id, flower_id, quantity, price }, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ message: "Order item added successfully!" });
  });
};

exports.getOrderItemsByOrderId = (req, res) => {
  const orderId = req.params.orderId;
  OrderItem.findByOrderId(orderId, (err, orderItems) => {
    if (err) return res.status(500).send(err);
    res.send(orderItems);
  });
};

exports.updateOrderItem = (req, res) => {
  const orderItemId = req.params.id;
  const { quantity, price } = req.body;

  OrderItem.update(orderItemId, { quantity, price }, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ message: "Order item updated successfully!" });
  });
};

exports.deleteOrderItem = (req, res) => {
  const orderItemId = req.params.id;

  OrderItem.delete(orderItemId, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ message: "Order item deleted successfully!" });
  });
};
