const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        if (typeof github !== "string" || !github.trim().length) {
            throw new Error("You must input a github for the Engineer")
        }
        super(name, id, email)
        this.github = github;
        this.role = "Engineer"
    }
    getGitHub() {
        return this.github
    }
    getRole() {
        return this.role;
    }
}

module.exports = Engineer;