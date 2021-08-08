const inquirer = require("inquirer");
var newEmployee = "manager";

function getQuestions(employee) {

    let basicQuestions = [{
        type: "input",
        message: `What is the ${employee}'s name?`,
        name: "name"
    },
    {
        type: "input",
        message: `What is the ${employee}'s employee id?`,
        name: "name"
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

    while (newEmployee === "manager") {
        if (res.add === "Intern") {
            newEmployee = "intern";
        } else if (res.add === "Engineer") {
            newEmployee = "engineer";
        } else {
            employee = "none";
        }
    }
    while ((newEmployee === "engineer")||(newEmployee === "intern")) {
        res = await inquirer
            .prompt(getQuestions(newEmployee))
        if (res.add === "Intern") {
            newEmployee = "intern";
        } else if (res.add === "Engineer") {
            newEmployee = "engineer";
        } else {
            newEmployee = "none";
        }
    }
};

