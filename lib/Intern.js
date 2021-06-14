const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, roleInfo) {
        super(name, id, email);
        this.roleInfo = roleInfo;
    }

    getSchoolName() {
        return this.roleInfo;
    }

    getRole() {
        return 'Intern';
    }
};

module.exports = Intern;