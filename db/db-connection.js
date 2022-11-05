const mysql = require("mysql2");
// Use mysql2 module to connect to database
const connection = mysql.createConnection(
  {
    host: "localhost",
    user: 'root',
    password: '7Hj#d28E=wZ%0',
    database: 'human_resources_db'
  },
  console.log(`Connected to the human_resources_db database.`)
);

module.exports = connection;