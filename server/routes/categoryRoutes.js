const express = require('express');
const router = express.Router()
const categoryController = require('../controllers/categoryController');
const {verifyToken, isAdmin} = require('../middlewares/authMiddleware');

router.post('/', [verifyToken, isAdmin], categoryController.createCategory);
router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);
router.put('/:id', [verifyToken, isAdmin], categoryController.updateCategory);
router.delete('/:id', [verifyToken, isAdmin], categoryController.deleteCategory);

module.exports = router;