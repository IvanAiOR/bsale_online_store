const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    user: 'bsale_test',
    database: 'bsale_test',
    password: process.env.DB_PASSWORD,
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

module.exports = {
    pool
}