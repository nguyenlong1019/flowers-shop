import express from 'express';
const router = express.Router();
import {createOrderItem, getOrderItemsByOrderId, updateOrderItem, deleteOrderItem} from '../controllers/orderItemController.js';
import {verifyToken, verifyAdmin} from '../middlewares/authMiddleware.js';

router.post('/', verifyToken, createOrderItem);
router.put('/:id', verifyToken, updateOrderItem);
router.delete('/:id', verifyToken, deleteOrderItem);

export default router;