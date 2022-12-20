const inquirer = require('inquirer');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')
const generateHTML = require('./src/generateHTML')
const fs = require('fs');

const members = []

const init = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team managers name?',
        },
        {
            type: 'number',
            name: 'id',
            message: 'What is the team managers ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team managers email?',
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: 'What is the team managers office number?',
        },
    ]).then((answers) => {
        // take the answers and store it 
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        // store object in the members array
        members.push(manager)

        // need to execute menu function
        menu()
    })
};


function menu() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'add_members',
            message: 'Which type of team member would you like to add?',
            choices:
                ["Engineer", "Intern", "I don't want to add any more team members"]
        },
    ]).then((answer) => {
        if (answer.add_members === "Engineer") {
            return addEngineer()
        }
        else if (answer.add_members === "Intern") {
            return addIntern()
        }
        else {
            return writeFile()
        }
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineers name?',
        },
        {
            type: 'number',
            name: 'id',
            message: 'What is the engineers ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineers email?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineers Github username?',
        },
    ]).then((answers) => {
        // take the answers and store it 
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        // store object in the members array
        members.push(engineer)
        // need to execute menu function
        menu()
    })
}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the interns name?',
        },
        {
            type: 'number',
            name: 'id',
            message: 'What is the interns ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the interns email?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the interns school name?',
        },
    ]).then((answers) => {
        // take the answers and store it 
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        // store object in the members array
        members.push(intern)
        // need to execute menu function
        menu()
    })
}

function writeFile() {
    // take the answer array and send the data to the template literal file
    fs.writeFileSync('./dist/index.html', generateHTML(members))
}
init()