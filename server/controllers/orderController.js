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
        payment_method, // Phương thức thanh toán từ `req.body`
        payment_status = 'unpaid', // Giá trị mặc định cho trạng thái thanh toán
        items // Các mục đơn hàng từ `req.body`
    } = req.body;
    // console.log(req.body);
    // console.log(items);
    // console.log(status);
    
    
    

  if (!items || items.length === 0) {
        console.log("Here");
        
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
          payment_method,
          payment_status
      },
      items,
      (err, result) => {
            console.log(err);
            
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
    payment_method, // Phương thức thanh toán có thể được cập nhật
    payment_status, // Cập nhật trạng thái thanh toán
    items, // Các mục đơn hàng mới
  } = req.body;
  console.log(items);
  

  if (!items || items.length === 0) {
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
          payment_method,
          payment_status
      },
      items,
      (err, result) => {
          console.log(err);
          
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
