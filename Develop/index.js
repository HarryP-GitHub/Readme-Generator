// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// title, description, installation, usage, contributing, tests, license, github, email
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide a description of your installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions of how to use your application',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please list contributors and sources for this project',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide tests and instructions of how to run them',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license which you used for your project',
        choices: ['None', 'MIT', 'Apache', 'BSL', 'BSD', 'EPL', 'GPL'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Provide your GitHub username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Provide your contact email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.log(err) : console.log('Your README has been created!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        writeToFile("readme.md", generateMarkdown(answers));
    });
}

// Function call to initialize app
init();
