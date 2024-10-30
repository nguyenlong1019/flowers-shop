import express from 'express';
const router = express.Router();
import {createFlower, getAllFlowers, get8Feature, get3Sale, getAllSortCreatedAt, getFlowerById, updateFlower, deleteFlower} from '../controllers/flowerController.js';
import {verifyToken, verifyAdmin} from '../middlewares/authMiddleware.js';

router.get('/featured-products', get8Feature);
router.get('/sale-products', get3Sale);
router.get('/product-list', getAllSortCreatedAt);

router.post('/', verifyToken, verifyAdmin, createFlower);
router.get('/', getAllFlowers);
router.get('/:id', getFlowerById);
router.put('/:id', verifyToken, verifyAdmin, updateFlower);
router.delete('/:id', verifyToken, verifyAdmin, deleteFlower);

export default router;