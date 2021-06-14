const fs = require('fs');
const inquirer = require("inquirer");
const generateHTML = require('./src/generateHTML');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const managers = [];
const engineers = [];
const interns = [];

const employeeQs = [
    {
        type: 'input',
        name: 'name',
        message: "Please enter the employee's name.",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name.')
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'id',
        message: "Please enter the employee's ID.",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter an ID')
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: "Please enter the employee's email address.",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter an email address')
                return false;
            }
        }
    },

    {
        type: 'list',
        name: 'role',
        message: "Please pick the employee's role.",
        choices: ['Manager', 'Engineer', 'Intern']
    }
];

// gets employee info started
function startEmployee() {
    console.log(managers, engineers, interns);
    return inquirer.prompt(employeeQs);
};

// gets last piece of information for each employee type
addRoleInfo = data => {
    let roleInfo = '';
    if (data.role === 'Manager') {
        roleInfo = 'office number';
    } else if (data.role === 'Engineer') {
        roleInfo = 'GitHub username';
    } else {
        roleInfo = 'school'
    };

    console.log(data);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'roleInfo',
            message: `Please enter employee's ${roleInfo}`,
            validate: roleInfoInput => {
                if (roleInfoInput) {
                    return true;
                } else {
                    console.log(`Please enter employee's ${roleInfo}!`);
                    return false;
                }
            }
        }
    ])
    .then(answer => {
        console.log(data);
        console.log(answer);
        const value = Object.values(answer);
        data.roleInfo = value;
        createNewEmployee(data);
    });
};

// creates new employee and pushes them to appropriate position array
function createNewEmployee(data) {
    console.log(data);
    let newEmployee;
    if (data.role === 'Manager') {
        newEmployee = new Manager(data.name, data.id, data.email, data.roleInfo);
        managers.push(newEmployee);
    } else if (data.role === 'Engineer') {
        newEmployee = new Engineer(data.name, data.id, data.email, data.roleInfo);
        engineers.push(newEmployee);
    } else {
        newEmployee = new Intern(data.name, data.id, data.email, data.roleInfo.roleInfo);
        interns.push(newEmployee);
    };
    
    return inquirer.prompt([
        {
            type: 'list',
            name: 'add',
            message: 'Would you like to add another employee?',
            choices: ['Yes', 'No']
        }
    ])
    .then(userResponse => {
        if (userResponse.add === 'Yes') {
            getEmployees();
        } else {
            return userResponse;
        }
    })
};

// starts new employee if user wants to add another
// function addOrStop() {
    
// }

function getEmployees() {
    startEmployee()
    .then(userResponse => {
        return addRoleInfo(userResponse);
    });
};

getEmployees();

console.log(managers, engineers, interns);