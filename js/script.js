var slide = document.getElementsByClassName('slide');
var dot = document.getElementsByClassName('dot');
var n = 0;
var i;

function disno(){
    for( i = 0 ; i<slide.length ; i++){
        slide[i].style.display = 'none';
    }
}
function no_active(){
    for( i = 0 ; i<dot.length ; i++){
        dot[i].classList.remove('active');
    }
}
setInterval(function(){
    n++;
    if( n > slide.length - 1){ // length starts From 1
        n = 0; // Arrays Starts From zero
    }
    disno();
    no_active()
    slide[n].style.display = 'block';
    dot[n].classList.add('active');
},2000)
