const { pool } = require("../database/config");

const product = {};

product.all = async () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM product', (errorResult, rowResult) => {
            if (errorResult) {
                console.log(errorResult)

                return reject;
            }
            return resolve(rowResult);
        })
    })

}
product.containName = async(key) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM product WHERE name LIKE '%${key}%'`, (errorResult, rowResult) => {
            if (errorResult) {
                console.log(errorResult)

                return reject;
            }
            return resolve(rowResult);
        })
    })

}
module.exports = product;