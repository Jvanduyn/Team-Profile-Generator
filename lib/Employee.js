
class Employee {
    constructor(name, id, email) {
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("You must input a name, id, and email for the employee");
        }
        if (typeof id !== "number" || isNaN(id) || id < 0) {
            throw new Error("The employee has to have name, id, and email as parameters");
        }
        if (typeof email !== "string" || !email.trim().length) {
            throw new Error("You must input a name, id, and email for the employee");
        }
        this.name = name;
        this.id = id;
        this.email = email;

    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;