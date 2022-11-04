const inquirer = require("inquirer");
const mysql2 = require("mysql2");
const cTable = require("console.table");

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

const initialQuestions = () => {
    inquirer
      .prompt(
        {
            type: "list",
            message: "What would you like to do?",
            name: "main-menu",
            choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"],
        }
      )
      .then((answer) => {
        switch (answer.main-menu) {
            case "View all departments":
                
            break;
        
            case "View all roles":
                
            break;

            case "View all employees":
                
            break;

            case "Add a department":
                
            break;

            case "Add a role":
                
            break;

            case "Add an employee":
                
            break;

            case "Update an employee role":
                
            break;
            
        }
      })
};

module.exports = initialQuestions();