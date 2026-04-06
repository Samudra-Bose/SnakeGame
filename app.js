let board=document.querySelector(".board");
const width=  50;
const height= 50;
 let cols=Math.floor(board.clientWidth/width);
 let rows=Math.floor(board.clientHeight/height);
 for(let i=0;i<rows;i++){
     for(let j=0;j<cols;j++){
    const block=document.createElement("div");
    block.classList.add("bl");
    board.appendChild(block);
    block.innerText=`${i}-${j}`;
     }
 }
 