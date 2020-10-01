const {Router} = require('express');
const {check} = require('express-validator');
const { validFields } = require('../middleware/valid-filter');
const {ReturnAllCategories} = require('../controller/categoryController')
const router = Router();


router.get('/all',ReturnAllCategories);

module.exports = router;