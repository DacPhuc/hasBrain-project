var myIndex = 0;
slideshow();
function slideshow() {
    var i;
    var x = document.getElementsByClassName("myslide");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(slideshow, 2000);
}
function a(){
    var a=querySelector('#menu1');
    a.style.display='block';
}
function b(){
    var b=querySelector('#menu2');
    b.style.display='block';
}