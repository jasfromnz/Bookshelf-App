const express = require('express');
const router = express.Router();
const readersCtrl = require('../controllers/readers');

router.get('/', readersCtrl.index);
router.post('/', readersCtrl.add)
router.delete('/:id', readersCtrl.delete);
router.get('/:id/edit', readersCtrl.edit);
router.post('/:id/edit', readersCtrl.update);

module.exports = router;