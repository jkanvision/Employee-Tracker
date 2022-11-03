const inquirer = require("inquirer");
const mysql2 = require("mysql2");
// const consl = require("console_table");

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