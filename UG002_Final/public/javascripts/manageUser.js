function checklogin() {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function (){
        if(this.readyState == 4 && this.status >= 200 && this.status < 400){
            //alert("You are logged in.");
            var userdata = JSON.parse(this.responseText);
            document.getElementById("usernamedisplay").innerHTML = userdata[0].username;
            document.getElementById("firstnamedisplay").innerHTML = userdata[0].firstname;
            document.getElementById("lastnamedisplay").innerHTML = userdata[0].lastname;
            document.getElementById("emaildisplay").innerHTML = userdata[0].email;
        } else if (this.readyState == 4 && this.status >= 400) {
            alert("You are not logged in.");
            window.location.replace("/login.html");
        }
    };
    xhttp.open("POST", "/getusrinfo",true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

function gobacktomain(){
    window.location.replace("/main.html");
}