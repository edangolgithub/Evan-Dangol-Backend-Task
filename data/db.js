const mysql = require('mysql2/promise');

let db;

async function createPool() {
    if (!db) {
        db = await mysql.createPool({
            host: '127.0.0.1',
            user: 'root',
            password: 'secrET123#@',
            database: 'evan'
        });
        console.log('MySQL Connected...');
    }
    return db;
}

module.exports = createPool;
