// const mysql = require("mysql2");
// const cTable = require("console.table");
// const inquirer = require("inquirer");
// const mainQuestions = require("./index");
// const connection = require("./db/db-connection");

// const addDepartment = () => {
//   inquirer
//     .prompt(
//       {
//         type: "input",
//         message: "What is the name of the new department?",
//         name: "new-dept",
//       }
//     )
//     .then((answer) => {
//       connection.query("INSERT INTO department (department_name) VALUES (?)", answer, function (err, result) {
//       console.log("${answer.new-dept} added to Departments");
//       mainQuestions();
//       });

//     });
// };





// module.exports = addDepartment();