const express = require('express');
const router = express.Router();
const validate = require('../validators/brand');
const brandController = require('../controllers/brand');

router.get('/:id', validate.findOne(), brandController.findOne);
router.get('/', brandController.findAll);
router.post('/', validate.create(), brandController.create);

module.exports = router;