import express from 'express';
const router = express.Router()
import {createOrder, getAllOrders, getOrderById, updateOrder, deleteOrder} from '../controllers/orderController.js';
import {verifyToken, isAdmin} from '../middlewares/authMiddleware.js';

// đối với đơn hàng cần có thêm phần xác thực đơn hàng có thể truy cập bới user nào?

router.post('/', createOrder);
// router.get('/', [verifyToken, isAdmin], orderController.getAllOrders);
router.get('/', getAllOrders);
router.get('/:id', getOrderById);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);

export default router;