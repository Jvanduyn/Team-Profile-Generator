const Employee = require('../src/Employee')

describe('Employee', () => {
    it('should create employee object that takes name, id, email', () => {
        const object = {
            name: "jake",
            id: 1,
            email: "jcvanduyn@yahoo.com"
        };

        const person = new Employee("jake", 1, "jcvanduyn@yahoo.com");
        expect(object).toEqual(person);
    });

    it('should return employee name', () => {
        const name = "jake";
        const person = new Employee("jake", 1, "jcvanduyn@yahoo.com")
        expect(name).toEqual(person.getName());
    });

    it('should return employee id', () => {
        const id = "1";
        const person = new Employee("jake", 1, "jcvanduyn@yahoo.com")
        expect(id).toEqual(person.getId());
    });

    it('should return employee name', () => {
        const email = "jcvanduyn@yahoo.com";
        const person = new Employee("jake", 1, "jcvanduyn@yahoo.com")
        expect(email).toEqual(person.getEmail());
    });

    it('should return employee role', () => {
        const role = "Employee";
        const person = new Employee("jake", 1, "jcvanduyn@yahoo.com")
        expect(role).toEqual(person.getRole());
    });

    it('should throw an error if no input received', () => {
        const cb = () => new Employee();
        const err = new Error("You must input a name, id, and email for the employee")
        expect(cb).toThrowError(err);
    });
});