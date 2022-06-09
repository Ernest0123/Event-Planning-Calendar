var vueinst = new Vue({
    el:'#app',
    data:{
    selected:''
    }
});

function myFunction() {
    const node = document.getElementById("demo");
    const clone = node.cloneNode(true);
    var div1=document.getElementById("form1");
    div1.appendChild(clone);
}


function back_menu() {
    var divb1 = document.getElementById('app');
    divb1.style.display = 'none';

}


function next_menu() {
    var divb2 = document.getElementById('app');
    divb2.style.display = 'none';
    document.getElementById("adddesc").style.display="block";
}


function checkresp_next() {
    var divb3 = document.getElementById('app');
    divb3.style.display = 'none';
    var divb4 = document.getElementById('adddesc');
    divb4.style.display = 'none';

    document.getElementById("showresp").style.display="block";
}

function back_create() {
    var divb4 = document.getElementById('app');
    divb4.style.display = 'block';
    var divb7 = document.getElementById('adddesc');
    divb7.style.display = 'none';
}


//To the publish event page

function publish_event() {
    var divb5 = document.getElementById('event1');
    divb5.style.display = 'block';
    var divb6 = document.getElementById('showresp');
    divb6.style.display = 'none';
}

function show_invite_people() {
    // the hidden section (login area)
    var invite_people = document.getElementById("Invite");
    invite_people.style.display = "block";
    //signup.style.display = "none";
}

function closeForm() {
    document.getElementById("Invite").style.display = "none";
  }
function save_email(){
     document.getElementById("Invite").style.display="none";
     document.getElementById("adddesc").style.display="block";
}




