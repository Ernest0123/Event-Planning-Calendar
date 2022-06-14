const form=document.querySelector('.modal-content');
let email=document.getElementById('email');
if(form){
    form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log('clicked');
    let form_data={
        email:email.value
    };
    console.log(form_data);
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.onreadystatechange = function() {
        console.log(xhttp.responseText);
        if (xhttp.responseText == 'success') {
            alert('Email Sent');
            email.value='';
    }else{
        alert('Something is wrong');
    }
    };//xhttp function
    //xhttp.open("POST", "/", true);
    //xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(form_data));

});
}


