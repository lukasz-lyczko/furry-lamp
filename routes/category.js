const express = require('express');
const router = express.Router();
const validate = require('../validators/category');
const categoryController = require('../controllers/category');

router.get('/:id', validate.findOne(), categoryController.findOne);
router.get('/', categoryController.findAll);
router.post('/', validate.create(), categoryController.create);

module.exports = router;