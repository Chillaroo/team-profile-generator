const Employee = require("../lib/Employee");
describe("Employee", ()=>{
    //Can set name via constructor
    it("can set github username with constructor", () => {
        expect(new Employee("Jeanette", 8, "poolshark@email.com").name).toBe("Jeanette");
    });
    //Can set id via constructor
    it("can set id number with constructor", () => {
        expect(new Employee("Jeanette", 8, "poolshark@email.com").id).toBe(8);
    });
    //Can set email via constructor
    it("getGithub() returns github username", () => {
        expect(new Employee("Jeanette", 8, "poolshark@email.com").email).toBe("poolshark@email.com");
    });
    //getName() returns name
    it("getName() returns name", () => {
        expect(new Employee("Jeanette", 8, "poolshark@email.com").getName()).toBe("Jeanette");
    });
    //getId() returns id
    it("getId() returns id", () => {
        expect(new Employee("Jeanette", 8, "poolshark@email.com").getId()).toBe(8);
    });
    //getEmail() returns email
    it("getEmail() returns email", () => {
        expect(new Employee("Jeanette", 8, "poolshark@email.com").getEmail()).toBe("poolshark@email.com");
    });
    //getRole() returns Employee
    it("getRole() returns Employee", () => {
        expect(new Employee("Jeanette", 8, "poolshark@email.com").getRole()).toBe("Employee");
    });
});