let btn=document.querySelector('.btn');
let body=document.querySelector('.bulb-body');
let audio=document.querySelector('#audio');
btn.onclick=function(){
    body.classList.toggle('on');
    document.getElementById("card").style.visibility = "visible";
    audio.play();
}

