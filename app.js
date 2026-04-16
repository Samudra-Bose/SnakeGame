let board = document.querySelector(".board");
let startbutton = document.querySelector(".start-btn");
let restartbutton = document.querySelector(".restart-btn");
let startmenu = document.querySelector(".startmenu");
let restartmenu=document.querySelector(".restartmenu");
const width = 25;
const height = 25;
let cols = Math.floor(board.clientWidth / width);
let rows = Math.floor(board.clientHeight / height);
let blocks = [];
snake = [{
    x: 1, y: 8
},];
let food = { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) };
let direction = "right";



// random direction
// setInterval(() => {
//     let r = Math.floor(Math.random() * 10)
//     if (r > 0 && r <= 3) direction = "right";
//     else if (r > 3 && r <= 5) direction = "up";
//     else if (r > 5 && r <= 7) direction = "left";
//     else if (r > 7 && r <= 10) direction = "down";
// }, 0.0010);


for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        const block = document.createElement("div");
        block.classList.add("bl");
        board.appendChild(block);
        // block.innerText=`${i}-${j}`;
        blocks[`${i}-${j}`] = block;
    }
}




function filling() {
    let head = null;
    blocks[`${food.x}-${food.y}`].classList.add("foodcolor");


    if (direction === "left") {
        head = { x: snake[0].x, y: snake[0].y - 1 };
    }
    else if (direction === "right") {
        head = { x: snake[0].x, y: snake[0].y + 1 };
    }
    else if (direction === "up") {
        head = { x: snake[0].x - 1, y: snake[0].y };
    }
    else if (direction === "down") {
        head = { x: snake[0].x + 1, y: snake[0].y };
    }

    
    if (head.x < 0) head.x = rows - 1;
    else if (head.x >= rows) head.x = 0
    else if (head.y < 0) head.y = cols - 1;
    else if (head.y >= cols) head.y = 0

    if (head.x === food.x && head.y === food.y) {
        blocks[`${food.x}-${food.y}`].classList.remove("foodcolor");
        food = { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) };
        blocks[`${food.x}-${food.y}`].classList.add("foodcolor");
        snake.unshift(food);
    }

    snake.forEach(part => {
        blocks[`${part.x}-${part.y}`].classList.remove("snakebody");
    });

    snake.unshift(head);
    snake.pop();
    snake.forEach(part => {
        blocks[`${part.x}-${part.y}`].classList.add("snakebody");
    })
}


window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" && direction!="down") {
        direction = "up";
    }
    else if (e.key === "ArrowDown" && direction!="up") {
        direction = "down";
    }
    else if (e.key === "ArrowRight" && direction!="left") {
        direction = "right";
    }
    else if (e.key === "ArrowLeft" && direction!="right") {
        direction = "left";
    }
});
startbutton.addEventListener("click", (e) => {
    startmenu.style.display = "none";
    restartmenu.style.display="flex";
    let intervalID = setInterval(() => {
        filling();
    }, 200);
})



// Game Over 
restartbutton.addEventListener("click",(e)=>{
    restartmenu.style.display="none";
    let intervalID = setInterval(() => {
        filling();
    }, 200);

})