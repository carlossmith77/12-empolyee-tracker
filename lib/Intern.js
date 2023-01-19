const Employee = require("./employee")
const intern = require ("./employee")
// classes green
// built in keywords will be dark blue
//lighter blue is a variable or parameter
//yellow is functions

class Intern extends Employee{
    constructor(name, id, email,school){
        super(name, id, email)
        this.school=school
    }

    getschool(){
        return this.school
    }

    getrole(){
        return"intern"
    }
}
// change this Intern class to look like your Manager
module.exports=Intern
