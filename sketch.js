var rect1, rectR1, rectL1, rectR2, rectL2, rectBase;
var tri1, triR1, triL1;

function setup(){
    createCanvas(400,400);
    background("black");
    rect1 = new Rect(200,275,50,150);//centre rect
    tri1 = new Tri(200,150,50,100);//centre tri
    rectR1 = new Rect(275,300,25,100);//right rect
    rectL1 = new Rect(125,300,25,100);//left rect
    triR1 = new Tri(275,230,25,40);//right tri
    triL1 = new Tri(125,230,25,40);//left tri
    rectR2 = new Rect(350,325,20,50);//double right rect
    rectL2 = new Rect(50,325,20,50);//double left rect
    rectBase = new Rect(200,360,350,10);//ground
}
