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
        type: 'list',
        name: 'name',
        message: "Please enter the team employee's name.",
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
]


// gets employee info started
function startEmployee() {
    return inquirer.prompt(employeeQs);
    // return inquirer.prompt([
    //     {
    //         type: 'list',
    //         name: 'name',
    //         message: "Please enter the employee's name.",
    //         validate: nameInput => {
    //             if (nameInput) {
    //                 return true;
    //             } else {
    //                 console.log('Please enter a name.')
    //                 return false;
    //             }
    //         }
    //     },
    
    //     {
    //         type: 'input',
    //         name: 'id',
    //         message: "Please enter the employee's ID.",
    //         validate: idInput => {
    //             if (idInput) {
    //                 return true;
    //             } else {
    //                 console.log('Please enter an ID')
    //                 return false;
    //             }
    //         }
    //     },
    
    //     {
    //         type: 'input',
    //         name: 'email',
    //         message: "Please enter the employee's email address.",
    //         validate: emailInput => {
    //             if (emailInput) {
    //                 return true;
    //             } else {
    //                 console.log('Please enter an email address')
    //                 return false;
    //             }
    //         }
    //     },
    
    //     {
    //         type: 'list',
    //         name: 'role',
    //         message: "Please pick the employee's role.",
    //         choices: ['Manager', 'Engineer', 'Intern']
    //     }
    // ])
};

// gets last piece of information for each employee type
function addRoleInfo(data) {
    let roleInfo = '';
    if (data.role === 'Manager') {
        roleInfo = 'office number';
    } else if (data.role === 'Engineer') {
        roleInfo = 'GitHub username';
    } else {
        roleInfo = 'school'
    }
    inquirer.prompt([{
        type: 'input',
        name: 'roleInfo',
        message: `Please enter employee's ${roleInfo}`    
    }])
    console.log(data);
}

// creates new employee and pushes them to appropriate position array
function createNewEmployee(data) {
    let newEmployee;
    if (data.role === 'Manager') {
        newEmployee = new Manager(data.name, data.id, data.email, data.roleInfo);
        managers.push(newEmployee);
    } else if (data.role === 'Engineer') {
        newEmployee = new Engineer(data.name, data.id, data.email, data.roleInfo);
        engineers.push(newEmployee);
    } else {
        newEmployee = new Intern(data.name, data.id, data.email, data.roleInfo);
        interns.push(newEmployee);
    } 
};

// starts new employee if user wants to add another
function addOrStop() {
    inquirer.prompt([
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
            return;
        }
    })
}

function getEmployees() {
    startEmployee()
    .then(userResponse => {
        return addRoleInfo(userResponse);
    })
    .then(userResponse => {
        return createNewEmployee(userResponse);    
    });
    addOrStop();
};

getEmployees();

console.log(managers, engineers, interns);