//require
const Employee = require("./Employee");

//cunstructor function Super(name id email)
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    if (!github) {
      throw new Error("Expected parameter 'username' to be non-empty");
    }
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
