const mysql = require("mysql2");

const connection = mysql.createConnection({
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});

connection.connect();

module.exports = connection;
