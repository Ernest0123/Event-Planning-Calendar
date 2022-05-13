var vueinst = new Vue({
    el:'#app',
    data:{
    choose:'online or offline..'
    }
});



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
    var divb4 = document.getElementById('adddesc');
    divb4.style.display = 'none';

}




