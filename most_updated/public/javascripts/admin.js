var vueinst = new Vue({
    el:'#app',
    data:{
    selected:''
    }
});

function dropDown() {
    document.getElementByClass("dropdown").innerHTML = "Edit Event";
}

function editDate() {
    const node = document.getElementById("date1");
    const clone = node.cloneNode(true);
    var divDate = document.getElementById("date-time");
    divDate.appendChild(clone);
}

// Admin Participant Pop Up
var popup = document.getElementById("openPopup");
var popupBtn = document.getElementById("popupButton");
var closeBtn = document.getElementByClassName("close")[0];

popupBtn.onclick = function(){
    //to open pop up
    popup.style.display = "block";
};

closeBtn.onclick = function(){ //close button
    popup.style.display = "none";
};

window.onclick = function(event) { // click anywhere = close the pop up
    if(event.target == popup){
        popup.style.display = "none";
    }
};