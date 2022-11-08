const inquirer = require("inquirer");

// arrays for list-type questions
const deptArr = ["marketing", "sales", "distribution", "billing"];

const roleArr =["advertising-manager", "sales-manager", "distribution-manager", "collections-manager", "copy-writer", "salesperson", "driver", "dispatcher", "collections-rep"];

const managerArr =["Deborah Gonsalves", "Gerald Henson", "Lynn Ybor", "Terry Babson"];

const empArr = ["Charlie Dixon", "Danielle Tindel", "Jack Kane", "Marley Grossman", "Fred Flintstone", "Constantine Georgopolis", "Crystal Kennedy", "Jane Perkins", "Leanne Hedey", "Jessica Rollins", "Melissa Golojuch"];

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

// inquirer questions to update an employee's role
const updateQuest = [
  {
    type: "list",
    message: "Please select an employee.",
    name: "emp",
    choices: empArr,
  },
  {
    type: "list",
    message: "Please select the employee's new role.",
    name: "updRole",
    choices: roleArr,
  },

];



module.exports = {deptQuest, roleQuest, empQuest, updateQuest, deptArr, roleArr, managerArr, empArr}; 