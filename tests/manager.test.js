const Manager = require('../src/Manager')

describe('Manager', () => {
    it('should create Manager object that takes office number', () => {
        const object = 2

        const person = new Manager(2);
        expect(object).toEqual(person);
    });

    it('should return Engineer role', () => {
        const role = "Engineer";
        const person = new Engineer("jake", 1, "Engineer")
        expect(role).toEqual(person.getRole());
    });

    it('should throw an error if no input received', () => {
        const cb = () => new Manager();
        const err = new Error("You must input an office number for the Manager")
        expect(cb).toThrowError(err);
    });
});