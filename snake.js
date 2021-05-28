class Snake{
    constructor(){
        this.snakeXPosition = []
        this.snakeYPosition = []
        this.xdir = 0
        this.ydir = 0
        this.tailCount = 1
        this.x = 20
        this.y = 20
    }
    update(){
        if(!this.gameOver()){
            this.x += this.xdir
            this.y += this.ydir
            if(this.snakeXPosition.length >= this.tailCount){
                this.snakeXPosition.shift();
                this.snakeYPosition.shift();
            }
            this.snakeXPosition.push(this.x);
            this.snakeYPosition.push(this.y);
        }
    }

    eat(x,y){
        if(this.x===x&&this.y===y){
            this.tailCount  ++
            return true
        }
        else{
            return false
        }
    }
    
    gameOver(){
        if(this.x>800||this.x<0||this.y>400||this.y<0){
            background("cyan");
            text("Game Over",100,200);
            return true
        }
        else{
            return false
        }
    }

    display(){
        for (let index = 0; index < this.tailCount; index++) {
            var x = this.snakeXPosition[index];
            var y = this.snakeYPosition[index];
            fill("lime");
            rect(x,y,20,20);
        }
    }
}