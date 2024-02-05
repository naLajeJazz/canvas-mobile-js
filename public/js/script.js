
import Obj, {canvas} from './obj.js'
import {ctx} from './obj.js'
import { mouseImg } from './img.js';
import { mouse,touche } from './controller.js';


var cvs = document.getElementById("Canvas");
var cvs2 = document.getElementById("Canvas2");

canvas.width=cvs.width;
canvas.height=cvs.height+360;
cvs.style.background="black"
cvs2.style.background="black"

/*
canvas.style.backgroundColor="black";
*/
//////GAME////
  let teste=new Obj(canvas.width/2,canvas.height/2,32,32),
  debug=new Obj()
function game (){
requestAnimationFrame(game,canvas);
ctx.clearRect(0,0,canvas.width,canvas.height);

          teste.DrawRect("blue")
          teste.Sprite(mouseImg,teste.w,teste.h) 
          if (teste.x<=canvas.width-12){
            teste.x+=0
          }
          

          debug.hudMsg(canvas.width/2,canvas.height/2,"white","19px DePixel",`
          ${mouse.x}
           ${mouse.y}
           ${touche.x}
            ${touche.y}`    )         /////GAME UPDATE//////



}
game();
export{

  
  
}