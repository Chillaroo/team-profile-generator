class Employee {
    constructor(name, id, email){
        this.name=name;
        this.id=id;
        this.email=email;
    }

    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee";
    }
}


/* inquirer
    .prompt[{
        type: "input",
        message: "What is this team member's name?",
        name: "name"
    }]
    .then((response)=> {
        this.name=response.name;
    }) */