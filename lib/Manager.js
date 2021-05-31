//require
const Employee = require("./Employee");

// requires office number

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    if (!officeNumber) {
      throw new Error("Expected parameter 'officeNumber' to be non-empty");
    }
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
