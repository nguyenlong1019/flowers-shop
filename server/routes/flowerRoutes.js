const express = require('express');
const router = express.Router();
const flowerController = require('../controllers/flowerController');

router.post('/', [verifyToken, isAdmin], flowerController.createFlower);
router.get('/', flowerController.getAllFlowers);
router.get('/:id', flowerController.getFlowerById);
router.put('/:id', [verifyToken, isAdmin], flowerController.updateFlower);
router.delete('/:id', [verifyToken, isAdmin], flowerController.deleteFlower);

module.exports = router;