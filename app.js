let board=document.querySelector(".board");
const width=  60;
const height= 60;
 let cols=Math.floor(board.clientWidth/width);
 let rows=Math.floor(board.clientHeight/height);
 let blocks=[];
 for(let i=0;i<rows;i++){
     for(let j=0;j<cols;j++){
    const block=document.createElement("div");
    block.classList.add("bl");
    board.appendChild(block);
    block.innerText=`${i}-${j}`;
    blocks[`${i}-${j}`]=block;
     }
 }
 snake=[{
x:1,y:8
},{
x:1,y:9
    },{ 
x:1,y:10
 }];
 let direction ="left";

function filling(){
    snake.forEach(part=>{
        blocks[`${part.x}-${part.y}`].classList.add("snakebody");
    })
}
setInterval(()=>{
    let head=null;
    if(direction==="left"){
        head= {x:snake[0].x,y:snake[0].y-1};
    }
    snake.forEach(part=>{
        blocks[`${part.x}-${part.y}`].classList.add("snakebody");
    });
    filling();
},500);
