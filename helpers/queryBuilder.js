const { pool } = require("../database/config");

const QueryBuilder = (query = '') => {
    return new Promise((resolve, reject) => {
        pool.query(query, (errorResult, rowResult) => {
            if (errorResult) {
                console.log(errorResult)

                return reject;
            }
            return resolve(rowResult);
        })
    })
}
module.exports = {
    QueryBuilder
}