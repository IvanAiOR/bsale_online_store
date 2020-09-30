const {Router} = require('express');
const {check} = require('express-validator');
const { ReturnDataWith, ReturnAll } = require('../controller/productController');
const { validFields } = require('../middleware/valid-filter');
const router = Router();


router.get('/all',ReturnAll);

router.get('/contain',[
    //check is a tool to fastly review if your request is really right 
    check('dataSearched','Debe contener la variable dataSearched para esta ruta').exists(),
    check('dataSearched','El campo debe ser solo texto').isString(),
    //validFields check if the previous checks were completed
    validFields
],
ReturnDataWith);



module.exports = router;