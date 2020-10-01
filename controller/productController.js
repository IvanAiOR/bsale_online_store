const { request, response } = require('express');
const { ResponseServerError, ResponseBadRequest } = require('../helpers/response-returns');
const product = require('../model/product');

const ReturnAll = async(req = request, res = response) => {
try {

    const allProducts = await product.all()
    res.status(200).json({
        ok:true,
        data:allProducts
    });
} catch (error) {
    ResponseServerError(res,{msg:`Can't return the products`, error})
}    
}

const ReturnDataWith = async(req = request, res = response) => {
   try {
    const {dataSearched} = req.body;
    const FoundProducts = await product.containName(dataSearched)
    res.status(200).json({
        ok:true,
        data:FoundProducts
    });
} catch (error) {
    ResponseServerError(res,{msg:`Can't return the products`, error})
}  
}

const ReturnDataByID = async(req = request, res = response)=>{
    try {
        const {id} = req.body;
        
        const FoundProduct = await product.byID(id)
        res.status(200).json({
            ok:true,
            data:FoundProduct
    });
    } catch (error) {
        ResponseServerError(res,{msg:`Can't return the products`, error})
        
    }
}

const ReturnByCategory= async(req = request, res = response) =>{
    try {
        const {categoryID} = req.body
        const FoundProducts = await product.filterByCategory(categoryID);
        res.status(200).json({
            ok:true,
            data:FoundProducts
    });
    } catch (error) {
        ResponseServerError(res,{msg:`Can't return the products`, error})
        
    }
}

module.exports = {
    ReturnAll,
    ReturnDataWith,
    ReturnDataByID,
    ReturnByCategory
}