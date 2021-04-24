const express = require('express');
const router = express.Router();
const shelvesCtrl = require('../controllers/shelves');

router.get('/:status/view', shelvesCtrl.getShelf);
router.post('/:status/view', shelvesCtrl.add);
router.delete('/:status/:id', shelvesCtrl.delete);

module.exports = router;