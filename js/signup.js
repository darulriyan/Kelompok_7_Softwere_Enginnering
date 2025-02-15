function validatingUsername(){
    var username = document.getElementById("username-input").value;

    if(username == ""){
        document.getElementById("error-username").classList.add("message");
        document.getElementById("error-username").innerHTML = "Username Cannot Be Empty!";
    }else{
        document.getElementById("error-username").classList.remove("message");
        document.getElementById("error-username").innerHTML = "";
    }
}

function validatingTelp(){
    var telp = document.getElementById("telp-input").value;

    if(telp == ""){
        document.getElementById("error-telp").classList.add("message");
        document.getElementById("error-telp").innerHTML = "Telephone Cannot Be Empty!";
    }else{
        var isValid = true;
        for(var i=0; i<telp.length; i++){
            if(!(telp[i] >= '0' && telp[i] <= '9')){
                isValid = false;
                break;
            }
        }

        if(isValid){
            document.getElementById("error-telp").classList.remove("message");
            document.getElementById("error-telp").innerHTML = "";
        }else{
            document.getElementById("error-telp").classList.add("message");
            document.getElementById("error-telp").innerHTML = "Number Only.";
        }
    }
}

function validatingEmail(){
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = document.getElementById("email-input").value;

    if(email == ""){
        document.getElementById("error-email").classList.add("message");
        document.getElementById("error-email").innerHTML = "Email Cannot be Empty!";
    }else if(email.match(emailPattern)){
        document.getElementById("error-email").innerHTML = "";
        document.getElementById("error-email").classList.remove("message");
    }else{
        document.getElementById("error-email").classList.add("message");
        document.getElementById("error-email").innerHTML = "Email Does Not Match Format!";
    }
}

function validatingPassword(){
    var passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var password = document.getElementById("password-input").value;

    if(password == ""){
        document.getElementById("error-password").classList.add("message");
        document.getElementById("error-password").innerHTML = "Password Cannot be Empty!";
    }else if(password.match(passwordPattern)){
        document.getElementById("error-password").innerHTML = "";
        document.getElementById("error-password").classList.remove("message");
    }else{
        document.getElementById("error-password").classList.add("message");
        document.getElementById("error-password").innerHTML = "Password Must be 8 Characters with minimum of 1 Symbol, 1 Uppercase Letter, and 1 Lowercase Letter!";
    }
}

function validatingConfirm(){
    var passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var password = document.getElementById("confirm-input").value;

    if(password == ""){
        document.getElementById("error-confirm").classList.add("message");
        document.getElementById("error-confirm").innerHTML = "Password Cannot be Empty!";
    }else if(!password.match(passwordPattern)){
        document.getElementById("error-confirm").classList.add("message");
        document.getElementById("error-confirm").innerHTML = "Password Must be 8 Characters with minimum of 1 Symbol, 1 Uppercase Letter, and 1 Lowercase Letter!";
    }else if(document.getElementById("password-input").value != password){
        document.getElementById("error-confirm").classList.add("message");
        document.getElementById("error-confirm").innerHTML = "Password Doesn't Match!";
    }else{
        document.getElementById("error-confirm").innerHTML = "";
        document.getElementById("error-confirm").classList.remove("message");        
    }
}

function validatingTerm(){
    if(!document.getElementById("term").checked){
        document.getElementById("error-term").innerHTML = "!!!";
        document.getElementById("error-term").classList.add("message-term");
    }else{
        document.getElementById("error-term").innerHTML = "";
        document.getElementById("error-term").classList.remove("message-term");
    }
}

function validating(){
    validatingUsername();
    validatingTelp();
    validatingEmail();
    validatingPassword();
    validatingConfirm();
    validatingTerm();
}