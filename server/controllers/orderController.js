import Order from '../models/Order.js';

const createOrder = (req, res) => {
  const {
      user_id,
      total_price,
      shipping_address,
      shipping_city,
      shipping_postal_code,
      shipping_phone,
      shipping_status = 'not shipped', // Giá trị mặc định
      status = 'pending', // Giá trị mặc định
      order_items // Các mục đơn hàng từ `req.body`
  } = req.body;

  if (!order_items || order_items.length === 0) {
      return res.status(400).json({ message: 'Order items are required' });
  }

  // Tạo đơn hàng cùng với các mục đơn hàng
  Order.create(
      {
          user_id,
          total_price,
          shipping_address,
          shipping_city,
          shipping_postal_code,
          shipping_phone,
          shipping_status,
          status,
      },
      order_items,
      (err, result) => {
          if (err) return res.status(500).send(err);

          res.status(201).json({ message: 'Order created successfully!', orderId: result.orderId });
      }
  );
};


const getAllOrders = (req, res) => {
  Order.findAll((err, orders) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json(orders);
  });
};

const getOrderById = (req, res) => {
  const orderId = req.params.id;

  Order.findById(orderId, (err, order) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!order) return res.status(404).json({ message: "Order not found" });
      
      res.status(200).json(order);
  });
};

const updateOrder = (req, res) => {
  const orderId = req.params.id;
  const {
      total_price,
      shipping_address,
      shipping_city,
      shipping_postal_code,
      shipping_phone,
      shipping_status,
      status,
      order_items, // Các mục đơn hàng mới
  } = req.body;

  if (!order_items || order_items.length === 0) {
      return res.status(400).json({ message: 'Order items are required' });
  }

  Order.update(
      orderId,
      {
          total_price,
          shipping_address,
          shipping_city,
          shipping_postal_code,
          shipping_phone,
          shipping_status,
          status,
      },
      order_items,
      (err, result) => {
          if (err) return res.status(500).json({ error: err.message });
          res.status(200).json({ message: "Order updated successfully!" });
      }
  );
};

const deleteOrder = (req, res) => {
  const orderId = req.params.id;

  Order.delete(orderId, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ message: "Order deleted successfully!" });
  });
};

export {createOrder, getAllOrders, getOrderById, updateOrder, deleteOrder};
