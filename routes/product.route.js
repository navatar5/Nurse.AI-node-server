const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/product.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);
//
//
router.post('/create', product_controller.product_create);
//
//
router.put('/:id/update', product_controller.product_update);

router.get('/findByName/:username', product_controller.product_findByName)
module.exports = router;
