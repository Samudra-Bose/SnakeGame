let board=document.querySelector(".board");
const width=  30;
const height= 30;
 let cols=Math.floor(board.clientWidth/width);
 let rows=Math.floor(board.clientHeight/height);
 for(let i=0;i<cols;i++){
     for(let j=0;j<rows;j++){
const block=document.createElement("div");
block.classList.add("bl");
board.appendChild(block);
     }
 }