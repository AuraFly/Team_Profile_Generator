const Employee = require('./Employee');

class Engineer extends Employee {

constructor(github) {
    super(id, email);
    this.github = github;
    };

getGithub() {
    return this.github
};

getRole() {
    return this.constructor.name
    };
};

module.exports = Engineer