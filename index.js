const inquirer = require('inquirer');

class Engineer extends Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

class Intern extends Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

class Manager {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }
}

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team managers name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the team managers ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team managers email?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the team managers office number?',
        },
        {
            type: 'list',
            name: 'add members',
            message: 'Which type of team member would you like to add?',
            choices:
                ["Engineer", "Intern", "I don't want to add any more team members"]
        },
    ]);
};