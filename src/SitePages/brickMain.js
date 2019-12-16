const canv = document.getElementById("brickGame"); // canvas constant
const ctxt = canv.getContext("2d"); // context constant
const background_image = new Image();
//background_image.src = "https://adcsuf.sharepoint.com/:i:/r/sites/Soft-Warehouse/Pictures/brickGameBg.png?csf=1&e=pXUgno";
background_image.src = "bg.png";
canv.style.border = "2px solid red";

ctxt.drawImage(background_image,0,0);

const pHeight = 20;
const pWidth = 130;
const pMarginBottom = 50;

const bRadius = 9; // ball radius

let levelCount = 1;
let lifeCount = 3;
let leftKey = false;
let rightKey = false;

let gameEnd = false;

const paddle = {
    x : canv.width/2 - pWidth/2,
    y : canv.height - pHeight - pMarginBottom,
    width : pWidth,
    height : pHeight,
    dx : 5
}
const ball = {
    x: canv.width/2,
    y: paddle.y - bRadius,
    radius: bRadius,
    speed:8,
    dx:3,
    dy:-3

}



function drawPaddle()
{
    ctxt.lineWidth = 4;
    ctxt.fillStyle = "red";
    ctxt.fillRect(paddle.x,paddle.y,paddle.width,paddle.height);

    ctxt.strokeStyle = "grey";
    ctxt.strokeRect(paddle.x,paddle.y,paddle.width,paddle.height);
}

function drawBall()
{
    ctxt.lineWidth = 2;
    ctxt.beginPath();
    ctxt.arc(ball.x,ball.y,ball.radius,0,Math.PI*2);
    ctxt.fillStyle = "yellow";
    ctxt.fill();
    ctxt.strokeStyle = "green";
    ctxt.stroke();
    ctxt.closePath();
}



document.addEventListener("keydown",function(event){
    if(event.keyCode == 37)
    {
        leftKey = true;
    }
    else if(event.keyCode == 39)
    {
        rightKey = true;
    }
});

document.addEventListener("keyup",function(event){
    if(event.keyCode == 37)
    {
        leftKey = false;
    }
    else if(event.keyCode == 39)
    {
        rightKey = false;
    }

});

function movePaddle()
{
    if(leftKey == true && paddle.x > 0)
    {
        paddle.x -= paddle.dx +3;
    }
    else if(rightKey == true && paddle.x + paddle.width < canv.width)
    {
        paddle.x += paddle.dx +3;
    }
}

function moveBall()
{
    ball.x += ball.dx ;
    ball.y += ball.dy ;


}

function BWColission()
{
    if(ball.x + ball.radius > canv.width || ball.x - ball.radius < 0)
    {
        ball.dx = -ball.dx;
    }
    if(ball.y - ball.radius < 0)
    {
        ball.dy = -ball.dy;
    }
    if(ball.y + ball.radius > canv.height)
    {
        lifeCount = lifeCount - 1;
        resetBall();
    }
}

function resetBall()
{
    ball.x = canv.width/2;
    ball.y = paddle.y - bRadius;
    ball.dx = 3 * (Math.random() * 2 - 1);
    ball.dy = -3;
}

function paddleCollision()
{
    if(ball.x < paddle.x + paddle.width && ball.x > paddle.x 
        && paddle.y < paddle.y + paddle.height && ball.y > paddle.y)
        {
            let cp = ball.x - (paddle.x + paddle.width/2);
            cp = cp / (paddle.width/2);

            let angle = cp * Math.PI/3;







            ball.dx = ball.speed * Math.sin(angle);
            ball.dy = - ball.speed * Math.cos(angle);
        }
}

const brick = {
    row:3,
    column:3,
    width:160,
    height:50,
    offSetL:20,
    offSetTop:20,
    marginTop:20,
    fillColor: "blue",
    strokeColor:"black"
}

let bricks = [];

function createBricks(){
    for(let i = 0; i < brick.row; i++)
    {
        
        bricks[i] = [];
        for(let j = 0; j < brick.column; j++)
        {
            let test = (brick.offSetL + brick.width) + brick.offSetL;
            bricks[i][j] = {
                x: i * (brick.offSetL + brick.width) + brick.offSetL,
                y: j * (brick.offSetTop + brick.height) + brick.offSetTop + brick.marginTop,
                hit : false
              
            }
            
        }
    }
}

createBricks();

function drawBricks()
{ 
    for(let i = 0; i < brick.row; i++)
    {
        for(let j = 0; j < brick.column; j++)
        {
            let b = bricks[i][j];
            if(b.hit == false)
            {
                ctxt.fillStyle = brick.fillColor;
                ctxt.fillRect(b.x,b.y,brick.width,brick.height);

                ctxt.strokeStyle = brick.strokeColor;
                ctxt.strokeRect(b.x,b.y,brick.width,brick.height);
            }
        }
    }
   
}

function brickCollision()
{
    for(let i = 0; i < brick.row; i++)
    {
        for(let j = 0; j < brick.column; j++)
        {
            let b = bricks[i][j];
            if(b.hit == false)
            {
                if(ball.x + ball.radius > b.x && ball.x - ball.radius < b.x+brick.width
                    && ball.y + ball.radius > b.y && ball.y - ball.radius < b.y + brick.height)
                    {
                        ball.dy = -ball.dy;
                        b.hit = true;
                    }
            }

        }
    }
}


function draw()
{
    drawPaddle();
    drawBall();
    drawBricks();
    showLives("Lives:"+ lifeCount,480,680);
}

function showLives(text,x,y){
    ctxt.fillStyle = "yellow";
    ctxt.font = "23px Modak";
    ctxt.fillText(text,x,y);
}
function gameOver(text,x,y){
    ctxt.fillStyle = "red";
    ctxt.font = "50px Modak";
    ctxt.fillText(text,x,y);
}

function nextLevel()
{
    let levelDone = true;
    
    for(let r = 0; r < brick.row; r++)
    {
        for(let c = 0; c < brick.column; c++)
        {
            levelDone = levelDone && bricks[r][c].hit;
        }
    }

    if(levelDone == true)
    {
        if(levelCount == 1)
        {
        resetBall();
        brick.row = 6;
        brick.column= 6;
        brick.width=80;
        brick.height=30;
        brick.offSetL=10;
        brick.offSetTop=10;
        brick.marginTop=20;
        brick.fillColor = "grey";
        brick.strokeColor= "black";
        ball.speed = ball.speed + 2;
        levelCount++;
        createBricks();
        }
        else if(levelCount == 2)
        {
            resetBall();
            brick.row = 10;
            brick.column= 15;
            brick.width=56;
            brick.height=20;
            brick.offSetL=0;
            brick.offSetTop=0;
            brick.marginTop=20;
            brick.fillColor = "white";
            brick.strokeColor= "gray";
            ball.speed = ball.speed + 7;
            levelCount++;
            createBricks();
        }
        else if(levelCount == 3)
        {
            gameEnds = true;
            gameOver("YOU WIN!",150,350);

        }
    }

}


function gameEnds(){
    if(lifeCount <= 0)
    {
        gameEnd = true;
    }
}

function updateGame()
{
movePaddle();
moveBall();
BWColission();
paddleCollision();
brickCollision();
gameEnds();
nextLevel();

 // game over function 
}

function gameLoop()
{
    ctxt.drawImage(background_image,0,0)
    draw();
    updateGame();


    if(gameEnd == false){
        requestAnimationFrame(gameLoop);
    }
    else if(gameEnd == true)
    {
        gameOver("GAME OVER",150,350);
        showLives("Lives:"+ lifeCount,480,680);
    }
}


 gameLoop();    