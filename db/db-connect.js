const mysql = require("mysql2");

const on = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "7Hj#d28E=wZ%0",
    database: "human_resources"

});

on.connect(function(err) {
    if (err) throw err;
    console.log("Connected to mySQL");
});