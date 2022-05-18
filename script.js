

$.ajax('https://api.adviceslip.com/advice',
    {
        success: function (APIResponse) {
            let justadvice = JSON.parse(APIResponse);
            console.log(justadvice);

            let myadvice = document.getElementById("Madvice");
            myadvice.innerHTML = justadvice.slip.advice;

        }
    });

document.getElementById("mousehover").onmouseover = function () {
    document.getElementById("mousehover").style.fontSize = "210%"
};
document.getElementById("mousehover").onmouseout = function () {
    document.getElementById("mousehover").style.fontSize = "190%";
};

document.getElementById("mousehover2").onmouseover = function () {
    document.getElementById("mousehover2").style.fontSize = "180%"
};
document.getElementById("mousehover2").onmouseout = function () {
    document.getElementById("mousehover2").style.fontSize = "135%";
};

//Technical Skills 
document.getElementById("orange").onmouseover = function () {
    document.getElementById("orange").style.backgroundColor = "bisque"
};
    document.getElementById("orange").onmouseout = function () {
        document.getElementById("orange").style.backgroundColor = "";
};

//Soft Skills 
document.getElementById("red").onmouseover = function () {
    document.getElementById("red").style.backgroundColor = "bisque"
};
    document.getElementById("red").onmouseout = function () {
        document.getElementById("red").style.backgroundColor = "";
};

//Hobbies
document.getElementById("yellow").onmouseover = function () {
    document.getElementById("yellow").style.backgroundColor = "bisque"
};
    document.getElementById("yellow").onmouseout = function () {
        document.getElementById("yellow").style.backgroundColor = "";
};


// Was trying to make one function that would change the background 
//for multiple classes, then id's but couldn't crack it 

// function justOne() {
//     document.getElementsByClassName("background").style.backgroundColor = "bisque"
  
// };