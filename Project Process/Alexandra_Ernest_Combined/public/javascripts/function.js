
let event_initial=[];
function event_add(){
   var eventname = document.getElementById('fname').value;
   var priceenter = document.getElementById('priceenter').value;
    //var public= document.getElementById('public1').value;
    //var private1 = document.getElementById('private1').value;

    //console.log(firstname, lastname);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        event_initial = JSON.parse(this.responseText);

       }

    };

    var data={"firstname":eventname,"date_event":priceenter};
    console.log(data);
    xmlhttp.open("POST", "/users/addevent", true);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send(JSON.stringify(data));

}
