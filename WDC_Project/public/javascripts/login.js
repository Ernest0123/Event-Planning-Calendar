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

    let user = {
        // get username and password from user (LOGIN ONLY)
        username: document.getElementsByName('username')[0].value,
        password: document.getElementsByName('password')[0].value
    };

    // Create http request
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert("Login Successful");
        } else if (this.readyState == 4 && this.status >= 400) {
            alert("Login Failed");
        }
    };

    xhttp.open("POST", "/login");
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(user));
}

// The login function pressed from the FORM!!!
function logout() {

    let user = {
        // get username and password from user (LOGIN ONLY)
        username: document.getElementsByName('username')[0].value,
        password: document.getElementsByName('password')[0].value
    };

    // Create http request
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert("Logout Successful");
        } else if (this.readyState == 4 && this.status >= 400) {
            alert("Logout Failed");
        }
    };

    xhttp.open("POST", "/logout");
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(user));
}

// The Google login
function onSignIn(googleUser) {
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