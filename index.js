const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'manager name',
            message: 'What is the team managers name?',
        },
        {
            type: 'input',
            name: 'manager name',
            message: 'What is the team managers name?',
        },
        {
            type: 'input',
            name: 'manager id',
            message: 'What is the team managers ID?',
        },
        {
            type: 'input',
            name: 'manager name',
            message: 'What is the team managers email?',
        },
        {
            type: 'input',
            name: 'manager name',
            message: 'What is the team managers office number?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license do you need for your project?',
            choices:
                ["MIT", "APACHE", "GNU GPL", "BSD", "None"]
        },
    ]);
};