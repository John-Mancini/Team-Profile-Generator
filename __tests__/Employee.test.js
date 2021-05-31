//import
const Employee = require("../lib/Employee");

//describe
describe("Employee Class", () => {
  describe("initialization", () => {
    test("pass in an object with a name, id, and email", () => {
      const employee = new Employee("John", 7, "email@gmail.com");
      expect(employee.name).toEqual("John");
      expect(employee.id).toEqual(7);
      expect(employee.email).toEqual("email@gmail.com");
    });
    test("Error should appear ig no valid arguements", () => {
      const err = () => new Employee();
      expect(err).toThrowError("parameter");
    });
    test("Error should appear if there is no valid id", () => {
      const err = () => new Employee("John");
      expect(err).toThrowError("parameter");
    });
    test("Error should appear if no valid email", () => {
      const err = () => new Employee("John", 7);
      expect(err).toThrowError("parameter");
    });
    test("Error should appear if name is not a string", () => {
      const err = () => new Employee(1111, 7, "email@gmail.com");
      expect(err).toThrowError("parameter");
    });
    test("Error should appear if email does not have an @", () => {
      const err = () => new Employee("John", 7, "emailgmail.com");
      expect(err).toThrowError("parameter");
    });
    test("Error should appear if email does not have a .", () => {
      const err = () => new Employee("John", 7, "email@gmailcom");
      expect(err).toThrowError("parameter");
    });
    test("Error should appear if email is not a string", () => {
      const err = () => new Employee("John", 7, 1234);
      expect(err).toThrowError("parameter");
    });
    test("Error should appear if id is not a number", () => {
      const err = () => new Employee("John", "three", "email@gmail.com");
      expect(err).toThrowError("parameter");
    });
    test("Error should appear if id is less than 0", () => {
      const err = () => new Employee("John", -3, "email@gmail.com");
      expect(err).toThrowError("parameter");
    });
  });
  describe("getId", () => {
    test("return the object id as a number", () => {
      const employee = new Employee("John", 7, "email@gmail.com");
      expect(employee.getId()).toEqual(7);
    });
  });
  describe("getName", () => {
    test("return the object name as a string", () => {
      const employee = new Employee("John", 7, "email@gmail.com");
      expect(employee.getName()).toEqual("John");
    });
  });
  describe("getEmail", () => {
    test("return the object email as a string", () => {
      const employee = new Employee("John", 7, "email@gmail.com");
      expect(employee.getEmail()).toEqual("email@gmail.com");
    });
  });
  describe("getRole", () => {
    test("return Employee as a string", () => {
      const employee = new Employee("John", 7, "email@gmail.com");
      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
