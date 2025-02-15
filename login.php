<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="css/login.css">
</head>
<body>

    <nav>
        <div class="logo"><a href=''>PrintLine</div>
        <div class="image">
            <img src="assets/logo.png" width="86" height="86" alt="">
        </a></div>
    </nav>

    <div class="leftside">
        <div class="bg">
            <div class="square"></div>
        </div>
        <div class="loginpic">
            <img src="assets/logpic.jpg" width="655" height="707" alt="">
        </div>
    </div>

    <div class="textt">
        <div class="logintext">
            <b>LOGIN</b>
        </div>
        <div class="welcometext">
            <p>Welcome back! Please login to your account.</p>
        </div>
    </div>

    <div class="inputBox" id="email">
        <input type="email" id="email-input" onkeyup="validatingEmail()" required="required">
        <span>Email Address</span>
        <span id="error-email"></span>
    </div>
    <div class="inputBox" id="password">
        <input type="password" id="password-input" onkeyup="validatingPassword()" required="required">
        <span>Password</span>
        <span id="error-password"></span>
    </div>

    <div class="forgetPass">
        <a href="">Forgotten Password?</a>
    </div>

    <div class="login">
        <button onclick="validating()">Login</button>
    </div>


    <div class="signup">
        <a href="signup.html">
            <button>Sign Up</button>
        </a>
    </div>

    <script src="js/login.js"></script>

</body>
</html>