// get modules
const express = require("express");
const mysql = require("mysql2");
const cTable = require("console.table");
const inquirer = require("inquirer");
const path = require("path");
const mainQuestions = require("./index");
const questions = require("./add-questions");
const connection = require("./db/db-connection");

// select port
const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () =>
  console.log("")
);
