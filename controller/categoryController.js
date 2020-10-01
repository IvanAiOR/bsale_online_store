const { request, response } = require('express');
const { ResponseServerError } = require('../helpers/response-returns');
const category = require('../model/category');


const ReturnAllCategories = async(req = request, res = response) => {
    try {
    
        const allCategories = await category.all()
        res.status(200).json({
            ok:true,
            data:allCategories
        });
    } catch (error) {
        ResponseServerError(res,{msg:`Can't return the products`, error})
    }    
}

module.exports = {
    ReturnAllCategories
}