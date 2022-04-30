const Employee = require('./Employee');

class Intern extends Employee {

constructor(school) {
    super(id, email);
    this.school = school;
    };

getSchool() {
    return this.school;
}

getRole() {
    return this.constructor.name
    };
};

module.exports = Intern;