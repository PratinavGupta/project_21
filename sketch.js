var Bullet1, Bullet2, Bullet3, Bullet4, Bullet5;
var line1, lin2, lin3, line4;
var speed1, weight1, speed2, weight3, speed3, weight3, speed4, weight4, speed5, weight5;
var dam1, dam2, dam3, dam4, dam5;
var thickness1, thickness2, thickness3, thickness4, thickness5;
var wall1, wall2, wall3, wall4, wall5;

function setup() {
  createCanvas(1600, 450);

  Bullet1 = createSprite(100, 30, 20, 20);
  Bullet1.shapeColor = "white";
  Bullet2 = createSprite(100, 120, 20, 20);
  Bullet2.shapeColor = "white";
  Bullet3 = createSprite(100, 205, 20, 20);
  Bullet3.shapeColor = "white";
  Bullet4 = createSprite(100, 285, 20, 20);
  Bullet4.shapeColor = "white";
  Bullet5 = createSprite(100, 370, 20, 20);
  Bullet5.shapeColor = "white";

  line1 = createSprite(600, 75, 1200, 5);
  line1.shapeColor = "white";
  line2 = createSprite(600, 160, 1200, 5);
  line2.shapeColor = "white";
  line3 = createSprite(600, 245, 1200, 5);
  line3.shapeColor = "white";
  line4 = createSprite(600, 330, 1200, 5);
  line4.shapeColor = "white";

  speed1 = random(223, 321);
  weight1 = random(30, 52);
  speed2 = random(223, 321);
  weight2 = random(30, 52);
  speed3 = random(223, 321);
  weight3 = random(30, 52);
  speed4 = random(223, 321);
  weight4 = random(30, 52);
  speed5 = random(223, 321);
  weight5 = random(30, 52);
  thickness1 = random(22, 83);
  thickness2 = random(22, 83);
  thickness3 = random(22, 83);
  thickness5 = random(22, 83);
  thickness4 = random(22, 83);

  wall1 = createSprite(1200, 30, thickness1, 40);
  wall1.shapeColor = "lightblue";
  wall2 = createSprite(1200, 120, thickness2, 40);
  wall2.shapeColor = "lightblue";
  wall3 = createSprite(1200, 205, thickness3, 40);
  wall3.shapeColor = "lightblue";
  wall4 = createSprite(1200, 285, thickness4, 40);
  wall4.shapeColor = "lightblue";
  wall5 = createSprite(1200, 370, thickness5, 40);
  wall5.shapeColor = "lightblue";

  dam1 = 0;
  dam2 = 0;
  dam3 = 0;
  dam4 = 0;
  dam5 = 0;
}

function draw() {
  background(0);

  Bullet1.velocityX = speed1;
  Bullet2.velocityX = speed2;
  Bullet3.velocityX = speed3;
  Bullet4.velocityX = speed4;
  Bullet5.velocityX = speed5;

  if ((wall1.width + Bullet1.width) / 2 > wall1.x - Bullet1.x) {
    Bullet1.velocityX = 0;
    dam1 = 0.5 * speed1 * speed1 * weight1 / (thickness1 * thickness1 * thickness1);
    if (dam1 < 10)
      wall1.shapeColor = "blue";
    if (dam1 > 10)
      wall1.shapeColor = "red";
  }

  if ((wall2.width + Bullet2.width) / 2 > wall2.x - Bullet2.x) {
    Bullet2.velocityX = 0;
    dam2 = 0.5 * speed2 * speed2 * weight2 / (thickness2 * thickness2 * thickness2);
    if (dam2 < 10)
      wall2.shapeColor = "blue";
    if (dam2 > 10)
      wall2.shapeColor = "red";
  }

  if ((wall3.width + Bullet3.width) / 2 > wall3.x - Bullet3.x) {
    Bullet3.velocityX = 0;
    dam3 = 0.5 * speed3 * speed3 * weight3 / (thickness3 * thickness3 * thickness3);
    if (dam3 < 10)
      wall3.shapeColor = "blue";
    if (dam3 > 10)
      wall3.shapeColor = "red";
  }

  if ((wall4.width + Bullet4.width) / 2 > wall4.x - Bullet4.x) {
    Bullet4.velocityX = 0;
    dam4 = 0.5 * speed4 * speed4 * weight4 / (thickness4 * thickness4 * thickness4);
    if (dam4 < 10)
      wall4.shapeColor = "blue";
    if (dam4 > 10)
      wall4.shapeColor = "red";
  }

  if ((wall5.width + Bullet5.width) / 2 > wall5.x - Bullet5.x) {
    Bullet5.velocityX = 0;
    dam5 = 0.5 * speed5 * speed5 * weight5 / (thickness5 * thickness5 * thickness5);
    if (dam5 < 10)
      wall5.shapeColor = "blue";
    if (dam5 > 10)
      wall5.shapeColor = "red";
  }

  drawSprites();
}