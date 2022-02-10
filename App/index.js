const inquirer = require('inquirer');
const fs = require('fs');


//Make function to run this on load
//Init -> Manager Quesitons -> Engineer/Intern Questions -> Generate HTML


const questionsManager = [
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the managers name?',
    },
    {
        type: 'input',
        name: 'managerID',
        message: 'What is the managers Employee ID?'
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the managers Email address?',
    },
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: "What's the manager's Office Number?",
    },
];

var questionsEngineer = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is the engineers name?',
    },
    {
        type: 'input',
        name: 'engineerID',
        message: 'What is the engineers Employee ID?'
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is the engineers Email address?',
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: "What's the engineers Github Username?",
    },
];

var questionsIntern = [
    {
        type: 'input',
        name: 'internName',
        message: 'What is the interns name?',
    },
    {
        type: 'input',
        name: 'internID',
        message: 'What is the interns Employee ID?'
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'What is the interns Email address?',
    },
    {
        type: 'input',
        name: 'internSchool',
        message: "Which school does the intern attend?",
    },
];

var questionsTeamMemberRole = [
{
    type: 'list',
    name: 'teamMemberRole',
    message: 'Please select a role for the next Team Memeber',
    choices: ["Engineer", "Intern", "Finished!", new inquirer.Separator()]
},
];

//Make switch to run questions based on input

//Create Object like this
function Employee(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
    this.makeNoise = () => {
      if (this.raining === true) {
        console.log(this.noise);
      }
    };
}

const employee = new Employee(name, id, email, role);

function init () {
    
}