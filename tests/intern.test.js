const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('should create Intern object that takes their school', () => {
        const object = "UNCC"

        const person = new Intern("jake", 1, "jcvanduyn@yahoo.com", "UNCC");
        expect(object).toEqual(person.getSchool());
    });

    it('should return Intern role', () => {
        const role = "Intern";
        const person = new Intern("jake", 1, "jcvanduyn@yahoo.com", "UNCC")
        expect(role).toEqual(person.getRole());
    });

    it('should throw an error if no input received', () => {
        const cb = () => new Intern("jake", 1, "jcvanduyn@yahoo.com");
        const err = new Error("You must input a school for the Intern")
        expect(cb).toThrowError(err);
    });
});
