const Manager = require('../lib/Manager');

describe("Manager", () => {
    //testing Manager class functionality through series of tests/descriptions
    //should be noted that Manager extends the Employee class for name/id/email.
    describe('Initialization', () => {
    it("Should create object containing NAME/EMAIL/ID/OFFICENUMBER 'STRING/NUMBER/STRING/NUMBER' when called with 'new' keyword", () => {
        //Setting class definitions to use for test
        const manager = new Manager('John', 123, 'JDoe@Gmail.com', 987);

        //Stating that the test should expect the const set to 'Manager' class should equal
        //the definitions set above when the property is called.
        //name called--
        expect(manager.name).toEqual("John");

        //id called--
        expect(manager.id).toEqual(123);

        //email called--
        expect(manager.email).toEqual("JDoe@Gmail.com");

        //officenumber called--
        expect(manager.officeNumber).toEqual(987);
    });

    //testing Manager class methods
    it("Should return defined properties when methods are used", () => {
        //Setting class definitions to use for test
        const manager = new Manager('John', 123, 'JDoe@Gmail.com', 987);

        //Stating that the output of .getName, .getId, .getEmail, .getofficeNumber should match the definitions set above
        //with the exception of .getRole which should match the name of the constructor/class.
        //getName method
        expect(manager.getName()).toEqual(manager.name);

        //getID method
        expect(manager.getId()).toEqual(manager.id);

        //getEmail method
        expect(manager.getEmail()).toEqual(manager.email);

        //getofficeNumber
        expect(manager.getofficeNumber()).toEqual(manager.officeNumber);

        //getRole
        expect(manager.getRole()).toEqual('Manager');
        });
    });
});