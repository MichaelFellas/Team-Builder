const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const GenerateHTML = require('./utils/generateHTML');
const managers = [];
const engineers = [];
const interns = [];



//TO DO

//VIDEO
//SUBMIT


const questionsManager = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the Managers name?',
        validate: async (input) => {
            if ( (Number(input)) || input === '') {
               return 'You need to provide a name';
            }
      
            return true;
         }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the Managers Employee ID?',
        validate: async (input) => {
            if ( !(Number(input)) || input === '') {
               return 'That is not a number, the ID should be a number';
            }
      
            return true;
         }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the Managers Email address?',
        validate: async (input) => {
            if ( (Number(input)) || input === '' || !(input.includes("@"))) {
               return 'You need to provide an email adress';
            }
      
            return true;
         }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What's the Manager's Office Number?",
        validate: async (input) => {
            if ( !(Number(input)) || input === '') {
               return 'That is not a number';
            }
      
            return true;
         }
    },
    
];

var questionsEngineer = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the engineers name?',
        validate: async (input) => {
            if ( (Number(input)) || input === '') {
               return 'You need to provide a name';
            }
      
            return true;
         }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the engineers Employee ID?',
        validate: async (input) => {
            if ( !(Number(input)) || input === '') {
               return 'That is not a number';
            }
      
            return true;
         }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the engineers Email address?',
        validate: async (input) => {
            if ( (Number(input)) || input === '' || !(input.includes("@"))) {
               return 'You need to provide an email adress';
            }
      
            return true;
         }
    },
    {
        type: 'input',
        name: 'github',
        message: "What's the engineers Github Username?",
        validate: async (input) => {
            if ( (Number(input)) || input === '') {
               return 'You need to provide a github username';
            }
      
            return true;
         }
    },
];

var questionsIntern = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the interns name?',
        validate: async (input) => {
            if ( (Number(input)) || input === '') {
               return 'You need to provide a name';
            }
      
            return true;
         }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the interns Employee ID?',
        validate: async (input) => {
            if ( !(Number(input)) || input === '') {
               return 'That is not a number';
            }
      
            return true;
         }

    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the interns Email address?',
        validate: async (input) => {
            if ( (Number(input)) || input === '' || !(input.includes("@"))) {
               return 'You need to provide an email adress';
            }
      
            return true;
         }
    },
    {
        type: 'input',
        name: 'school',
        message: "Which school does the intern attend?",
        validate: async (input) => {
            if ( (Number(input)) || input === '') {
               return 'You need to provide a school name';
            }
      
            return true;
         }
        
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
            generateHTMLfunc ();
            break;
}
}


//creates a Manager based on manager questions, then adds to imanagerss array
function createManager (questionsManager) {
    const manager = new Manager(questionsManager.name, questionsManager.id, questionsManager.email, questionsManager.officeNumber)
    createManagerCard (manager);

}

//creates an Engineer based on engineers questions, then adds to engineerss array
function createEngineer (questionsEngineer) {
    const engineer = new Engineer(questionsEngineer.name, questionsEngineer.id, questionsEngineer.email, questionsEngineer.github)
    createEngineerCard (engineer);

}

//creates an intern based on intern questions, then adds to interns array
function createIntern (questionsIntern) {
    const intern = new Intern(questionsIntern.name, questionsIntern.id, questionsIntern.email, questionsIntern.school)
    createInternCard (intern);
}

//Runs initial prompt
//then runs create manager
//then runs create new team member
function init () {
    inquirer.prompt(questionsManager)
    .then(createManager)
    .then(newTeamMember)       
}

//Runs init on load
init ();

function generateHTMLfunc () {

    fs.writeFile("./dist/index.html", `${GenerateHTML.generateHTML(managers, engineers, interns)}`, (error) =>
    error ? console.error(error) : console.log("Your webpage is ready for viewing"));
    fs.writeFile("./dist/style.css", `${GenerateHTML.generateCSS()}`, (error) =>
    error ? console.error(error) : console.log("Your webpage has been styled"));
}

function createManagerCard (manager) {
    let cardElement =  `
    <div class = "card-outer-edge d-flex">
        <div class = "card-edge d-flex flex-column">
           <br>
         <div class = "card-role">                  
            <h2>${manager.getRole()}</h2>
         </div>
         <br>
         <br>              
         <div class = "card-info">
            <div class = "card-name d-flex">
                <h4>Name: ${manager.getName()}</h4>
            </div>
            <div class = "card-id d-flex">
               <h4>ID: ${manager.getId()}</h4>                     
           </div>
           <div class = "card-email d-flex">
           <h4>Email: <a href="mailto: ${manager.getEmail()}" class="blueLink">${manager.getEmail()}</a></h4>                      
           </div>
           <div class = "card-officeNumber d-flex">
               <h4>Office Number: ${manager.getOfficeNumber()}</h4>                     
           </div>                 
       </div>
    </div>
   </div>`
   managers.push(cardElement);
}

function createEngineerCard (engineer) {
    let cardElement =  `
    <div class = "card-outer-edge d-flex">
        <div class = "card-edge d-flex flex-column">
           <br>
         <div class = "card-role">                  
            <h2>${engineer.getRole()}</h2>
         </div>
         <br>
         <br>              
         <div class = "card-info">
            <div class = "card-name d-flex">
                <h4>Name: ${engineer.getName()}</h4>
            </div>
            <div class = "card-id d-flex">
               <h4>ID: ${engineer.getId()}</h4>                     
           </div>
           <div class = "card-email d-flex">
           <h4>Email: <a href="mailto: ${engineer.getEmail()}" class="blueLink">${engineer.getEmail()}</a></h4>                     
           </div>
           <div class = "card-officeNumber d-flex">
               <h4>Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank" class="blueLink" aria-current="true">github.com/${engineer.getGithub()}</a></h4>               
           </div>                 
       </div>
    </div>
   </div>`
   engineers.push(cardElement);
}

function createInternCard (intern) {
    let cardElement =  `
    <div class = "card-outer-edge d-flex">
        <div class = "card-edge d-flex flex-column">
           <br>
         <div class = "card-role">                  
            <h2>${intern.getRole()}</h2>
         </div>
         <br>
         <br>              
         <div class = "card-info">
            <div class = "card-name d-flex">
                <h4>Name: ${intern.getName()}</h4>
            </div>
            <div class = "card-id d-flex">
               <h4>ID: ${intern.getId()}</h4>                     
           </div>
           <div class = "card-email d-flex">
           <h4>Email: <a href="mailto: ${intern.getEmail()}" class="blueLink">${intern.getEmail()}</a></h4>                     
           </div>
           <div class = "card-officeNumber d-flex">
               <h4>School: ${intern.getSchool()}</h4>                     
           </div>                 
       </div>
    </div>
   </div>`
   interns.push(cardElement);
}