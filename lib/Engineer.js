const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, roleInfo) {
        super(name, id, email);
        this.roleInfo = roleInfo;
    }

    getGithubName() {
        return this.roleInfo;
    }

    getRole() {
        return 'Engineer';
    }
};

module.exports = Engineer;