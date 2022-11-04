const inquirer = require("inquirer");
const mysql2 = require("mysql2");
const cTable = require("console.table");

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
}