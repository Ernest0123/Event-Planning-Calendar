// Show Login Page
function showLogin() {

    // // the whole main thing in the content
    // var main = document.getElementById("main_page");

    // the hidden section (login area)
    var login = document.getElementById("Login");
    var signup = document.getElementById("Signup");
    var admin = document.getElementById("Admin");

    // appear the hidden page (login area)
    login.style.display = "inline";

    // hide
    signup.style.display = "none";
    admin.style.display = "none";
}

// Show Signup Page
function showSignup() {

    var login = document.getElementById("Login");
    var signup = document.getElementById("Signup");
    var admin = document.getElementById("Admin");

    // hide
    login.style.display = "none";
    admin.style.display = "none";

    // appear signup page
    signup.style.display = "inline";
}

// Show Admin login Page
function showAdmin() {

    var admin = document.getElementById("Admin");
    var signup = document.getElementById("Signup");
    var login = document.getElementById("Login");

    // hide
    login.style.display = "none";
    signup.style.display = "none";

    // appear Admin sign in
    admin.style.display = "inline";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == Login) {
        Login.style.display = "none";
    }
    else if (event.target == Signup) {
        Signup.style.display = "none";
    }
    else if (event.target == Admin) {
        Signup.style.display = "none";
    }
}

// Show Main page
function returnMain() {

    var login = document.getElementById('Login');
    login.style.display = 'none';

    var signup = document.getElementById('Signup');
    signup.style.display = 'none';

    var admin = document.getElementById('Admin');
    admin.style.display = 'none';
}

// The login function pressed from the USERS!!
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

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert("User Login Successful");
        } else if (this.readyState == 4 && this.status >= 400) {
            alert("User Login Failed");
        }

    };
    xhttp.open("POST", "/login", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    // xhttp.send(JSON.stringify({ "login_username": username, "login_password": password }));
    xhttp.send(JSON.stringify(user));

}

// The login function pressed from the FORM!!!
function adminlogin() {

    // Attempt 1:
    var user = {
        // get username and password from user (LOGIN ONLY)
        username: document.getElementsByName('adminusername')[0].value,
        password: document.getElementsByName('adminpassword')[0].value
    };

    // Attempt 2:
    // declare variables from user login
    // var username = document.getElementById('login_username').value;
    // var password = document.getElementById('login_password').value;

    // Create http request
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert("Admin Login Successful");
        } else if (this.readyState == 4 && this.status >= 400) {
            alert("Admin Login Failed");
        }

    };
    xhttp.open("POST", "/adminlogin", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    // xhttp.send(JSON.stringify({ "login_username": username, "login_password": password }));
    xhttp.send(JSON.stringify(user));

}

// USERS Sign up functions!!!!!!
function signup() {

    let user = {
        signusername: document.getElementsByName('signusername')[0].value,
        signpassword: document.getElementsByName('signpassword')[0].value,
        email: document.getElementsByName('email')[0].value,
        lastname: document.getElementsByName('lastname')[0].value,
        firstname: document.getElementsByName('firstname')[0].value
    };

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert("Signup Successful");
        } else if (this.readyState == 4 && this.status >= 400) {
            alert("Signup Failed");
        }
    };

    xhttp.open("POST", "/signup", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(user));

}

// The logout function pressed from the FORM!!!
function logout() {

    try {
        // The google sideout part
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
        console.log('User signed out.');
    });

    } catch (error) {

    }

    // Create http request
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert("Session Logout Successful");
        }
    };
    // this will send request for normal signout
    xhttp.open("POST", "/logout");
    xhttp.send();
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

    // the server part
   let xhttp = new XMLHttpRequest();

   xhttp.onreadystatechange = function () {
       // readyState = response is FULL, status = error code
       if (this.readyState == 4 && this.status == 200) {
           alert("Goggle Login Successful");
       }
       else if (this.readyState == 4 && this.status >= 400) {
           alert("Goggle Login Failed");
       }
   };

   // Tell the server that to handle like JSON
   xhttp.open('POST', '/login');
   xhttp.setRequestHeader("Content-type", "application/json");
   xhttp.send( JSON.stringify( {
       token: googleUser.getAuthResponse().id_token
   }));

  }

// The Google signout
// function signOut() {
//     var auth2 = gapi.auth2.getAuthInstance();
//     auth2.signOut().then(function () {
//       console.log('User signed out.');
//     });
//   }