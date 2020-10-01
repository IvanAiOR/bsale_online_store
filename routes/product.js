const {Router} = require('express');
const {check} = require('express-validator');
const { ReturnProductsWith, ReturnAllProducts, ReturnDataByID, ReturnProductsByCategory } = require('../controller/productController');
const { validFields } = require('../middleware/valid-filter');
const router = Router();


router.get('/all',ReturnAllProducts);

router.post('/contain',
[
    //check is a tool to fastly review if your request is really right 
    check('dataSearched','Should have dataSearched var to search for name').notEmpty(),
    check('dataSearched','dataSearch just can be string').isString(),
    //validFields check if the previous checks were completed
    validFields
],
ReturnProductsWith);

router.post('/details', [
    check('id','Should have an id').notEmpty(),
    check('id','id need to be a number').isInt(),
    validFields
],
ReturnDataByID);

router.post('/byCategory',[
    check('categoryID','This route have to use a categoryID var to filter by category').notEmpty(),
    check('categoryID','categoryID should be a number').isNumeric()
],
ReturnProductsByCategory);



module.exports = router;