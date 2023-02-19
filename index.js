const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");



// array of questions for user
const questions = [
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
      },
    {
      type: 'input',
      message: 'What is your project description?',
      name: 'projectDescription',
    },
    {
      type: 'input',
      message: 'Which are the installation instructions for this app?',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the command someone needs to run to use your app?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'How can someone contribute to your project?',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'How can users test your app?',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'Where can users send questions about the app/repo?',
        name: 'questions',
      },
  ];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          console.error(err);
        }
        // file written successfully
      });
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        const title = generateMarkdown("#", response.title);
        const description = generateMarkdown("## Project description:", response.projectDescription);
        const projectInfo = `${title} ${description} ## Installation instructions: ${response.installation}
        Usage: ${response.usage}
        Contributing details: ${response.contributing}
        Tests: ${response.tests}
        Questions: ${response.questions}
        `;
        writeToFile('./README.md', projectInfo)
});
}

// function call to initialize program
init();
