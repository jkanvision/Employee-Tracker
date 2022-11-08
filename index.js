const inquirer = require("inquirer");
const mysql2 = require("mysql2");
const cTable = require("console.table");
const {deptQuest, roleQuest, empQuest, updateQuest, deptArr, roleArr, managerArr, empArr} = require("./add-questions");
const connection = require("./db/db-connection");

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

function mainQuestions() {
    inquirer
      .prompt(
        {
            type: "list",
            message: "What would you like to do?",
            name: "main",
            choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"],
        }
      )
      .then((answer) => {
        if (answer.main === "Add an employee") {
          addEmployee();

        } else if (answer.main ===  "Add a department") {
          addDepartment();

        } else if (answer.main === "Add a role") {
          addRole();

        } else if (answer.main === "Update an employee role") {
          upDateEmployee();

        } else if (answer.main === "View all departments") {
          connection.query("SELECT * FROM department", function(err, department) {
            console.table(department);
            mainQuestions();
          });

        } else if (answer.main === "View all roles") {
          connection.query("SELECT * FROM role", function(err, role) {
            console.table(role);
            mainQuestions();
          });

        } else if (answer.main === "View all employees") {
          connection.query("SELECT * FROM employee", function(err, employee) {
            console.table(employee);
            mainQuestions();
          });

        }
        
      })

};

// function to run add department questions
const addDepartment = () => {
  inquirer
    .prompt(deptQuest)
    .then((answer) => {
      connection.query("INSERT INTO department (department_name) VALUES (?)", answer.dept, function (err, result) {
        console.log("${answer.dept} added to Departments");
      });
      deptArr.push(answer.dept);
      mainQuestions();
    });
  
};

// function to run add role questions
const addRole = () => {
  inquirer
    .prompt(roleQuest)
    .then((answers) => {
      connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?);", answers.role, answers.salary, answers.roleDept, function (err, result) {
        console.log("${answers.role} added to Roles");
      });
      roleArr.push(answers.role);
      mainQuestions();
    });
  
};

// function to run add employee questions
const addEmployee = () => {
  inquirer
    .prompt(empQuest)
    .then((answers) => {
      connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);", answers.first, answers.last, answers.empRole, answers.manager, function (err, result) {
        console.log("${answers.first} " + "${answers.last} " + "added to Employees");
      });
      mainQuestions();
    });
  
};

// function to run update employee role questions
const upDateEmployee = () => {
  inquirer
    .prompt(updateQuest)
    .then((answers) => {
      mainQuestions();
    });
}

module.exports = mainQuestions();