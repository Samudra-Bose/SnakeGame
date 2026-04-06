let board=document.querySelector(".board");
const width=  60;
const height= 60;
 let cols=Math.floor(board.clientWidth/width);
 let rows=Math.floor(board.clientHeight/height);
 let blocks=[];
 snake=[{
x:1,y:8
},];
let food={x:Math.floor(Math.random()*rows),y:Math.floor(Math.random()*cols)};
let direction ="right";



for(let i=0;i<rows;i++){
    for(let j=0;j<cols;j++){
        const block=document.createElement("div");
        block.classList.add("bl");
        board.appendChild(block);
        block.innerText=`${i}-${j}`;
        blocks[`${i}-${j}`]=block;
    }
}


function filling(){
    let head=null;
    blocks[`${food.x}-${food.y}`].classList.add("foodcolor");
    
    
    if(direction==="left"){
        head= {x:snake[0].x,y:snake[0].y-1};
    }
    else if(direction==="right"){
        head= {x:snake[0].x,y:snake[0].y+1};
    }
    else if(direction==="up"){
        head= {x:snake[0].x-1,y:snake[0].y};
    }
    else if(direction==="down"){
        head= {x:snake[0].x+1,y:snake[0].y};
    }
    
    
    if(head.x<0 || head.x>rows || head.y<0|| head.y>=cols){
        alert("Game Over");
        // clearInterval(intervalID);
    }
    
    if(head.x===food.x && head.y===food.y){
        blocks[`${food.x}-${food.y}`].classList.remove("foodcolor");
        food={x:Math.floor(Math.random()*rows),y:Math.floor(Math.random()*cols)};
        blocks[`${food.x}-${food.y}`].classList.add("foodcolor");
        snake.unshift(food);
    }
    
    snake.forEach(part=>{
        blocks[`${part.x}-${part.y}`].classList.remove("snakebody");
    });
    
    snake.unshift(head);
    snake.pop();
    snake.forEach(part=>{
        blocks[`${part.x}-${part.y}`].classList.add("snakebody");
    })
}
let intervalID=setInterval(()=>{
    
    filling();
},300);


window.addEventListener("keydown",(e)=>{
    if(e.key==="ArrowUp"){
direction="up";
}
else if(e.key==="ArrowDown"){
    direction="down";
    }
else if(e.key==="ArrowRight"){
    direction="right";
    }
else if(e.key==="ArrowLeft"){
    direction="left";
    }
})
