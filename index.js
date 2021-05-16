// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your GitHub project title?",
        name: "title"
    },
    {
        type: "input",
        message: "Please write a brief description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "List your collaborators, if any, with links to their GitHub profiles.",
        name: "credit"
    },
    {
        type: "list",
        message: "Which license(s) should your project have?",
        name: "license",
        choices: [
            "MIT",
            "Apache 2.0",
            "GNU v3",
            "Mozilla Public License 2.0",
            "BSD 3-Clause"
        ]
    },
    {
        type: "input",
        message: "If you would like other developers to contribute it, please provide guidelines on how to do so.",
        name: "contributors"
    },
    {
        type: "input",
        message: "Provide the test cases for your application, if any.",
        name: "tests"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        console.log(fileName, data);
    }
)};

// TODO: Create a function to initialize app
function init() {
    //prompt user for q/a
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.MD", generateMarkdown(data))
    })

}

// Function call to initialize app
init();