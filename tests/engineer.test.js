const Engineer = require('../src/Engineer')

describe('Engineer', () => {
    it('should create Engineer object that takes github', () => {
        const object = "jvanduyn"

        const person = new Engineer("jvanduyn");
        expect(object).toEqual(person.getGithub());
    });

    it('should return Engineer role', () => {
        const role = "Engineer";
        const person = new Engineer("jake", 1, "Engineer")
        expect(role).toEqual(person.getRole());
    });

    it('should throw an error if no input received', () => {
        const cb = () => new Engineer();
        const err = new Error("You must input a github for the Engineer")
        expect(cb).toThrowError(err);
    });
});