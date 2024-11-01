import express from 'express';
const router = express.Router()
import {createOrder, getAllOrders, getOrderById, updateOrder, deleteOrder} from '../controllers/orderController.js';
import {verifyToken, verifyOrderOwnership, verifyAdmin} from '../middlewares/authMiddleware.js';



router.post('/', verifyToken, createOrder);
router.get('/', verifyToken, getAllOrders);
router.get('/:id', verifyToken, getOrderById);
router.put('/:id', verifyToken, updateOrder);
router.delete('/:id', verifyToken, deleteOrder);

export default router;