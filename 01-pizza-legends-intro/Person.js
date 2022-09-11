class Person extends GameObject{
    constructor(config){
        super(config);
        this.movingprogressRemaining = 16;

        this.directionUpdate = {
            "up":["y",-1],
            "down":["y",1],
            "left":["x",-1],
            "right":["x",1],
        }
    }

    update(state){
        this.updatePostition();
    }
    
    updatePostition(){
        if (this.movingprogressRemaining >0){
            const [property ,change] = this.directionUpdate[this.direction]
            this[property] += change;
            this.movingprogressRemaining--;
        }
    }
}