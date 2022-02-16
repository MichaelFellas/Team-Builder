const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const managers = [];
const engineers = [];
const interns = [];

//Make function to run this on load
//Init -> Manager Quesitons -> Engineer/Intern Questions -> Generate HTML

const questionsManager = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the Managers name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the Managers Employee ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the Managers Email address?',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What's the Manager's Office Number?",
    },
    
];

var questionsEngineer = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the engineers name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the engineers Employee ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the engineers Email address?',
    },
    {
        type: 'input',
        name: 'github',
        message: "What's the engineers Github Username?",
    },
];

var questionsIntern = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the interns name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the interns Employee ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the interns Email address?',
    },
    {
        type: 'input',
        name: 'school',
        message: "Which school does the intern attend?",
    },
];

//Questions for switch function
var questionsTeamMemberRole = [
{
    type: 'list',
    name: 'teamMemberRole',
    message: 'Please select a role for the next Team Memeber',
    choices: ["Engineer", "Intern", "Finished!", new inquirer.Separator()]
},
];

//Asks which team member is next or if user is done
function newTeamMember (){
    inquirer.prompt(questionsTeamMemberRole)
    .then(switchFunction)
}

//Runs function depends on team member role response
function switchFunction (questionsTeamMemberRole) {
    switch(questionsTeamMemberRole.teamMemberRole){
        case "Engineer":
            inquirer.prompt(questionsEngineer)
            .then(createEngineer)
            .then(newTeamMember)
            break;

        case "Intern":
            inquirer.prompt(questionsIntern)
            .then(createIntern)
            .then(newTeamMember)
            break;
        case "Finished!":
            generateHTML();
            break;
}
}


//creates a Manager based on manager questions, then adds to imanagerss array
function createManager (questionsManager) {

    const manager = new Manager(questionsManager.name, questionsManager.id, questionsManager.email, questionsManager.officeNumber);
    managers.push(manager);

}

//creates an Engineer based on engineers questions, then adds to engineerss array
function createEngineer (questionsEngineer) {

    const engineer = new Engineer(questionsEngineer.name, questionsEngineer.id, questionsEngineer.email, questionsEngineer.github);
    engineers.push(engineer);

}

//creates an intern based on intern questions, then adds to interns array
function createIntern (questionsIntern) {

    const intern = new Intern(questionsIntern.name, questionsIntern.id, questionsIntern.email, questionsIntern.school);
    interns.push(intern);

}

//Runs initial prompt
//then runs create manager
//then runs create new team member
function init () {

    inquirer.prompt(questionsManager)
    .then(createManager)
    .then(newTeamMember)
       
}

//Generates the webpage
function generateHTML() {

    console.log(engineers[1].getRole());
}

//Runs init on load
init ();

//Insert Filters for inputs

//Write Tests based on readMe and Filters

//Create HTML Base

//Create CSS Base

//Create Card Writing Function
