const Intern = require("../lib/Intern");

describe("Intern", () => {
    //Can set school via constructor
    it("can set school with constructor", () => {
        expect(new Intern("Jack", "1", "tenaciousD@email.com", "school-of-rock").school).toBe("school-of-rock");
    });

    //getRole() should return "Intern"
    it("getRole() returns Intern", () => {
        expect(new Intern("Jack", "1", "tenaciousD@email.com", "school-of-rock").getRole()).toBe("Intern");
    });

    //Can get github username via getSchool
    it("getSchool() returns school", () => {
        expect(new Intern("Jack", "1", "tenaciousD@email.com", "school-of-rock").getSchool()).toBe("school-of-rock");
    });
});