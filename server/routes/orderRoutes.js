const express = require('express');
const router = express.Router()
const orderController = require('../controllers/orderController');
const {verifyToken, isAdmin} = require('../middlewares/authMiddleware');

// đối với đơn hàng cần có thêm phần xác thực đơn hàng có thể truy cập bới user nào?

router.post('/', orderController.createOrder);
router.get('/', [verifyToken, isAdmin], orderController.getAllOrders);
router.get('/:id', orderController.getOrderById);
router.put('/:id', orderController.updateOrder);
router.delete('/:id', orderController.deleteOrder);

module.exports = router;