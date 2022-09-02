class Overworld {
    constructor(config) {
      this.element = config.element;
      this.canvas = this.element.querySelector(".game-canvas");
      this.ctx = this.canvas.getContext("2d");
    }
   
    init() {
      const image = new Image();
      image.onload = () => {
        this.ctx.drawImage(image, 0,0,500,275)
      };
      image.src = "images/maps/background.jpg";
   
   
      const x = 20;
      const y = 12;
   
      const hero = new Image();
      hero.onload = () => {
        this.ctx.drawImage(
          hero, 
          94, //left cut 
          84, //top cut,
          16, //width of cut
          16, //height of cut
          x * 16,
          y * 16,
          32,
          32
       )
      }
      hero.src = "images/monsters/digimon.png";
   
   
    }
   
   }