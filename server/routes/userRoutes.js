const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const {verifyToken, isAdmin} = require('../middlewares/authMiddleware');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.post('/change-password', userController.changePassword);
router.post('/', [verifyToken, isAdmin], userController.createUser);
router.get('/', [verifyToken, isAdmin], userController.getAllUsers);
router.get('/:id', [verifyToken, isAdmin], userController.getUserById);
router.put('/:id', [verifyToken, isAdmin], userController.updateUser);
router.delete('/:id', [verifyToken, isAdmin], userController.deleteUser);

module.export = router;
