

import Obj from './obj.js'
import {canvas} from './obj.js'




let mouse=new Obj(0,0,64,64);
let touche=new Obj(0,0,64,64);

 
    
    ////controles////

////teclado

window.addEventListener("keyup",()=>{
            
  
                  
},false);

window.addEventListener("keydown",function(event){

  let k= event.key;
             
   if (k=="t"){
  debugMode=true           
  }else if (k=="y"){
  debugMode=false           
  }else if (k=="p"){
    window.print()      
    }else if (k=="2"){
      hudControl[0]=false
     rooms[0]="navigationRoom"     
      }else if (k=="1"){
        hudControl[0]=true
        rooms[0]="cockPitRoom"     
         }else if (k=="3"){
          hudControl[0]=true
          rooms[0]="oRoom"     
           }
 
  },false);


///mouse
  
canvas.addEventListener('mousemove',function(e){
  mouse.x=e.offsetX;
  mouse.y=e.offsetY;

  
},false);
canvas.addEventListener('ontouchmove',function(e){
                  touche.x=e.clientX;
                  touche.y=e.clientY;
                
                  
                },false);



canvas.addEventListener('mousedown',function(){
  
 
 
},false);
/*
canvas.addEventListener('click',function(){
  click[0]=true
setTimeout(() => {
click[0]=false
}, 12);
 
 
},false);
*/                
/*
canvas.addEventListener('mouseup',function(){
  click[0]=false
  //pointActive=false
  testi=false
  
},false);
*/
canvas.addEventListener('mouseover',function(){
  ////
  
},false);
canvas.addEventListener('mousedown',function(){
 
 },false);
          
canvas.addEventListener('mouseup',function(){
 
  },false);

/*
const MousePointer=()=>{
  if (click[0]){
    mouse.SpriteAnime(mouseImg,0,yIndex+64,mouse.w,mouse.h)
    }else{
    mouse.SpriteAnime(mouseImg,0,yIndex,mouse.w,mouse.h)}
    //
}
*/


export{  
mouse,
touche
}