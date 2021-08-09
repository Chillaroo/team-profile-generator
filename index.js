const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
var newEmployee = "manager";
var newTeam = [];
var divs = [];

function getQuestions(employee) {

    let basicQuestions = [{
        type: "input",
        message: `What is the ${employee}'s name?`,
        name: "name"
    },
    {
        type: "input",
        message: `What is the ${employee}'s employee id?`,
        name: "id"
    },
    {
        type: "input",
        message: `What is the ${employee}'s email address?`,
        name: "email"
    }];
    let managerQuestions = [
        {
            type: "input",
            message: "What is the manager's office number?",
            name: "office"
        },
        {
            type: "list",
            name: "add",
            message: "Which type of employee would you like to add next?",
            choices: ["Engineer", "Intern", "I'm done"]
        }];
    let engineerQuestions = [{
        type: "input",
        message: "What is the engineer's github username?",
        name: "github"
    },
    {
        type: "list",
        name: "add",
        message: "Which type of employee would you like to add next?",
        choices: ["Engineer", "Intern", "I'm done"]
    }];
    let internQuestions = [{
        type: "input",
        message: "What is the intern's school?",
        name: "school"
    },
    {
        type: "list",
        name: "add",
        message: "Which type of employee would you like to add next?",
        choices: ["Engineer", "Intern", "I'm done"]
    }];

    if (employee === "manager") {
        return basicQuestions.concat(managerQuestions)
    } else if (employee === "engineer") {
        return basicQuestions.concat(engineerQuestions)
    } else if (employee === "intern") {
        return basicQuestions.concat(internQuestions)
    }
}

inquirer
    .prompt(getQuestions(newEmployee))
    .then(setUserInput);

async function setUserInput(res) {

    newTeam.push(new Manager(res.name, res.id, res.email, res.office));

    while (newEmployee === "manager") {
        if (res.add === "Intern") {
            newEmployee = "intern";
        } else if (res.add === "Engineer") {
            newEmployee = "engineer";
        } else {
            newEmployee = "none";
        }
    }
    while ((newEmployee === "engineer") || (newEmployee === "intern")) {
        res = await inquirer
            .prompt(getQuestions(newEmployee))
        if (newEmployee === "intern") {
            newTeam.push(new Intern(res.name, res.id, res.email, res.school));
        } else if (newEmployee === "engineer") {
            newTeam.push(new Engineer(res.name, res.id, res.email, res.github));
        }
        if (res.add === "Intern") {
            newEmployee = "intern";
        } else if (res.add === "Engineer") {
            newEmployee = "engineer";
        } else {
            newEmployee = "none";
        }
    }
    let divArray = generateDiv(newTeam);
    console.log(divArray);
};

function generateDiv(newTeam) {

    let employeeName = " ";
    let employeeId = " ";
    let employeeEmail = " ";
    let employeePosition = " ";
    let specialCategoryKey = " ";
    let specialCategoryValue = " ";

    for (var i = 0; i < newTeam.length; i++) {

        employeeName = newTeam[i].name;
        employeeId = newTeam[i].id;
        employeeEmail = newTeam[i].email;

        if (newTeam[i].hasOwnProperty('officeNumber')) {
            employeePosition = "Manager"
            specialCategoryKey = "Office Number:";
            specialCategoryValue = newTeam[i].officeNumber;
        }
        if (newTeam[i].hasOwnProperty('github')) {
            employeePosition = "Engineer"
            specialCategoryKey = "Github";
            specialCategoryValue = `https://github.com/${newTeam[i].github}`;
        }
        if (newTeam[i].hasOwnProperty('school')) {
            employeePosition = "Intern"
            specialCategoryKey = "School";
            specialCategoryValue = newTeam[i].school;
        }
        let divTemplate = `
        <div class="card" style="width: 18rem;">
            <div class="card-body bg-primary text-white">
                <h5 class="card-title">${employeeName}</h5>
                <h5 class="card-title">${employeePosition}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${employeeId}</li>
                <li class="list-group-item">Employee Email: ${employeeEmail}</li>
                <li class="list-group-item">${specialCategoryKey}: ${specialCategoryValue}</li>
            </ul>
        </div>
        `
        divs.push(divTemplate);
    }
    return divs.join(" ");
}

