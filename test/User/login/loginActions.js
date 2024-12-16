const { expect } = require('chai');
const { browser } = require('@wdio/globals')
const report = require('@wdio/allure-reporter').default
const loginObjects = require('./loginObjects');
const url = require('../../utility/data.json').urls;
const testData = require('../../utility/data.json').testData;
const data = require('../../utility/data.json');
const fileUploadActions = require('../../File/FileUpload/fileUploadActions');

class LoginActions {

    async validateTheURL(expectedCurrentUrl) {
        const currentUrl = await browser.getUrl();
        expect(currentUrl).to.equal(expectedCurrentUrl);
    }

    async navigateToTheSite() {
        await browser.url(url.baseURL);
        report.step(`User able to navigate the login page`);
    }

    async inputEmail() {
        await loginObjects.emailField.waitForDisplayed({ timeout: 5000 })
        const emailFieldIsDisplayed = await loginObjects.emailField.isDisplayed();
        expect(emailFieldIsDisplayed).to.equal(true);
        report.step(`User able to input value in Email field`);

        return await loginObjects.emailField.setValue(testData.userEmail)
    }

    async clickOnNextButton() {
        await loginObjects.nextButton.waitForDisplayed({ timeout: 5000 });
        const isNextButtonIsDisplayed = await loginObjects.nextButton.isDisplayed()
        expect(isNextButtonIsDisplayed).to.equal(true);
        report.step(`User able to click on Next button`);

        return await loginObjects.nextButton.click();
    }

    async inputPassword() {
        await loginObjects.passwordField.waitForDisplayed({ timeout: 5000 })
        const isPasswordFieldIsDisplayed = await loginObjects.passwordField.isDisplayed();
        expect(isPasswordFieldIsDisplayed).to.equal(true);
        report.step(`User able to input value in Password field`);

        return await loginObjects.passwordField.setValue(testData.password);
    }

    async clickOnLoginButton() {
        await loginObjects.loginButton.waitForDisplayed({ timeout: 5000 });
        const isLoginButtonIsDisplayed = await loginObjects.loginButton.isDisplayed()
        expect(isLoginButtonIsDisplayed).to.equal(true);
        report.step(`User able to click on Login button`)

        return await loginObjects.loginButton.click();
    }

    async validateTheUserAvatarAfterLogin() {
        await loginObjects.userAvatar.waitForDisplayed({ timeout: 10000 })
        const isUserAvatarIsDisplayed = await loginObjects.userAvatar.isDisplayed();
        expect(isUserAvatarIsDisplayed).to.equal(true);

        report.step(`Login Success, Avatar validated !!`);
    }

    async validateLoginWithValidCredential() {
        await this.navigateToTheSite();
        await this.validateTheURL(url.baseURL)
        await this.inputEmail();
        await this.clickOnNextButton();
        await this.inputPassword();
        await this.clickOnLoginButton();
        await this.validateTheUserAvatarAfterLogin();
    }

}
module.exports = new LoginActions();