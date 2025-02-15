function validatingEmail(){
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = document.getElementById("email-input").value;

    if(email == ""){
        document.getElementById("error-email").classList.add("message");
        document.getElementById("error-email").innerHTML = "Email Cannot Be Empty!";
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
        document.getElementById("error-password").innerHTML = "Password Cannot Be Empty!";
    }else if(password.match(passwordPattern)){
        document.getElementById("error-password").innerHTML = "";
        document.getElementById("error-password").classList.remove("message");
    }else{
        document.getElementById("error-password").classList.add("message");
        document.getElementById("error-password").innerHTML = "Password Must be 8 Characters with minimum of 1 Symbol, 1 Uppercase Letter, and 1 Lowercase Letter!";
    }
}

function validating(){
    validatingEmail();
    validatingPassword();
}