class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);// calling the parent's constructor
    this.image = loadImage("sprites/enemy.png");
  }

};