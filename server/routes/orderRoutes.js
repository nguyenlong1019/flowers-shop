import express from 'express';
const router = express.Router()
import {createOrder, getAllOrders, getOrderById, updateOrder, deleteOrder} from '../controllers/orderController.js';
import {verifyToken, verifyOrderOwnership, verifyAdmin} from '../middlewares/authMiddleware.js';


router.post('/', verifyToken, createOrder);
router.get('/', verifyToken, getAllOrders);
router.get('/:id', verifyToken, verifyOrderOwnership, getOrderById);
router.put('/:id', verifyToken, verifyOrderOwnership, updateOrder);
router.delete('/:id', verifyToken, verifyOrderOwnership, deleteOrder);

export default router;