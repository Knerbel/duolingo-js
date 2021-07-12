const { Duolingo } = require('../src/index');
const { tokenFileExist } = require('../src/token');
const client = new Duolingo(process.env.DUOLINGO_IDENTIFIER, process.env.DUOLINGO_PASSWORD);

jest.setTimeout(10000);

test('duolingo.login', async () => {
    // -- Test with real credentials -- //
    const loggedIn = await client.login();

    expect(loggedIn).toBe(true);
});

test('duolingo.existToken', () => {
    expect(tokenFileExist('tests/duolingo/test.json')).toBe(false);
    expect(tokenFileExist('tests/duolingo/token.json')).toBe(true);
});

test('duolingo.getUserdata', async() => {
    const loggedIn = await client.login();
    const data = await client.getUserData('Grimille');

    expect(loggedIn).toBe(true);
    expect(data.users).not.toBeUndefined();
})