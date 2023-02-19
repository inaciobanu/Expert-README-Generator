# Expert-README-Generator
Working with ES6 &amp; Node.js: Professional README Generator
Open source projects on GitHub must have high-quality README files that include the app's purpose, how to use it, how to install it, how to report issues, and how to make contributions. The latter increases the likelihood that other developers will contribute to the success of the project.

This week's assignment is to create a command-line application (CLI) that dynamically generates a professional README.md file from a user's input using the Inquirer packageLinks to an external site. This allows the project creator to devote more time to working on the project.

The application will be invoked by using the command: `node index.js`.

## Knowledge applied from this week's bootcamp curricula

* what is node.js
* arrow functions
* let and const
* template literals
* array functional loops
* process.argv (node.js)
* working with the fs module (reading and writing to files)
* working with ES6 modules.

## User Story
```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

Create a command-line application that accepts user input.

When a user is prompted for information about the application repository, a high-quality, professional README.md is generated with:

* The title of my project

* Sections entitled: Description, Table of Contents, Installation, Usage, License, Contributing, Tests, Questions.

* When a user enters the project title, it's displayed as the title of the README.

* When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions, this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests.

* When a user chooses a license for their application from a list of options, a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.

* When a user enters their GitHub username, it's added to the section of the README entitled Questions, with a link to their GitHub profile.

* When a user enters their email address, it's added to the section of the README entitled Questions, with instructions on how to reach them with additional questions.

* When a user clicks on the links in the Table of Contents, they are taken to the corresponding section of the README.

## Review

* A walkthrough video demonstrating the functionality of the application.

* A sample README.md file for a project repository generated using your application.

* The URL of the GitHub repository, with a unique name and a README describing the project, [is here](https://github.com/inaciobanu/Expert-README-Generator).
