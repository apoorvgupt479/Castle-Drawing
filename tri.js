class Tri{
    constructor(x, y, width, height) {
      fill(180);
      triangle(x-width/2,y+height/2,//left coordinates of tri
        x, y-height/2,//upper coordinates of tri
        x+width/2, y+height/2);//right coordinates of tri
        
        //equal to giving triangleMode(CENTER);
    }
  };