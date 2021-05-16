// TODO: Include packages needed for this application
const fs = require('fs');

// TODO: Create an array of questions for user input

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        console.log(fileName, data);
    }
)};

// TODO: Create a function to initialize app

// Function call to initialize app