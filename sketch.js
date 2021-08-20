function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
}


function draw(){
  background("black");
  translate(width/2,height/2);
  rotate(-90);

  

  let hr = hour();
  let mn = minute();
  let sc = second();
 

  stroke("#2E382E")
  strokeWeight(7)
  let secondAngel=map(sc,0,60,0,360)
  arc(0,0 ,300,300,0,secondAngel)

  push()
  rotate(secondAngel)
  stroke("#2E382E")
  line(0,0,150,0)
  pop()

  stroke("#50C9CE")
  let minuteAngel=map(mn,0,60,0,360)
  arc(0,0 ,250,250,0,minuteAngel)

  push()
  rotate(minuteAngel)
  stroke("#50C9CE")
  line(0,0,120,0)
  pop()

noFill()
  stroke("#72A1E5")
  let hourAngel=map(hr % 12 ,0,12,0,360)
  arc(0,0 ,200,200,0,hourAngel)

  push()
  rotate(hourAngel)
  stroke("#72A1E5")
  line(0,0,95,0)
  pop()

  stroke("#FCD3DE")
  strokeWeight(9)
  point(0,0);

  push();
rotate(+90)
textSize(20)
push()
strokeWeight(1)
text("12",-13,-105)
text("9",-125,10)
text("3",110,10)
text("6",-10 ,125)
text("majd jaraisy",0,30)
pop()
pop();
}

