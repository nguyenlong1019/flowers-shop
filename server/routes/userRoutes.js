import express from 'express';
const router = express.Router();
import {generateToken, registerUser, loginUser, changePassword, createUser, getAllUsers, getUserById, updateUser, deleteUser} from '../controllers/userController.js';
import {verifyToken, isAdmin} from '../middlewares/authMiddleware.js';

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/change-password', changePassword);
// router.post('/', [verifyToken, isAdmin], userController.createUser);
// router.get('/', [verifyToken, isAdmin], userController.getAllUsers);
// router.get('/:id', [verifyToken, isAdmin], userController.getUserById);
// router.put('/:id', [verifyToken, isAdmin], userController.updateUser);
// router.delete('/:id', [verifyToken, isAdmin], userController.deleteUser);

router.post('/', createUser);
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
