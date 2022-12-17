const Engineer = require('../lib/Engineer')
const Employee = require('../lib/Employee');

describe('Engineer', () => {
    it('should create Engineer object that takes github', () => {
        const object = "jvanduyn"

        const person = new Engineer("jake", 1, "jcvanduyn@yahoo.com", "jvanduyn");
        expect(object).toEqual(person.getGitHub());
    });

    it('should return Engineer role', () => {
        const role = "Engineer";
        const person = new Engineer("jake", 1, "jcvanduyn@yahoo.com", "jvanduyn")
        expect(role).toEqual(person.getRole());
    });

    it('should throw an error if no input received', () => {
        const cb = () => new Engineer("jake", 1, "jcvanduyn@yahoo.com");
        const err = new Error("You must input a github for the Engineer")
        expect(cb).toThrowError(err);
    });
});