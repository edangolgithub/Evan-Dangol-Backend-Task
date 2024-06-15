const mysql = require('mysql2/promise');

let poolConfig = {
  user: 'root',
  password: 'secrET123#@',
  database: 'evan'
};


if (process.env.DOCKER_ENV === 'true') {
  poolConfig.host = 'db'; 
} else {
  poolConfig.host = '127.0.0.1';
}
console.log(poolConfig);
const pool = mysql.createPool(poolConfig);
console.log('pool',pool);
async function query(sql, params) {
  const [rows] = await pool.execute(sql, params);

  return rows;
}

module.exports = {
  query
}