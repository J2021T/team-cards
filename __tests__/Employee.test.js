const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('gets employee name', () => {
    const employee = new Employee ('Chuck', '123', 'chuck.gmail', 'Employee');

    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getID()).toEqual(expect.any(String));
    expect(employee.getEmail()).toEqual(expect.any(String));
    expect(employee.getRole()).toBe('Employee');
});