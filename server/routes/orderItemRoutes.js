import express from 'express';
const router = express.Router();
import {createOrderItem, getOrderItemsByOrderId, updateOrderItem, deleteOrderItem} from '../controllers/orderItemController.js';

router.post('/', createOrderItem);
router.put('/:id', updateOrderItem);
router.delete('/:id', deleteOrderItem);

export default router;