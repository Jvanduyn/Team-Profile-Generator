const Manager = require('../lib/Manager')
const Employee = require('../lib/Employee')

describe('Manager', () => {
    it('should create Manager object that takes office number', () => {
        const object = 2

        const person = new Manager("jake", 1, "jcvanduyn@yahoo.com", 2);
        expect(object).toEqual(person.officeNumber);
    });

    it('should return Manager role', () => {
        const role = "Manager";
        const person = new Manager("jake", 1, "jcvanduyn@yahoo.com", 2)
        expect(role).toEqual(person.getRole());
    });

    it('should throw an error if no input received', () => {
        const cb = () => new Manager("jake", 1, "jcvanduyn@yahoo.com")
        const err = new Error("You must input an office number for the Manager")
        expect(cb).toThrowError(err);
    });
});