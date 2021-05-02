const express = require('express');
const router = express.Router();
const shelvesCtrl = require('../controllers/shelves');

router.get('/:status/view', shelvesCtrl.getShelf);
router.post('/:status/view', shelvesCtrl.add);
router.delete('/:status/:id', shelvesCtrl.delete);
router.get('/:status/:id/edit', shelvesCtrl.edit);
router.post('/:status/:id/edit', shelvesCtrl.update);

module.exports = router;