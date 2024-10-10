import express from 'express';
const router = express.Router()
import {createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory} from '../controllers/categoryController.js';
import {verifyToken, isAdmin} from '../middlewares/authMiddleware.js';

// router.post('/', [verifyToken, isAdmin], categoryController.createCategory);
// router.get('/', categoryController.getAllCategories);
// router.get('/:id', categoryController.getCategoryById);
// router.put('/:id', [verifyToken, isAdmin], categoryController.updateCategory);
// router.delete('/:id', [verifyToken, isAdmin], categoryController.deleteCategory);

router.post('/', createCategory);
router.get('/', getAllCategories);
router.get('/:id', getCategoryById);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

export default router;
