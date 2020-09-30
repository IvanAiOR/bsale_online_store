const { request, response } = require("express");
const { validationResult } = require("express-validator");
const { ResponseBadRequest } = require("../helpers/response-returns");

const validFields = (req=request,res=response,next)=>{
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return ResponseBadRequest(res,{errors:errors.mapped()});
        
    }
    next();
}

module.exports= {
    validFields
};