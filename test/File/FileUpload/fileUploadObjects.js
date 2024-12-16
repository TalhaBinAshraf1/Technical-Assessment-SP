
class FileUploadObjects {

    get damFromTopBar(){
        return $('[class="chakra-button chakra-menu__menu-button css-1xt7jzq"]');
    }

    get assets() {
        return $('[class="css-1rkoboy"]');
    }

    get uploadButton(){
        return $('[class="chakra-button _s_newItem css-xvibk1"]');
    }

    get uploadField(){
        return $('[class="_s_fileUpload"]');
    }

    get title(){
        return $('[class="chakra-input _s_singleLineTextField css-1an7nsl"]');
    }

    get pleaseSelect(){
        return $('[class="css-1lsxwht"]');
    }

    get imageFromDropdown(){
        return $('//div[contains(text(), "Image")]');
    }

    get saveButton(){
        return $('//button[contains(text(), "Save")]');
    }

    get uploadFileName(){
        return $('[class="chakra-text css-ytdmmk"]');
    }

    get uploadedFileName() {
        return $('(//p[contains(text(), "Test-Image.png")])[1]');
    }

    get firstFileTitleInUI(){
        return $('(//*[@class="chakra-text css-dnhmjh"])[1]');
    }

    get firstFileTypeInUI(){
        return $('(//p[text()="Image"])[1]');
    }

    get deleteButton(){
        return $('[aria-label="delete"]');
    }

    get okButton(){
        return $('[aria-label="Confirm"]');
    }

    get editButtonInFile(){
        return $('[aria-label="edit"]');
    }

    get saveButtonInFile(){
        return $('(//button[@aria-label="Save"])[2]');
    }

    get crossButtonInFile(){
        return $('(//button[@aria-label="close"])[8]');
    }

    get firstItemCheckbox(){
        return $('( //span [@class="chakra-checkbox__control css-1p9wxqe"])[3]');
    }

    get shareButton(){
        return $('[class="chakra-button _s_share css-xvibk1"]');
    }

    get pleaseSelectFromShareModal(){
        return $('(//div[contains(@class, "mb-tag-field__dropdown-indicator")])[2]');
    }

    get userNameFromDropdown2(){
        return $('//div[contains(text(), "sash.dqa")]');
    }

    get sendButton(){
        return $('[aria-label="Email Link"]');
    }

}
module.exports = new FileUploadObjects(); 