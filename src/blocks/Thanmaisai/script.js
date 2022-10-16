var canvas;
var canvasContext;
var ballx = 50;
var ballspeedx = 15;
var bally = 10;
var ballspeedy = 4;

var  player1Score = 0;
var  player2Score = 0;
const WINNING_SCORE = 3;

var showWinScreen = false;

var paddle1Y = 250 ;
var paddle2Y = 250 ;
const PADDEL_HIGHT = 100;
const PADDEL_THINKNESS = 10;

function calculateMousePos(evt){
    var rectbg = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = evt.clientX - rectbg.left - root.scrollLeft;
    var mouseY = evt.clientY - rectbg.top - root.scrollTop;
    return{
        x:mouseX,
        y:mouseY
    }
}

function handelmouseClick(evt){
    if(showWinScreen){
        player1Score=0;
        player2Score=0;
        showWinScreen=false;

    }
}
window.onload = function(){
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    // this can be used to set slow motion for the ball 
    var framePerSecond = 30;
    setInterval(callBoth,1000/framePerSecond); // call the function and number of framers per second the function should be called

    canvas.addEventListener('mousedown',handelmouseClick);
    canvas.addEventListener('mousemove',
    function(evt){
        var mousePos = calculateMousePos(evt);
        paddle1Y =mousePos.y-(PADDEL_HIGHT/2);
    })

}

function ballReset(){
    if(player1Score >= WINNING_SCORE || player2Score >= WINNING_SCORE){
        player1Score = 0;
        player2Score = 0;
        showWinScreen = true;
    }
    ballx = canvas.width/2;
    bally = canvas.height/2
    ballspeedx = -ballspeedx ;
}

function callBoth(){
    moveElements();
    drawElements();
}

function drawNet(){
    for(let i=0;i<canvas.height;i+=40){
        canvasContext.fillStyle = 'white';  
        canvasContext.fillRect(canvas.width/2-1,i,2,20);
    }
}

function drawElements(){
    // change to canvas color to black 
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0,0,canvas.width,canvas.height); // x and y at top left are set zero and set the canvas width and height  

    drawNet();
    if(showWinScreen){
        canvasContext.fillStyle = 'white';
        canvasContext.fillText("Click to continue",350,500);

        if(player1Score >= WINNING_SCORE ){
            canvasContext.fillStyle = 'white';
        canvasContext.fillText("Left player Won!!",350,200);
        }else if(player2Score >= WINNING_SCORE){
            canvasContext.fillStyle = 'white';
        canvasContext.fillText("Right player Won!!",350,200);
        }

        return ;
    }

    // left player paddle 
    canvasContext.fillStyle = 'white';  
    canvasContext.fillRect(0,paddle1Y,10,PADDEL_HIGHT);

    // right computer player paddle 
    canvasContext.fillStyle = 'white';  
    canvasContext.fillRect(canvas.width-PADDEL_THINKNESS,paddle2Y,PADDEL_THINKNESS,PADDEL_HIGHT);

    // ball 
    canvasContext.fillStyle = 'red';  
    canvasContext.beginPath();
    // draw a circe using arc ,selcet variable to be shaped, center, radius,angles,radians,
    canvasContext.arc(ballx,bally,10,0, Math.PI*2,true); 
    canvasContext.fill();

    //display score
    canvasContext.fillText(player1Score,100,100);
    canvasContext.fillText(player2Score,canvas.width-100,100);
}

function computerMovement(){
    var paddle2YCenter = paddle2Y+(PADDEL_HIGHT/2);
    if(paddle2YCenter <bally-35){
        paddle2Y += 6;
    }
    else if(paddle2YCenter > bally+35){
        paddle2Y -= 6;
    }
}

function moveElements(){
    if(showWinScreen){
        return ;
    }
    computerMovement();
    ballx += ballspeedx;
    bally += ballspeedy;

    // bounce the ball from left wall 
    if(ballx < 0){
        if(bally > paddle1Y && bally < paddle1Y+PADDEL_HIGHT){
            ballspeedx = -ballspeedx ;
            var deltaY = ballY - (paddle1Y +PADDEL_HIGHT/2);
            ballspeedy = deltaY * 0.35;

        }else{
            player2Score ++; // must before ball reset
            ballReset();
        }
    }

    // bounce the ball from the right wall
    if(ballx > canvas.width){
        if(bally > paddle2Y && bally < paddle2Y+PADDEL_HIGHT){
            ballspeedx = -ballspeedx ;
            var deltaY = ballY - (paddle2Y +PADDEL_HIGHT/2);
            ballspeedy = deltaY * 0.35;

        }else{
            player1Score ++; // must before ball reset
            ballReset();
        }
    }

    // bounce the ball from left wall 
    if(bally < 0){
        ballspeedy = -ballspeedy ;
    }

    // bounce the ball from the right wall
    if(bally > canvas.height){
        ballspeedy = -ballspeedy ;
    }
}
 //     canvasContext.fillStyle = drawColor;
//     canvasContext.fillRect(0,0,canvas.width,canvas.height); 
// }