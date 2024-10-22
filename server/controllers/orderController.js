import Order from '../models/Order.js';

const createOrder = (req, res) => {
    const {user_id, total_price, shipping_address, shipping_city, shipping_postal_code, shipping_phone, status} = req.body;
    Order.create({user_id, total_price, status}, (err, result) => {
        if (err) return res.status(500).send(err);

        res.send({message: 'Order created successfully!'});
    });
};

const getAllOrders = (req, res) => {
    Order.findAll((err, orders) => {
        if (err) return res.status(500).send(err);

        res.send(orders);
    });
};

const getOrderById = (req, res) => {
    const orderId = req.params.id;

    Order.findById(orderId, (err, order) => {
        if (err) return res.status(500).send(err);
        res.send(order);
    });
};

const updateOrder = (req, res) => {
  const orderId = req.params.id;
  const { total_price, status } = req.body;

  Order.update(orderId, { total_price, status }, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ message: "Order updated successfully!" });
  });
};

const deleteOrder = (req, res) => {
  const orderId = req.params.id;
  
  Order.delete(orderId, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ message: "Order deleted successfully!" });
  });
};

export {createOrder, getAllOrders, getOrderById, updateOrder, deleteOrder};
