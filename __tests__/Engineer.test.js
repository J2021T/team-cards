const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('tests if engineer object works', () => {
    const engineer = new Engineer('Darius', '123.2', 'dariusmail', '1234567890');

    expect(engineer.getName()).toEqual(expect.any(String));
    expect(engineer.getID()).toEqual(expect.any(String));
    expect(engineer.getEmail()).toEqual(expect.any(String));
    expect(engineer.getGithubName()).toEqual(expect.any(String));
    expect(engineer.getRole()).toBe('Engineer');
})