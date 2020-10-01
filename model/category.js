const {QueryBuilder} = require("../helpers/queryBuilder");

const category={};

category.all = () =>{
    return await QueryBuilder(`SELECT * FROM category`);
}


module.exports = category;