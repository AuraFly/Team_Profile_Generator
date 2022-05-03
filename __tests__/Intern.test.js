const Intern = require('../lib/Intern');

describe("Intern", () => {
    //testing Intern class functionality through series of tests/descriptions
    //should be noted that Intern extends the Employee class for name/id/email.
    describe('Initialization', () => {
    it("Should create object containing NAME/EMAIL/ID/GITHUB 'STRING/NUMBER/STRING/STRING' when called with 'new' keyword", () => {
        //Setting class definitions to use for test
        const intern = new Intern ('John', 123, 'JDoe@Gmail.com', 'University of Denver');

        //Stating that the test should expect the const set to 'Intern' class should equal
        //the definitions set above when the property is called.
        //name called--
        expect(intern.name).toEqual("John");

        //id called--
        expect(intern.id).toEqual(123);

        //email called--
        expect(intern.email).toEqual("JDoe@Gmail.com");

        //school called--
        expect(intern.school).toEqual('University of Denver');
    });

    //testing Intern class methods
    it("Should return defined properties when methods are used", () => {
        //Setting class definitions to use for test
        const intern = new Intern ('John', 123, 'JDoe@Gmail.com', 'University of Denver');

        //Stating that the output of .getName, .getId, .getEmail, .getSchool should match the definitions set above
        //with the exception of .getRole which should match the name of the constructor/class.
        //getName method
        expect(intern.getName()).toEqual(intern.name);

        //getID method
        expect(intern.getId()).toEqual(intern.id);

        //getEmail method
        expect(intern.getEmail()).toEqual(intern.email);

        //getSchool
        expect(intern.getSchool()).toEqual(intern.school);

        //getRole
        expect(intern.getRole()).toEqual('Intern');
        });
    });
});