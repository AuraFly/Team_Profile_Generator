const Employee = require('../lib/Employee');

describe("Employee", () => {
    //testing Employee class functionality through series of tests/descriptions
    describe('Initialization', () => {
        it("Should create object containing NAME/EMAIL/ID 'STRING/NUMBER/STRING' when called with new keyword", () => {
            //Setting class definitions to use for test
            const employee = new Employee('John', '123', 'JDoe@Gmail.com');

            //Stating that the test should expect the const set to 'Employee' class should equal
            //the definitions set above when the property is called.
            //name called--
            expect(employee.name).toEqual("John");

            //id called--
            expect(employee.id).toEqual("123");

            //email called--
            expect(employee.email).toEqual("JDoe@Gmail.com");
        });

    //testing Employee class methods
        it("Should return defined properties when methods are used", () => {
            //Setting class definitions to use for test
            const employee = new Employee('John', '123', 'JDoe@Gmail.com');

            //Stating that the output of .getName, .getId, .getEmail should match the definitions set above
            //with the exception of .getRole which should match the name of the constructor/class.
            //getName method
            expect(employee.getName()).toEqual(employee.name);

            //getID method
            expect(employee.getId()).toEqual(employee.id);

            //getEmail method
            expect(employee.getEmail()).toEqual(employee.email);

            //getRole
            expect(employee.getRole()).toEqual('Employee');
        });
    });
});