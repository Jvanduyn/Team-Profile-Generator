const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {

        if (typeof school !== "string" || !school.trim().length) {
            throw new Error("You must input a school for the Intern")
        }

        super(name, id, email);

        this.school = school;
        this.role = "Intern"
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Intern;