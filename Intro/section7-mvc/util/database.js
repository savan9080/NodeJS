const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  database: "nodecomplete",
  user: "root",
  password: "",
});
module.exports = pool.promise();
