import OrderItem from '../models/OrderItem.js';

const createOrderItem = (req, res) => {
  const { order_id, flower_id, quantity, price } = req.body;
  OrderItem.create({ order_id, flower_id, quantity, price }, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ message: "Order item added successfully!" });
  });
};

const getOrderItemsByOrderId = (req, res) => {
  const orderId = req.params.orderId;
  OrderItem.findByOrderId(orderId, (err, orderItems) => {
    if (err) return res.status(500).send(err);
    res.send(orderItems);
  });
};

const updateOrderItem = (req, res) => {
  const orderItemId = req.params.id;
  const { quantity, price } = req.body;

  OrderItem.update(orderItemId, { quantity, price }, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ message: "Order item updated successfully!" });
  });
};

const deleteOrderItem = (req, res) => {
  const orderItemId = req.params.id;

  OrderItem.delete(orderItemId, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ message: "Order item deleted successfully!" });
  });
};

export {createOrderItem, getOrderItemsByOrderId, updateOrderItem, deleteOrderItem};
