const express = require('express');
const router = express.Router();
const shelvesCtrl = require('../controllers/shelves');


router.get('/', shelvesCtrl.index);
router.get('/:status/view', shelvesCtrl.getShelf);
// router.post('/', shelvesCtrl.addBook);

module.exports = router;