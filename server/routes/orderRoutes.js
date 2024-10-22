import express from 'express';
const router = express.Router()
import {createOrder, getAllOrders, getOrderById, updateOrder, deleteOrder} from '../controllers/orderController.js';


router.post('/', createOrder);
router.get('/', getAllOrders);
router.get('/:id', getOrderById);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);

export default router;