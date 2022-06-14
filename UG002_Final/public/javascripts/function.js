
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

    var data={"eventname":eventname,"priceenter":priceenter};
    console.log(data);
    xmlhttp.open("POST", "/users/addevent", true);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send(JSON.stringify(data));

}

function event_admin(){
    var desc = document.getElementById('desc').value;
    var date = document.getElementById('date1').value;
    var time = document.getElementById('edit-time').value;
    var loc = document.getElementById('edit-loc').value;
    var price = document.getElementById('edit-price').value;

     var xmlhttp = new XMLHttpRequest();
     xmlhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
         event_initial = JSON.parse(this.responseText);

        }

     };

     var data2={"desc":desc,"date":date,"time":time,"loc":loc,"price":price};
     console.log(data2);
     xmlhttp.open("POST", "/users/admin-edit", true);
     xmlhttp.setRequestHeader("Content-type", "application/json");
     xmlhttp.send(JSON.stringify(data2));

 }

function desc_add(){
    var desc = document.getElementById('text1').value;

      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
          event_initial = JSON.parse(this.responseText);
         }

      };

      var data4={"desc":desc};
      console.log(data4);
      xmlhttp.open("POST", "/users/adddesc", true);
      xmlhttp.setRequestHeader("Content-type", "application/json");
      xmlhttp.send(JSON.stringify(data4));

  }

function name_add(){
    var name = document.getElementById('name1').value;


      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
          event_initial = JSON.parse(this.responseText);
         }

      };

      var data3={"name":name};
      console.log(data3);
      xmlhttp.open("POST", "/users/addname", true);
      xmlhttp.setRequestHeader("Content-type", "application/json");
      xmlhttp.send(JSON.stringify(data3));

  }