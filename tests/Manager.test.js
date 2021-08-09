const Manager = require("../lib/Manager");

describe("Manager", () => {
    //Can set office number via constructor
    it("Set github username with constructor", () => {
        expect(new Manager("Major Tom", "1", "groundcontrol@email.com", 10987654321).officeNumber).toBe(10987654321);
    });

    //getRole() should return "Manager"
    it("getRole() returns Manager", () => {
        expect(new Manager("Major Tom", "1", "groundcontrol@email.com", 10987654321).getRole()).toBe("Manager");
    });
});