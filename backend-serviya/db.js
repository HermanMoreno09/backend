const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'yamabiko.proxy.rlwy.net',
  user: 'root',
  password: 'HTZhUpWVQdNoFfVAbxzPdvSjcILFIJRw',
  database: 'railway',
  port: 15120
});

db.connect(err => {
  if (err) throw err;
  console.log('Conectado a MySQL (serviya_prueba)');
});

module.exports = db;
