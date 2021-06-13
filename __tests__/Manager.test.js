const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('tests if manager object works', () => {
    const manager = new Manager('Aaron', '123.1', 'aaronmail', '1234567890');

    expect(manager.getName()).toEqual(expect.any(String));
    expect(manager.getID()).toEqual(expect.any(String));
    expect(manager.getEmail()).toEqual(expect.any(String));
    expect(manager.getOfficeNumber()).toEqual(expect.any(String));
    expect(manager.getRole()).toBe('Manager');
})