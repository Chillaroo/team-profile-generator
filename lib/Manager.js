const Manager = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber){
        this.officeNumber = officeNumber;
    }
    getRole(){
        return "Manager";
    }
}