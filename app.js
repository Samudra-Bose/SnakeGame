let board=document.querySelector(".board");
const width=  60;
const height= 60;
 let cols=Math.floor(board.clientWidth/width);
 let rows=Math.floor(board.clientHeight/height);
 for(let i=0;i<rows;i++){
     for(let j=0;j<cols;j++){
    const block=document.createElement("div");
    block.classList.add("bl");
    board.appendChild(block);
    block.innerText=`${i}-${j}`;
    let blocks;
    blocks[`${i}-${j}`];
     }
 }
 snake=[{
x:1,y:8
},{
x:1,y:9
    },{ 
x:1,y:10
 }];

function filling(){
    snake.forEach(part=>{
        blocks[`${part.x}-${part.y}`].classList.add("snakebody");
    })
}