const Engineer = require("./Employee");

class Engineer extends Engineer {
    constructor(github){
        this.github = github;
    }
    getRole(){
        return "Engineer";
    }
}