const express = require("express");
const mysql = require("mysql2");
const cTable = require("console.table");
const inquirer = require("inquirer");


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

  // asciiart splash screen commands
const logo = require('asciiart-logo');
const description = "Keep track of your employee data with Employee Tracker!";
console.log(logo( {
    name: 'Employee Tracker',
    font: 'Standard',
    lineChars: 8,
    padding: 5,
    margin: 3,
    borderColor: 'red',
    logoColor: 'bold-magenta',
    textColor: 'white',
})
    .emptyLine()
    .right('version 1.0.0')
    .emptyLine()
    .center(description)
    .render()
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);