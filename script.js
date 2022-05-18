

$.ajax('https://api.adviceslip.com/advice', 
{
success: function (APIResponse) {
    let justadvice = JSON.parse(APIResponse);
    console.log(justadvice);
    
    let myadvice = document.getElementById("Madvice");
    myadvice.innerHTML = justadvice.slip.advice;

}
})