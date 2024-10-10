import express from 'express';
const router = express.Router();
import {createFlower, getAllFlowers, getFlowerById, updateFlower, deleteFlower} from '../controllers/flowerController.js';

// router.post('/', [verifyToken, isAdmin], flowerController.createFlower);
// router.get('/', flowerController.getAllFlowers);
// router.get('/:id', flowerController.getFlowerById);
// router.put('/:id', [verifyToken, isAdmin], flowerController.updateFlower);
// router.delete('/:id', [verifyToken, isAdmin], flowerController.deleteFlower);

router.post('/', createFlower);
router.get('/', getAllFlowers);
router.get('/:id', getFlowerById);
router.put('/:id', updateFlower);
router.delete('/:id', deleteFlower);

export default router;