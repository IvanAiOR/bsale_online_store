const {QueryBuilder} = require("../helpers/queryBuilder");

const category={};

category.all = async() =>{
    return await QueryBuilder(`SELECT * FROM category`);
}


module.exports = category;