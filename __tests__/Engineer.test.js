const Engineer = require("../lib/Engineer");
//describe
describe("Engineer Class", () => {
  describe("initialization", () => {
    test("pass in an object with a name, id, email, and github username", () => {
      const engineer = new Engineer(
        "John",
        7,
        "email@gmail.com",
        "John-Mancini"
      );
      expect(engineer.name).toEqual("John");
      expect(engineer.id).toEqual(7);
      expect(engineer.email).toEqual("email@gmail.com");
      expect(engineer.github).toEqual("John-Mancini");
    });
    test("Error should appear if no valid arguements", () => {
      const err = () => new Engineer();
      expect(err).toThrowError("parameter");
    });
    test("Error should appear if there is no valid id", () => {
      const err = () => new Engineer("John");
      expect(err).toThrowError("parameter");
    });
    test("Error should appear if no valid email", () => {
      const err = () => new Engineer("John", 7);
      expect(err).toThrowError("parameter");
    });
    test("Error should appear if name is not a string", () => {
      const err = () =>
        new Engineer(1111, 7, "email@gmail.com", "John-Mancini");
      expect(err).toThrowError("parameter");
    });
    test("Error should appear if not github username is provided", () => {
      const err = () => new Engineer(1111, 7, "email@gmail.com");
      expect(err).toThrowError("parameter");
    });
    test("Error should appear if email does not have an @", () => {
      const err = () =>
        new Engineer("John", 7, "emailgmail.com", "John-Mancini");
      expect(err).toThrowError("parameter");
    });
    test("Error should appear if email does not have a .", () => {
      const err = () =>
        new Engineer("John", 7, "email@gmailcom", "John-Mancini");
      expect(err).toThrowError("parameter");
    });
    test("Error should appear if email is not a string", () => {
      const err = () => new Engineer("John", 7, 1234, "John-Mancini");
      expect(err).toThrowError("parameter");
    });
    test("Error should appear if id is not a number", () => {
      const err = () =>
        new Engineer("John", "three", "email@gmail.com", "John-Mancini");
      expect(err).toThrowError("parameter");
    });
    test("Error should appear if id is less than 0", () => {
      const err = () =>
        new Engineer("John", -3, "email@gmail.com", "John-Mancini");
      expect(err).toThrowError("parameter");
    });
  });
  describe("getId", () => {
    test("return the object id as a number", () => {
      const engineer = new Engineer(
        "John",
        7,
        "email@gmail.com",
        "John-Mancini"
      );
      expect(engineer.getId()).toEqual(7);
    });
  });
  describe("getName", () => {
    test("return the object name as a string", () => {
      const engineer = new Engineer(
        "John",
        7,
        "email@gmail.com",
        "John-Mancini"
      );
      expect(engineer.getName()).toEqual("John");
    });
  });
  describe("getEmail", () => {
    test("return the object email as a string", () => {
      const engineer = new Engineer(
        "John",
        7,
        "email@gmail.com",
        "John-Mancini"
      );
      expect(engineer.getEmail()).toEqual("email@gmail.com");
    });
  });
  describe("getRole", () => {
    test("return Engineer as a string", () => {
      const engineer = new Engineer(
        "John",
        7,
        "email@gmail.com",
        "John-Mancini"
      );
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
  describe("getGithub", () => {
    test("return Engineer's github as a string", () => {
      const engineer = new Engineer(
        "John",
        7,
        "email@gmail.com",
        "John-Mancini"
      );
      expect(engineer.getGithub()).toEqual("John-Mancini");
    });
  });
});
