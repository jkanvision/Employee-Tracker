// get modules
const express = require("express");
const mysql = require("mysql2");
const cTable = require("console.table");
const inquirer = require("inquirer");
const path = require("path");
const mainQuestions = require("./index");
const queries = require("./sql-queries");

// select port
const PORT = process.env.PORT || 3001;

const app = express();

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


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
