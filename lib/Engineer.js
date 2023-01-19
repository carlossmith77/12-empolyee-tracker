const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getgithubusername() {
        return this.github
    }

    getRole() {
        return "engineer"
    }
}

// write tests to get the getgithubusername() and the getRole()

module.exports = Engineer
