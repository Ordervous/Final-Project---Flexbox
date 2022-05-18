

$.ajax('https://api.adviceslip.com/advice',
    {
        success: function (APIResponse) {
            let justadvice = JSON.parse(APIResponse);
            console.log(justadvice);

            let myadvice = document.getElementById("Madvice");
            myadvice.innerHTML = justadvice.slip.advice;

        }
    })


// function resize(elem, percent) { elem.style.fontSize = percent; };

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
    document.getElementById("mousehover2").style.fontSize = "150%";
};



/* onmouseover="resize(this, '210%')" onmouseout="resize(this, '190%')" */
/* onmouseover="resize(this, '180%')" onmouseout="resize(this, '150%')" */