const Employee = require('./Employee');

class Manager extends Employee {

constructor(officeNumber) {
    super(id, email);
    this.officeNumber = officeNumber;
    };

getofficeNumber() {
    return this.officeNumber;
};

getRole() {
    return this.constructor.name;
    };
};

module.exports = Manager