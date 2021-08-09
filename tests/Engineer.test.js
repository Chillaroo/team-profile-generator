const Engineer = require("../lib/Engineer");

describe("Engineer", ()=>{
    //Can set github via constructor
    it("can set github username with constructor", () => {
        expect(new Engineer("Alice", "1", "wonderland@email.com", "white-rabbit").github).toBe("white-rabbit");
    });

    //getRole() should return "Engineer"
    it("getRole() returns Engineer", () => {
        expect(new Engineer("Alice", "1", "wonderland@email.com", "white-rabbit").getRole()).toBe("Engineer");
    });

    //Can get github username via getGithub
    it("getGithub() returns github username", () => {
        expect(new Engineer("Alice", "1", "wonderland@email.com", "white-rabbit").getGithub()).toBe("white-rabbit");
    });
});
