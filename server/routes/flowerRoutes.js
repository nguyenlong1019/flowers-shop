import express from 'express';
const router = express.Router();
import {createFlower, getAllFlowers, getFlowerById, updateFlower, deleteFlower} from '../controllers/flowerController.js';
import {verifyToken, verifyAdmin} from '../middlewares/authMiddleware.js';

router.post('/', verifyToken, verifyAdmin, createFlower);
router.get('/', getAllFlowers);
router.get('/:id', getFlowerById);
router.put('/:id', verifyToken, verifyAdmin, updateFlower);
router.delete('/:id', verifyToken, verifyAdmin, deleteFlower);

export default router;