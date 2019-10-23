function work() {
var inputtext=document.getElementById("inputtext").value;
var inputposition=document.getElementById("inputposition").value;
if(document.getElementById("radio2").checked)
{
document.getElementById("answernach").innerHTML = inputtext.slice(inputposition.length+inputtext.search(inputposition));
}
if(document.getElementById("radio1").checked)
{
document.getElementById("answervor").innerHTML = inputtext.slice(0,inputtext.search(inputposition));
}
}

