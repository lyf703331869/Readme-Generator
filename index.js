// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your project's name?",
    name: "title",
  },
  {
    type: "input",
    message: "Please write a shore description of your project.",
    name: "description",
  },
  {
    type: "list",
    message: "What kind of license should your project have?",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "NONE"],
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "installation",
    default: "npm install",
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "usage",
  },
  {
    type: "input",
    name: "contributing",
    message:
      "Please specify any guidelines for possible contributors to follow.",
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "test",
    default: "npm test",
  },
];

inquirer.prompt(questions).then((response) => {
  writeToFile("README.md", generateMarkdown(response));
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log("Success!");
  });
}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
