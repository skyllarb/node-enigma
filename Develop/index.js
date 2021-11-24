// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github Username',
        validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log('Enter your Github username!');
              return false;
            }
          }
    },



















];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err);
            return
        }
        console.log('Success!');
    })
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((data) => {
        writeToFile('README.md', generateMarkdown(data))
    }) 
}

// Function call to initialize app
init();
