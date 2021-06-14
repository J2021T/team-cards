const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, roleInfo) {
        super(name, id, email);
        this.roleInfo = roleInfo;
    }

    getOfficeNumber() {
        return this.roleInfo;
    }

    getRole() {
        return 'Manager';
    }
};

module.exports = Manager;