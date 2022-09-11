class Person extends GameObject {
  constructor(config) {
    super(config);
    this.movingprogressRemaining = 0;
    this.isPlayerControlled = config.isPlayerControlled || false;
    this.directionUpdate = {
      up: ["y", -1],
      down: ["y", 1],
      left: ["x", -1],
      right: ["x", 1],
    };
    this.direction = "left";
  }

  update(state) {
    this.updatePostition();
    this.updateSprite(state);
    if (
      this.isPlayerControlled &&
      this.movingprogressRemaining === 0 &&
      state.arrow
    ) {
      this.direction = state.arrow;
      this.movingprogressRemaining = 16;
    }
  }

  updatePostition() {
    if (this.movingprogressRemaining > 0) {
      const [property, change] = this.directionUpdate[this.direction];
      this[property] += change;
      this.movingprogressRemaining--;
    }
  }s
  updateSprite(state) {
    if (
      this.isPlayerControlled &&
      this.movingprogressRemaining === 0 &&
      !state.arrow
    ) {
    this.sprite.setAnimation("idle-" + this.direction);
      return;
    }

    if (this.movingprogressRemaining > 0) {
      this.sprite.setAnimation("walk-" + this.direction);
    }
  }
}
