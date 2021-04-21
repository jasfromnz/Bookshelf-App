const express = require('express');
const router = express.Router();
const statusCtrl = require('../controllers/status');

router.get('/:status/view', statusCtrl.getShelf);
router.post('/:status/view', statusCtrl.add);
router.delete('/:status/:id', statusCtrl.delete);

module.exports = router;