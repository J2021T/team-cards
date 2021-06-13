const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('tests if intern object works', () => {
    const intern = new Intern('Jordan', '123.3', 'jordanmail', 'Butler');

    expect(intern.getName()).toEqual(expect.any(String));
    expect(intern.getID()).toEqual(expect.any(String));
    expect(intern.getEmail()).toEqual(expect.any(String));
    expect(intern.getSchoolName()).toEqual(expect.any(String));
    expect(intern.getRole()).toBe('Intern');
})