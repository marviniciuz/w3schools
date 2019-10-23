function myFunction(){
    document.getElementById("demo").style.fontSize = "25px";
    document.getElementById("demo").style.color = "red";
    document.getElementById("demo").style.backgroundColor  = "yellow";
}
function light(sw) {
    var pic;
    if (sw == 0) {
        pic = "../images/pic_bulboff.gif"
    } else {
        pic = "../images/pic_bulbon.gif"
    }
    document.getElementById('myImage').src = pic;
}
function myFunction() {
    document.getElementById("paragraphTest").innerHTML = "Hello JavaScript!";
}