const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

        if (typeof officeNumber !== "number" || isNaN(officeNumber) || officeNumber < 0) {
            throw new Error("You must input an office number for the Manager")
        }

        super(name, id, email);

        this.officeNumber = officeNumber;
        this.role = "Manager"
    }
    getRole() {
        return this.role;
    }
}

module.exports = Manager;