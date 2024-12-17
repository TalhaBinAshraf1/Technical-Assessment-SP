
class LoginObjects {

    get emailField(){
        return $('[class="chakra-input _s_UserName css-1evhch8"]');
    }

    get nextButton(){
        return $('[class="chakra-text css-1slme71"]');
    }

    get passwordField(){
        return $('[name="password"]');
    }

    get loginButton(){
        return $('[type="submit"]');
    }

    get userAvatar(){
        return $('(//div[@class="css-0"])[2]');
    }

}
module.exports = new LoginObjects(); 