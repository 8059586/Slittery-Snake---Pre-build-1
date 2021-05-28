function setup() {
  createCanvas(800,400);
  snake = new Snake()
}

function draw() {
  background("cyan");  
  snake.update();
  snake.display()
}

function keyPressed(){
  if(keyCode===LEFT_ARROW){
    snake.xdir = -10;
    snake.ydir = 0;
  }
  if(keyCode===RIGHT_ARROW){
    snake.xdir = 10;
    snake.ydir = 0;
  }
  if(keyCode===UP_ARROW){
    snake.xdir = 0;
    snake.ydir = -10;
  }
  if(keyCode===DOWN_ARROW){
    snake.xdir = 0;
    snake.ydir = 10;
  }
}