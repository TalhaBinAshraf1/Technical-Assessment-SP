const loginActions = require("./loginActions");

describe('Login Validation', () => {

    it('Validate user able to login with Valid credential', async() => {
        await loginActions.validateLoginWithValidCredential();
    });

});