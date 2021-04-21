const express = require('express');
const router = express.Router();
const shelvesCtrl = require('../controllers/shelves');

router.get('/', shelvesCtrl.index);
router.post('/', shelvesCtrl.add)
router.delete('/:id', shelvesCtrl.delete);
router.get('/:id/edit', shelvesCtrl.edit);
router.post('/:id/edit', shelvesCtrl.update);

module.exports = router;