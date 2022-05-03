const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    //testing Engineer class functionality through series of tests/descriptions
    //should be noted that Engineer extends the Employee class for name/id/email.
    describe('Initialization', () => {
    it("Should create object containing NAME/EMAIL/ID/GITHUB 'STRING/NUMBER/STRING/STRING' when called with 'new' keyword", () => {
        //Setting class definitions to use for test
        const engineer = new Engineer ('John', 123, 'JDoe@Gmail.com', 'JohnDeer');

        //Stating that the test should expect the const set to 'Engineer' class should equal
        //the definitions set above when the property is called.
        //name called--
        expect(engineer.name).toEqual("John");

        //id called--
        expect(engineer.id).toEqual(123);

        //email called--
        expect(engineer.email).toEqual("JDoe@Gmail.com");

        //github called--
        expect(engineer.github).toEqual('JohnDeer');
    });

    //testing Engineer class methods
    it("Should return defined properties when methods are used", () => {
        //Setting class definitions to use for test
        const engineer = new Engineer ('John', 123, 'JDoe@Gmail.com', 'JohnDeer');

        //Stating that the output of .getName, .getId, .getEmail, .getGithub should match the definitions set above
        //with the exception of .getRole which should match the name of the constructor/class.
        //getName method
        expect(engineer.getName()).toEqual(engineer.name);

        //getID method
        expect(engineer.getId()).toEqual(engineer.id);

        //getEmail method
        expect(engineer.getEmail()).toEqual(engineer.email);

        //getGithub
        expect(engineer.getGithub()).toEqual(engineer.github);

        //getRole
        expect(engineer.getRole()).toEqual('Engineer');
        });
    });
});