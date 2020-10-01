const { pool } = require("../database/config");
const {QueryBuilder} = require("../helpers/queryBuilder");

const product = {};

product.all = async () => {
    return await QueryBuilder(`SELECT * FROM product`);
}
product.containName = async(searchKey) => {
    return await QueryBuilder(`SELECT * FROM product WHERE name LIKE '%${searchKey}%'`);
}
product.filterByCategory = async(categoryID)=>{
    
    return await QueryBuilder(`SELECT * FROM product join category on category.id = product.category WHERE product.category=${categoryID}`);
}
product.priceBetween = async(minPrice=0,maxPrice=999999999)=>{
    return await QueryBuilder(`SELECT * FROM product where price between ${minPrice} and ${maxPrice}`);
}

product.byID=async(productID)=>{
    return await QueryBuilder(`SELECT product.id, product.name, product.url_image, product.price, product.discount, category.name as category FROM product join category on category.id = product.category WHERE product.id=${productID}`);

}
module.exports = product;