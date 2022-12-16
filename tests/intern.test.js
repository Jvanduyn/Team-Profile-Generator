const Intern = require('../src/Intern')

describe('Intern', () => {
    it('should create Intern object that takes their school', () => {
        const object = "UNCC"

        const person = new Intern("UNCC");
        expect(object).toEqual(person.getSchool());
    });

    it('should throw an error if no input received', () => {
        const cb = () => new Intern();
        const err = new Error("You must input a school for the Intern")
        expect(cb).toThrowError(err);
    });
});