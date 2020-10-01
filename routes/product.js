const {Router} = require('express');
const {check} = require('express-validator');
const { ReturnDataWith, ReturnAll, ReturnDataByID, ReturnByCategory } = require('../controller/productController');
const { validFields } = require('../middleware/valid-filter');
const router = Router();


router.get('/all',ReturnAll);

router.post('/contain',
[
    //check is a tool to fastly review if your request is really right 
    check('dataSearched','Should have dataSearched var to search for name').notEmpty(),
    check('dataSearched','dataSearch just can be string').isString(),
    //validFields check if the previous checks were completed
    validFields
],
ReturnDataWith);

router.get('/details/:id', [
    check('id','Should have an id').notEmpty(),
    check('id','id need to be a number').isInt(),
    validFields
],
ReturnDataByID);

router.get('/byCategory',[
    check('categoryID','This route have to use a categoryID var to filter by category').notEmpty(),
    check('categoryID','categoryID should be a number').isInt()
],
ReturnByCategory);



module.exports = router;