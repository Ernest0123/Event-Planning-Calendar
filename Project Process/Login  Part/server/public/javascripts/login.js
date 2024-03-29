// Show Login Page
function showLogin() {

    // // the whole main thing in the content
    // var main = document.getElementById("main_page");

    // the hidden section (login area)
    var login = document.getElementById("Login");
    var signup = document.getElementById("Signup");

    // appear the hidden page (login area)
    login.style.display = "inline";
    signup.style.display = "none";
}

// Show Signup Page
function showSignup() {

    var login = document.getElementById("Login");
    var signup = document.getElementById("Signup");

    login.style.display = "none";
    signup.style.display = "inline";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == Login) {
        Login.style.display = "none";
    }
    else if (event.target == Signup) {
        Signup.style.display = "none";
    }
}

// Show Main page
function returnMain() {

    var login = document.getElementById('Login');
    login.style.display = 'none';

    var signup = document.getElementById('Signup');
    signup.style.display = 'none';
}

// The login function pressed from the FORM!!!
function login() {

    // Attempt 1:
    var user = {
        // get username and password from user (LOGIN ONLY)
        username: document.getElementsByName('username')[0].value,
        password: document.getElementsByName('password')[0].value
    };

    // Attempt 2:
    // declare variables from user login
    // var username = document.getElementById('login_username').value;
    // var password = document.getElementById('login_password').value;

    // Create http request
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/login", true);

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert("Login Successful");
        } else if (this.readyState == 4 && this.status >= 400) {
            alert("Login Failed");
        }

    };
    
    xhttp.setRequestHeader("Content-type", "application/json");
    // xhttp.send(JSON.stringify({ "login_username": username, "login_password": password }));
    xhttp.send(JSON.stringify(user));

}

// Sign up functions!!!!!!
function signup() {

    let user = {
        username: document.getElementsByName('username')[0].value,
        password: document.getElementsByName('password')[0].value
    };

    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/signup", true);

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert("Signup Successful");
        } else if (this.readyState == 4 && this.status >= 400) {
            alert("Signup Failed");
        }
    };

    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(user));

}

// The logout function pressed from the FORM!!!
function logout() {

    let user = {
        username: document.getElementsByName('username')[0].value,
        password: document.getElementsByName('password')[0].value
    };

    // Create http request
    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/logout", true);

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert("Session Logout Successful");
        } else if (this.readyState == 4 && this.status >= 400) {
            alert("Session Logout Failed");
        }
    };

    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(user));
}

// The Google login
function onSignIn(googleUser) {
    // test whether login is a success
    console.log('Google Auth. success!');

    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

// The Google signout
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }