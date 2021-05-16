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
        message: "Please write a brief description of your porject.",
        name: "description"
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