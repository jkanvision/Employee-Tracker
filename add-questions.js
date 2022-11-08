// const mysql = require("mysql2");
// const cTable = require("console.table");
const inquirer = require("inquirer");
// const mainQuestions = require("./index");
// const connection = require("./db/db-connection");

// arrays for list-type questions
const deptArr = ["marketing", "sales", "distribution", "billing"];
const roleArr =["advertising-manager", "sales-manager", "distribution-manager", "collections-manager", "copy-writer", "salesperson", "driver", "dispatcher", "collections-rep"];
const managerArr =["Deborah Gonsalves", "Gerald Henson", "Lynn Ybor", "Terry Babson"];

// inquirer questions to add new department
const deptQuest = [
  {
    type: "input",
    message: "Please enter the new department's name.",
    name: "dept",
  },

];

// inquirer questions to add new role
const roleQuest = [
  {
    type: "input",
    message: "Please enter the new role's title.",
    name: "role",
  },
  {
    type: "input",
    message: "Please enter the new role's salary (use numbers).",
    name: "salary",
  },
  {
    type: "list",
    message: "Please select a department for the new role.",
    name: "roleDept",
    choices: deptArr,
  }

];

// inquirer questions to add new employee
const empQuest = [
  {
    type: "input",
    message: "What is the new employee's first name?",
    name: "first",
  },
  {
    type: "input",
    message: "What is the new employee's last name?.",
    name: "last",
  },
  {
    type: "list",
    message: "Please select the new employee's role.",
    name: "empRole",
    choices: roleArr,
  },
  {
    type: "list",
    message: "Please select the new employee's manager.",
    name: "manager",
    choices: managerArr,
  },

];



module.exports = {deptQuest, roleQuest, empQuest, deptArr, roleArr}; 