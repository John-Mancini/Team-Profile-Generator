//imports
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const employees = [];

const outputPath = path.resolve(__dirname, "output", "crew.html");

function managerInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of this manager?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the ID of this manager?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Email of this manager?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the Office Number of this manager?",
      },
    ])
    .then((answers) => {
      var { name, id, email, officeNumber } = answers;
      var manager = Manager(name, id, email, officeNumber);
      employees.push(manager);

      createCrew();
    });
}

function createCrew() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "command",
        message: "Would you like to add more Crew members?",
        choices: ["Add an Engineer", "Add an Intern", "Make new Crew"],
      },
    ])
    .then((answers) => {
      statement = answers.command;

      switch (statement) {
        case "Add an Engineer":
          engineerInfo();
          break;
        case "Add an Intern":
          internInfo();
          break;
        case "Make new Crew":
          buildCrew();
          break;
      }
    });
}

function engineerInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of this Engineer?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the ID of this Engineer?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Email of this Engineer?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the Github of this Engineer?",
      },
    ])
    .then((answers) => {
      var { name, id, email, github } = answers;
      var engineer = Engineer(name, id, email, github);
      employees.push(engineer);
    });
}

function internInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of this intern?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the ID of this intern?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Email of this intern?",
      },
      {
        type: "input",
        name: "school",
        message: "What is the School of this intern?",
      },
    ])
    .then((answers) => {
      var { name, id, email, school } = answers;
      var intern = Intern(name, id, email, school);
      employees.push(intern);
    });
}

function buildCrew() {
  fs.writeFileSync(outputPath, mainRender(crewMember), "utf-8");
}

managerInfo();
