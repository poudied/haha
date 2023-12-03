document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); 


        var isValid = validateUserData();

    
        if (isValid) {
            form.submit();
        }
    });
});

function validateUserData(e){
    
    var error = 0;

    error = validateName(error);
    error = validateEmail(error);
    error = validatepNumber(error);
    error = validateMessage(error);
    error = validateUsername(error);
    error = validatePassword(error);
    error = validatecPassword(error);
    error = validatefName(error);
    error = validateSurname(error);
    error = validateGender(error);
    error = validateAddress(error);
    error = validateSuburb(error);
    error = validatePostcode(error);
    error = validateState(error);
    error = validatepNumber(error);

    if (error === 0){
        return true;
    }
    else{
        if (e) e.preventDefault();
        return false;
    }
    
}
function validateName(errorFound){
    var userdata = document.getElementById("name").value;
    var illegalChars = /\W/;
    if (document.getElementById("name").value == ""){
        document.getElementById("errorName").innerHTML = "Required";
        return ++errorFound;
    }
    else if (document.getElementById("name").value.length < 6 || document.getElementById("name").value.length > 20) {
        errorName.innerHTML = "Name must be between 6 and 20 characters";
        return ++errorFound;
    }
    
    else if(illegalChars.test(userdata)){
        document.getElementById("errorName").innerHTML = "Your name cannot contain illegal characters.";
    }
    else{
        document.getElementById("errorName").innerHTML = "*";
        return errorFound;
    }
}
function validateEmail(errorFound){
    var userdata = document.getElementById("email").value;
    var regExpression = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    
    if (regExpression.test(userdata)){
        document.getElementById("errorEmail").innerHTML = "*";
        return errorFound;
    }
    else {
        document.getElementById("errorEmail").innerHTML = "The email address is not valid";
        return ++errorFound;
    }
}
function validatepNumber(errorFound){
    var userdata = document.getElementById("pNumber").value;
    var illegalChars = /\W/;
    if (document.getElementById("pNumber").value.length < 8 || document.getElementById("pNumber").value.length > 10) {
        errorpNumber.innerHTML = "Phone number must be between 8 and 10 characters";
        return ++errorFound;
    }
    else if(illegalChars.test(userdata)){
        document.getElementById("errorpNumber").innerHTML = "Your phone number cannot contain illegal characters.";
    }
    else{
        document.getElementById("errorpNumber").innerHTML = "*";
        return errorFound;
    }

}
function validateMessage(errorFound){
    var userdata = document.getElementById("message").value;
    if(userdata.length < 10){
        document.getElementById("errorMessage").innerHTML = "Must be more than 10 characters.";
        return ++errorFound;
    }
    else{
        document.getElementById("errorMessage").innerHTML = "*";
        return errorFound;
    }
}
function validateUsername(errorFound){
    var userdata = document.getElementById("username").value;

    if (userdata.length < 6 || userdata.length > 20){
        errorUsername.innerHTML = "haha timang";
        return ++errorFound;
    }
    else{
        document.getElementById("errorUsername").innerHTML = "*";
        return errorFound;
    }

}