const express = require('express');
const router = express.Router();
const flowerController = require('../controllers/flowerController');

router.post('/', flowerController.createFlower);
router.get('/', flowerController.getAllFlowers);
router.get('/:id', flowerController.getFlowerById);
router.put('/:id', flowerController.updateFlower);
router.delete('/:id', flowerController.deleteFlower);

module.exports = router;