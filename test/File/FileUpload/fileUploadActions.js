const { expect } = require('chai');
const { browser } = require('@wdio/globals')
const path = require('path');
const report = require('@wdio/allure-reporter').default

const fileUploadObjects = require('./fileUploadObjects');
const filePath = './test/utility/data/Test-Image.png';
const testData = require('../../utility/data.json').testData;

class FileUploadActions {

    fileText;

    async clickOnDAM() {
        await fileUploadObjects.damFromTopBar.waitForDisplayed({ timeout: 15000 });
        const isDAMIsDisplayed = await fileUploadObjects.damFromTopBar.isDisplayed()
        expect(isDAMIsDisplayed).to.equal(true);
        report.step(`User able to click on DAM`)

        return await fileUploadObjects.damFromTopBar.click();
    }

    async clickOnAssets() {
        await fileUploadObjects.assets.waitForDisplayed({ timeout: 15000 });
        const isAssetsIsDisplayed = await fileUploadObjects.assets.isDisplayed()
        expect(isAssetsIsDisplayed).to.equal(true);
        await driver.pause(4000);
        report.step(`User able to click on Assets button`);

        return await fileUploadObjects.assets.click();
    }

    async clickOnUploadButton() {
        await fileUploadObjects.uploadButton.waitForDisplayed({ timeout: 15000 });
        const isUploadButtonIsDisplayed = await fileUploadObjects.uploadButton.isDisplayed()
        expect(isUploadButtonIsDisplayed).to.equal(true);
        report.step(`User able to click on Upload button`)

        return await fileUploadObjects.uploadButton.click();
    }

    async uploadFile() {
        const fileInputClick = await $('[class="_s_fileUpload"]');
        const remoteFilePath = await browser.uploadFile(filePath)

        browser.execute(() => {
            const elements = document.getElementsByClassName('_s_fileUpload');
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.display = "block";
            }
        });
        await fileInputClick.setValue(remoteFilePath)

        report.step(`User able to upload image.`);
    }

    async setTitle(inputText) {
        await fileUploadObjects.title.waitForDisplayed({ timeout: 15000 })
        const isTitleIsDisplayed = await fileUploadObjects.title.isDisplayed();
        expect(isTitleIsDisplayed).to.equal(true);
        report.step(`User able to input data in Title field`);

        return await fileUploadObjects.title.setValue(inputText);
    }

    async clickOnPleaseSelect() {
        await fileUploadObjects.pleaseSelect.waitForClickable({ timeout: 15000 });
        const isPleaseSelectIsDisplayed = await fileUploadObjects.pleaseSelect.isDisplayed()
        expect(isPleaseSelectIsDisplayed).to.equal(true);
        report.step(`User able to click on Please Select`)

        return await fileUploadObjects.pleaseSelect.click();
    }

    async setTypeImage() {
        await fileUploadObjects.imageFromDropdown.waitForClickable({ timeout: 15000 });
        const isImageFromDropdownIsDisplayed = await fileUploadObjects.imageFromDropdown.isDisplayed()
        expect(isImageFromDropdownIsDisplayed).to.equal(true);
        report.step(`User able to set type of Image`)

        return await fileUploadObjects.imageFromDropdown.click();
    }

    async clickOnSave() {
        await fileUploadObjects.saveButton.waitForClickable({ timeout: 15000 });
        const isSaveButtonIsDisplayed = await fileUploadObjects.saveButton.isDisplayed()
        expect(isSaveButtonIsDisplayed).to.equal(true);
        report.step(`User able to click on Save button`);

        return await fileUploadObjects.saveButton.click();
    }

    async getTextFromUploadedFile() {
        await fileUploadObjects.uploadFileName.waitForDisplayed({ timeout: 15000 });
        const isUploadFileNameIsDisplayed = await fileUploadObjects.uploadFileName.isDisplayed()
        expect(isUploadFileNameIsDisplayed).to.equal(true);
        

        const text = await fileUploadObjects.uploadFileName.getText();
        this.fileText = text;
    }

    async deleteTheExistingImage() {
        await fileUploadObjects.uploadedFileName.waitForClickable({ timeout: 10000 });
        await fileUploadObjects.uploadedFileName.click();

        await fileUploadObjects.deleteButton.waitForClickable({ timeout: 10000 });
        await fileUploadObjects.deleteButton.click();

        await fileUploadObjects.okButton.waitForClickable({ timeout: 10000 });
        await fileUploadObjects.okButton.click();

        report.step(`Image exist!! User able to delete the image`);
    }

    async deleteTheFileIfExist() {
       await driver.pause(4000);
        const isImageIsDisplayed = await fileUploadObjects.uploadedFileName.isDisplayed();
        return isImageIsDisplayed ? await this.deleteTheExistingImage() : console.log("Upload the image !!!")
    }

    async clickOnUploadedImage() {
        await fileUploadObjects.uploadedFileName.waitForClickable({ timeout: 10000 });
        await fileUploadObjects.uploadedFileName.click();
    }

    async clickOnEditFromFile() {
        await fileUploadObjects.editButtonInFile.waitForClickable({ timeout: 10000 });
        await fileUploadObjects.editButtonInFile.click();
    }

    async clickOnSaveButton() {
        await fileUploadObjects.saveButtonInFile.waitForClickable({ timeout: 10000 });
        await fileUploadObjects.saveButtonInFile.click();
    }

    async clickOnCrossButton() {
        await fileUploadObjects.crossButtonInFile.waitForClickable({ timeout: 10000 });
        await fileUploadObjects.crossButtonInFile.click()
    }

    async clickOnFirstItemCheckbox(){
        await fileUploadObjects.firstItemCheckbox.waitForClickable({ timeout: 10000 });
        await fileUploadObjects.firstItemCheckbox.click()

        report.step(`User able to click on First Item checkbox`);
    }

    async clickOnShareButton(){
        await fileUploadObjects.shareButton.waitForClickable({ timeout: 10000 });
        await fileUploadObjects.shareButton.click();

        report.step(`User able to click on Share button`)
    }

    async clickOnPleaseSelectFromShareModal() {
        await fileUploadObjects.pleaseSelectFromShareModal.waitForClickable({ timeout: 15000 });
        await driver.pause(4000);
        await fileUploadObjects.pleaseSelectFromShareModal.click();
        
        report.step(`User able to click on Please Select from share modal`);
    }

    async setUser() {
        await fileUploadObjects.userNameFromDropdown2.waitForClickable({ timeout: 15000 });
        await fileUploadObjects.userNameFromDropdown2.click();
        
        report.step(`User able to set User from Dropdown`);
    }

    async clickOnSendButton(){
        await fileUploadObjects.sendButton.waitForClickable({ timeout: 15000 });
        await fileUploadObjects.sendButton.click();
        await driver.pause(4000);
        
        report.step(`User able to click on Send`);
    }

    async validateTheFileNameAfterUpload() {
        await fileUploadObjects.uploadedFileName.waitForDisplayed({ timeout: 15000 });
        const fileTextBeforeUpload = await this.fileText;
        const fileTextAfterUpload = await fileUploadObjects.uploadedFileName.getText();
        expect(fileTextBeforeUpload).to.equal(fileTextAfterUpload);

        report.step(`Validated the File Name after Upload`);
    }

    async validateTheTitle() {
        await fileUploadObjects.firstFileTitleInUI.waitForDisplayed({ timeout: 15000 });
        const titleFromUI = await fileUploadObjects.firstFileTitleInUI.getText();
        expect(testData.title).to.equal(titleFromUI);

        report.step(`Validated the File Title after Upload`);
    }

    async validateTheType() {
        await fileUploadObjects.firstFileTypeInUI.waitForDisplayed({ timeout: 15000 });
        const typeFromUI = await fileUploadObjects.firstFileTypeInUI.getText();
        expect('Image').to.equal(typeFromUI);

        report.step(`Validated the File Type after Upload`);
    }

    async validateTheTitleAfterModification() {
        await this.clickOnEditFromFile();
        await fileUploadObjects.title.clearValue();
        await this.setTitle(testData.modifiedTitle);
        await this.clickOnSaveButton();
        await this.clickOnCrossButton();
        await driver.pause(3000);

        await fileUploadObjects.firstFileTitleInUI.waitForDisplayed({ timeout: 15000 });
        const textAfterModification = await fileUploadObjects.firstFileTitleInUI.getText();
        expect(testData.modifiedTitle).to.equal(textAfterModification);

        report.step("Validated File Title after edit ")
    }

    //==============  🔸Combine method starts form here🔸 ==============

    async validateTheImageFileUpload() {
        await this.clickOnDAM();
        await this.clickOnAssets();
        await this.deleteTheFileIfExist()
        await this.clickOnUploadButton();
        await this.uploadFile();
        await this.setTitle(testData.title);
        await this.clickOnPleaseSelect();
        await this.setTypeImage();
        await driver.pause(5000);
        await this.getTextFromUploadedFile();
        await this.clickOnSave();
        await driver.pause(5000);
    }

    async validateTheUploadedFile() {
        await this.validateTheFileNameAfterUpload();
        await this.validateTheTitle();
        await this.validateTheType();
        await driver.pause(4000);
    }

    async validateThatUserCanEditTheTitle() {
        await this.clickOnUploadedImage();
        await this.validateTheTitleAfterModification()
        await driver.pause(5000)
    }

    async validateUserCanShareFile() {
        await this.clickOnFirstItemCheckbox();
        await this.clickOnShareButton();
        await this.clickOnPleaseSelectFromShareModal();
        await this.setUser();
        await this.clickOnSendButton();
        report.step('User able to send the Email to the User')
    }

}
module.exports = new FileUploadActions();