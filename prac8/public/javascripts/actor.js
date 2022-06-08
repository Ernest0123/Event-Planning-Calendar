var actor_initial = [];
function show_actor(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
            let d = '';
            if (this.readyState == 4 && this.status == 200) {
                actor_initial = JSON.parse(this.responseText);
                for(i=0; i<actor_initial.length; i++)
                {
                    d = d +`<tr>
                    <td>${actor_initial[i].first_name}</td>
                    <td>${actor_initial[i].last_name}</td>
                    </tr>`;
                }
             document.getElementById("actorsshow").innerHTML = d;
            }
        };
    xmlhttp.open("GET", "/users/actor", true);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send();

}


function actor_add(){
    var firstname = document.getElementById('actor-first-name').value;
    var lastname = document.getElementById('actor-last-name').value;
    //console.log(firstname, lastname);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        actor_initial = JSON.parse(this.responseText);

       }

    };

    var data={"firstname":firstname,"lastname":lastname};
    //console.log(data);
    xmlhttp.open("POST", "/users/addactor", true);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send(JSON.stringify(data));

}