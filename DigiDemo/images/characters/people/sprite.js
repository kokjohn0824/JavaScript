class Sprite {
  
  get frame(){
    return this.animations[this.currentAnimation][this.currentAnimationFrame];
  }

  setAnimation(key){
    if(this.currentAnimation!==key){
      this.currentAnimation = key;
      this.currentAnimationFrame = 0;
      this.animationFrameProgess = this.animationFrameLimit;
    }
  }

  updateAnimationProgress(){
    //Downtick frame progess
    if(this.animationFrameProgess> 0) return --this.animationFrameProgess;

    //Reset the counter
    this.animationFrameProgess = this.animationFrameLimit;
    this.currentAnimationFrame++

    if(this.frame === undefined){
      this.currentAnimationFrame = 0;
    }
   
  };
  
  
  
  
  constructor(config) {
    // Set up the image
    this.image = new Image();
    this.image.src = config.src;
    this.image.onload = () => {
      this.isLoaded = true;
    };

    //Shadow
    this.shadow = new Image();
    this.useShadow = true;
    if (this.useShadow) {
      this.shadow.src = "images/characters/shadow.png";
    }
    this.shadow.onload = () => {
      this.isShadowLoaded = true;
    };

    //Configre Animation & Initial State
    this.animations = config.animations || 
    {
      "idle-up": [[0, 2]],
      "idle-down": [[0, 0]],
      "idle-left": [[0, 3]],
      "idle-right": [[0, 1]],
      "walk-up": [
        [1, 2],
        [0, 2],
        [3, 2],
        [0, 2],
      ],
      "walk-down": [
        [1, 0],
        [0, 0],
        [3, 0],
        [0, 0],
      ],
      "walk-left": [
        [1, 3],
        [0, 3],
        [3, 3],
        [0, 3],
      ],
      "walk-right": [
        [1, 1],
        [0, 1],
        [3, 1],
        [0, 1],
      ],
    };
    this.currentAnimation = "idle-down" ;//config.currentAnimation || "idle-Down";
    this.currentAnimationFrame = 0;

    this.animationFrameLimit = config.animationFrameLimit||24;
    this.animationFrameProgess = this.animationFrameLimit;


    //Reference the game Object
    this.gameObject = config.gameObject;
  }



  draw(ctx) {
    const x = this.gameObject.x - 8;
    const y = this.gameObject.y - 18;
    this.isShadowLoaded && ctx.drawImage(this.shadow, x, y);


    const[frameX, frameY] =  this.frame; 


    this.isLoaded && ctx.drawImage(this.image, frameX*32, frameY*32, 32, 32, x, y, 32, 32);
    this.updateAnimationProgress();
  }
  
}
