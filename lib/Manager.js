const Employee = require('./Employee');

class Manager extends Employee {
    // Your constructors are the parameters that you will pass
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber
    }
    getrole(){
        return"manager"
    }
    // make a getRole() that returns 'Manager'

};

module.exports = Manager;