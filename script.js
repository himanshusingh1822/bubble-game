var time = 60;
var sco = 0;
var hitrn = 0;

function make_bubble(){
    var clutter = "";
    for(var i =1;i<=256+23;i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`
}
document.querySelector("#pbtn").innerHTML = clutter;
}

function timer(){
   var timerent = setInterval(function(){
        if(time > 0){
            time--;
            document.querySelector("#timeval").textContent = time;
        }
        else{
            clearInterval(timerent);
            document.querySelector("#pbtn").innerHTML = `<h2>Game over</h2>`;
        }
    },1000);
}

function new_hit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function increase_score(){
    sco += 10;
    document.querySelector("#scoreval").textContent = sco;
}

document.querySelector("#pbtn").addEventListener("click",function(dets){
    var a = Number(dets.target.textContent);
    if(a === hitrn){
        increase_score();
        make_bubble();
        new_hit();
    }
});



make_bubble();
timer();
new_hit();
