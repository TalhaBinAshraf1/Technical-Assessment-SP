const loginActions = require("../../User/login/loginActions");
const fileUploadAction = require("./fileUploadActions");

describe('Login, Validate File Upload, Modify File Title, Share File', () => {

    it('Validate User able to login with Valid credential', async () => {
        await loginActions.validateLoginWithValidCredential();
    });

    it('Validate user able to Upload Image File', async () => {
        await fileUploadAction.validateTheImageFileUpload();
        await fileUploadAction.validateTheUploadedFile();
    })

    it('Validate user able to Edit File Title', async () => {
        await fileUploadAction.validateThatUserCanEditTheTitle();
    });

    it('Validate user able to Share File', async () => {               
        await fileUploadAction.validateUserCanShareFile();
    });
});