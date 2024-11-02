import express from 'express';
const router = express.Router()
import {createOrder, getAllOrders, getOrderById, updateOrder, deleteOrder, getOrdersByUserId} from '../controllers/orderController.js';
import {verifyToken, verifyOrderOwnership, verifyAdmin} from '../middlewares/authMiddleware.js';


router.get('/user/:userId', getOrdersByUserId);
router.post('/', verifyToken, createOrder);
router.get('/', verifyToken, getAllOrders);
router.get('/:id', verifyToken, getOrderById);
router.put('/:id', verifyToken, updateOrder);
router.delete('/:id', verifyToken, deleteOrder);

export default router;