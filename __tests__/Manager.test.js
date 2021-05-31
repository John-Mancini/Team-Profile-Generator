const Manager = require("../lib/Manager");

describe("Manager Class", () => {
  describe("initialization", () => {
    test("pass in an object with a name, id, email, and office number", () => {
      const manager = new Manager("John", 7, "email@gmail.com", 1);
      expect(manager.name).toEqual("John");
      expect(manager.id).toEqual(7);
      expect(manager.email).toEqual("email@gmail.com");
      expect(manager.officeNumber).toEqual(1);
    });
    test("Error should appear is no valid arguements", () => {
      const err = () => new Manager();
      expect(err).toThrowError("parameter");
    });
    test("Error should appear if there is no valid id", () => {
      const err = () => new Manager("John");
      expect(err).toThrowError("parameter");
    });
    test("Error should appear is no valid email", () => {
      const err = () => new Manager("John", 7);
      expect(err).toThrowError("parameter");
    });
    test("Error should appear if name is not a string", () => {
      const err = () => new Manager(1111, 7, "email@gmail.com", 1);
      expect(err).toThrowError("parameter");
    });
    test("Error should appear if office number is not provided", () => {
      const err = () => new Manager(1111, 7, "email@gmail.com");
      expect(err).toThrowError("parameter");
    });
    test("Error should appear if email does not have an @", () => {
      const err = () => new Manager("John", 7, "emailgmail.com", 1);
      expect(err).toThrowError("parameter");
    });
    test("Error should appear if email does not have a .", () => {
      const err = () => new Manager("John", 7, "email@gmailcom", 1);
      expect(err).toThrowError("parameter");
    });
    test("Error should appear if email is not a string", () => {
      const err = () => new Manager("John", 7, 1234, 1);
      expect(err).toThrowError("parameter");
    });
    test("Error should appear if id is not a number", () => {
      const err = () => new Manager("John", "three", "email@gmail.com", 1);
      expect(err).toThrowError("parameter");
    });
    test("Error should appear if id is less than 0", () => {
      const err = () => new Manager("John", -3, "email@gmail.com", 1);
      expect(err).toThrowError("parameter");
    });
  });
  describe("getId", () => {
    test("return the object id as a number", () => {
      const manager = new Manager("John", 7, "email@gmail.com", 1);
      expect(manager.getId()), toEqual(7);
    });
  });
  describe("getName", () => {
    test("return the object name as a string", () => {
      const manager = new Manager("John", 7, "email@gmail.com", 1);
      expect(manager.getName()), toEqual("John");
    });
  });
  describe("getEmail", () => {
    test("return the object email as a string", () => {
      const manager = new Manager("John", 7, "email@gmail.com", 1);
      expect(manager.getEmail()), toEqual("email@gmail.com");
    });
  });
  describe("getRole", () => {
    test("return Manager as a string", () => {
      const manager = new Manager("John", 7, "email@gmail.com", 1);
      expect(manager.getRole()), toEqual("Manager");
    });
  });
  describe("getOfficeNumber", () => {
    test("return Manager's office number as a number", () => {
      const manager = new Manager("John", 7, "email@gmail.com", 1);
      expect(manager.getOfficeNumber()), toEqual(1);
    });
  });
});
