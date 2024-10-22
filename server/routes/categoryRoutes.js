import express from 'express';
const router = express.Router()
import {createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory} from '../controllers/categoryController.js';
import {verifyToken, verifyAdmin} from '../middlewares/authMiddleware.js';

router.post('/', verifyToken, verifyAdmin, createCategory);
router.get('/', getAllCategories);
router.get('/:id', getCategoryById);
router.put('/:id', verifyToken, verifyAdmin, updateCategory);
router.delete('/:id', verifyToken, verifyAdmin, deleteCategory);

export default router;
