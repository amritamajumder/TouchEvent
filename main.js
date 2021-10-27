canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var lastX, lastY, CurX, CurY;
var color="black";
var width= 2;
var screen_width= screen.width;
var newwidth= screen.width-100;
var newheight= screen.height-300;

if(width < 992){
    document.getElementById("myCanvas").width= newwidth;
    document.getElementById("myCanvas").height= newheight;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart", mytouchstart);

function mytouchstart(e){
    //aa1 adding a different colour for the pencil
    color=document.getElementById("colour").value;

    //aa2 changing the width of your pencil
    width=document.getElementById("width").value;

    lastX=e.touches[0].clientX-canvas.offestLeft;
    lastY=e.touches[0].clientY-canvas.offsetTop;

}


canvas.addEventListener("touchmove", mytouchmove);
function mytouchmove(e){

    console.log("touchmove");
    CurX=e.touches[0].clientX-canvas.offsetLeft;
    CurY=e.touches[0].cleintY-canvas.offsetTop;


    ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.lineWidth = width;

    console.log("lastx and lasty position of the mouse= ");
    console.log("x = " + lastX + " y = " + lastY);
    ctx.moveTo(lastX, lastY);

    console.log("Current X and Current Y position of the mouse= ");
    console.log("x = " + CurX + " y = " + CurY);
    ctx.lineTo(CurX, CurY);
    ctx.stroke();

    lastX = CurX;
    lastY = CurY;
}

function cleararea(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
}