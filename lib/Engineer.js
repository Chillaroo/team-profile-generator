const Engineer = require("./Employee");

class Engineer extends Engineer {
    constructor(github){
        this.github = github;
    }
    
    getGithub(){
        return this.github;
    }

    getRole(){
        return "Engineer";
    }
}