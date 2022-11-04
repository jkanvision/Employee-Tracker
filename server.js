const express = require("express");
const mysql = require("mysql2");
const cTable = require("console.table");
const inquirer = require("inquirer");
const initialQuestions = require("./index");
const path = require("path");
const PORT = process.env.PORT || 3001;

const app = express();

// use mysql2 to connect to database
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