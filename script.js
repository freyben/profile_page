
var myBody = document.body;




function Darkmode(){
    myBody.classList.toggle("dark-mode");    
}

const myImage=document.querySelector("#profile_pic")
var switch_1 = 0

function FirstImage(repeats = 1) {

    if (switch_1 === 0) {
        myImage.src="kermit_mirror.jpg"
        switch_1 = 1
    }
    else {
        myImage.src="kermit.jpg"
        switch_1 = 0
    }
    // myBody.classList.toggle("dark-mode");
}
let myInterval
function Madness() {
    // FirstImage()
    alert("What do you mean by madness?");
    
    myInterval = setInterval(FirstImage, 50);
    
    }

function Stop_Madness() {
    if (myInterval != undefined) {
    clearInterval(myInterval);
    }
    else
        alert("There is no madness right now!")
}
