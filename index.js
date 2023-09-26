const mysql = require('mysql2');
const CryptoJS = require("crypto-js");
require('dotenv').config();
const API_ENCRYPT_KEY = process.env.DATABASE_ENCRYPT_KEY;
const connectionPool = (databaseConnectionKey) => {
    const databaseConfig = JSON.parse(CryptoJS.AES.decrypt(databaseConnectionKey, API_ENCRYPT_KEY).toString(CryptoJS.enc.Utf8))
    const pool = mysql.createPool({
        host: databaseConfig.host,
        user: databaseConfig.userName,
        database: databaseConfig.database,
        password:databaseConfig.password,
        port: databaseConfig.port,
        waitForConnections: true,
        connectionLimit: 10,
        maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
        idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
        queueLimit: 0,
        enableKeepAlive: true,
        keepAliveInitialDelay: 0
    })
    return pool;
}

module.exports = connectionPool