const Intern = require("../lib/Intern");

describe("Intern Class", () => {
  describe("initialization", () => {
    test("pass in an object with a name, id, email, and school", () => {
      const intern = new Intern("John", 7, "email@gmail.com", "school");
      expect(intern.name).toEqual("John");
      expect(intern.id).toEqual(7);
      expect(intern.email).toEqual("email@gmail.com");
      expect(intern.school).toEqual("school");
    });
    test("Error should appear is no valid arguements", () => {
      const err = () => new Intern();
      expect(err).toThrowError("parameter");
    });
    test("Error should appear if there is no valid id", () => {
      const err = () => new Intern("John");
      expect(err).toThrowError("parameter");
    });
    test("Error should appear is no valid email", () => {
      const err = () => new Intern("John", 7);
      expect(err).toThrowError("parameter");
    });
    test("Error should appear if name is not a string", () => {
      const err = () => new Intern(1111, 7, "email@gmail.com", "school");
      expect(err).toThrowError("parameter");
    });
    test("Error should appear if school is not provided", () => {
      const err = () => new Intern(1111, 7, "email@gmail.com");
      expect(err).toThrowError("parameter");
    });
    test("Error should appear if email does not have an @", () => {
      const err = () => new Intern("John", 7, "emailgmail.com", "school");
      expect(err).toThrowError("parameter");
    });
    test("Error should appear if email does not have a .", () => {
      const err = () => new Intern("John", 7, "email@gmailcom", "school");
      expect(err).toThrowError("parameter");
    });
    test("Error should appear if email is not a string", () => {
      const err = () => new Intern("John", 7, 1234, "school");
      expect(err).toThrowError("parameter");
    });
    test("Error should appear if id is not a number", () => {
      const err = () =>
        new Intern("John", "three", "email@gmail.com", "school");
      expect(err).toThrowError("parameter");
    });
    test("Error should appear if id is less than 0", () => {
      const err = () => new Intern("John", -3, "email@gmail.com", "school");
      expect(err).toThrowError("parameter");
    });
  });
  describe("getId", () => {
    test("return the object id as a number", () => {
      const intern = new Intern("John", 7, "email@gmail.com", "school");
      expect(intern.getId()), toEqual(7);
    });
  });
  describe("getName", () => {
    test("return the object name as a string", () => {
      const intern = new Intern("John", 7, "email@gmail.com", "school");
      expect(intern.getName()), toEqual("John");
    });
  });
  describe("getEmail", () => {
    test("return the object email as a string", () => {
      const intern = new Intern("John", 7, "email@gmail.com", "school");
      expect(intern.getEmail()), toEqual("email@gmail.com");
    });
  });
  describe("getRole", () => {
    test("return Intern as a string", () => {
      const intern = new Intern("John", 7, "email@gmail.com", "school");
      expect(intern.getRole()), toEqual("Intern");
    });
  });
  describe("getSchool", () => {
    test("return Intern's school as a string", () => {
      const intern = new Intern("John", 7, "email@gmail.com", "school");
      expect(intern.getSchool()), toEqual("school");
    });
  });
});
