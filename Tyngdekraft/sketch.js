let dx,
  dy,
  ax,
  ay,
  A,
  R,
  G,
  B,
  n = 1,
  score = 0,
  money = 100,
  Elives = 1,
  Evalue = 1,
  gracePeriod = 30,
  u = 0,
  Dmg = 1,
  mass = 10;
let dia = 30;
(vel = 0.2),
  (acc = 600),
  (upgrades = []),
  (balls = []),
  (ballUpgrades = []),
  (bU = 0),
  (menu = 0);
let Bvalue = 2,
  ExRad = 200,
  ExDmg = 2,
  ExIMG,
  ExVisual = 60,
  ExSize = ExRad * 2,
  Blives = 3;
let splitballs = [],
  Svalue = 2,
  Slives = 5,
  SDmg = 1,
  SBounce = 0;
let playing = true,
  test;
let BGM, pointSound;
function preload() {
  BGM = createAudio("Assets/BGM2.mp3");
  pointSound = createAudio("Assets/point.wav");
  test = loadImage("assets/explosion.png");
}
function setup() {
  frameRate(60);
  createCanvas((windowWidth * 8) / 10, (windowHeight * 8) / 10);
  mouseX = width / 2;
  mouseY = height / 2;
  noStroke();
  for (let i = 0; i < n; i++) {
    createBalls(i, "Earth");
  }
  buttons();
  mainMenu();
  ExIMG = createImg("Assets/explosion.png");
  ExIMG.size(ExRad * 2, ExRad * 2);
  ExIMG.hide();
  setCookie();
}

function draw() {
  background(255, 248, 220);
  if (playing) {
    background(220);
    for (let i = 0; i < n; i++) {
      balls[i].update(mouseX, mouseY, i);
      if (balls[i].hit && balls[i].dmg >= balls[i].lives) {
        score += balls[i].value;
        money += balls[i].value;
        if (balls[i].type === "Bomb") {
          explosion(i);
        } else if (balls[i].type === "Splitter") {
          splitballs[splitballs.length] = new SplitBalls(i);
        }
        balls[i].img.remove();
        pointSound.volume(0.1);
        pointSound.play();
        createBalls(i, balls[i].type);
      }
    }
    for (let i = 0; i < splitballs.length; i++) {
      if (splitballs[i] == null) {
        continue;
      } else if (
        splitballs[i].x - splitballs[i].dia / 2 <= 0 ||
        splitballs[i].x + splitballs[i].dia / 2 >= width ||
        splitballs[i].y - splitballs[i].dia / 2 <= 0 ||
        splitballs[i].y + splitballs[i].dia / 2 >= height
      ) {
        splitballs[i].img.hide();
        splitballs[i] = null;
      } else {
        splitballs[i].update();
        for (let I = 0; I < n; I++) {
          let distance = sqrt(
            (splitballs[i].x - balls[I].x) ** 2 +
              (splitballs[i].y - balls[I].y) ** 2
          );
          if (distance <= (splitballs[i].dia + balls[I].dia) / 2) {
            splitballs[i].img.hide();
            splitballs[i] = null;
            balls[I].dmg = SDmg;
            balls[I].hit = true;
            break;
          }
        }
      }
    }
  }
  noFill();
  circle(mouseX, mouseY, dia);
  fill(0);
  textAlign(CENTER);
  textSize(20);
  text(
    "points = " + score + "        " + "money = $" + money,
    0,
    0,
    width,
    100
  );
  if (ExIMG.time + ExVisual <= frameCount) {
    ExIMG.hide();
  } else if (ExIMG.time + ExVisual > frameCount) {
    tint(255, 4 * (ExIMG.time + ExVisual - frameCount));
    image(test, ExIMG.x, ExIMG.y, ExSize);
  }
}
function keyPressed() {
  if (keyCode === 27) {
    mainMenu();
  }
}

function createBalls(i, type) {
  if (type === "Earth") {
    balls[i] = new Planet("earth");
    balls[i].value = Evalue;
    balls[i].lives = Elives;
    balls[i].type = type;
  } else if (type === "Bomb") {
    balls[i] = new Planet("bomb");
    balls[i].value = Bvalue;
    balls[i].lives = Blives;
    balls[i].type = type;
  } else if (type === "Splitter") {
    balls[i] = new Planet("splitter");
    balls[i].value = Svalue;
    balls[i].lives = Slives;
    balls[i].type = type;
  }
}

function angle(i) {
  if (balls[i].dx > 0 && balls[i].dy < 0) {
    balls[i].A = -asin(balls[i].dy / balls[i].dist);
  } else if (balls[i].dx > 0 && balls[i].dy > 0) {
    balls[i].A = 2 * PI - asin(balls[i].dy / balls[i].dist);
  } else if (balls[i].dx < 0 && balls[i].dy > 0) {
    balls[i].A = PI + asin(balls[i].dy / balls[i].dist);
  } else if (balls[i].dx < 0 && balls[i].dy < 0) {
    balls[i].A = PI + asin(balls[i].dy / balls[i].dist);
  }
}
function explosion(i) {
  ExIMG.position(balls[i].x - ExRad, balls[i].y - ExRad);
  ExIMG.time = frameCount;
  for (let t = 0; t < balls.length; t++) {
    if (t == i) {
      continue;
    } else {
      if (
        sqrt((balls[t].x - balls[i].x) ** 2 + (balls[t].y - balls[i].y) ** 2) <=
        balls[t].dia / 2 + ExRad
      ) {
        balls[t].dmg += ExDmg;
        balls[t].hit = true;
      }
    }
  }
}

class SplitBalls {
  constructor(i) {
    this.x = balls[i].x;
    this.y = balls[i].y;
    this.type = "Split";
    this.dia = 25;
    this.img = createImg("Assets/split.png");
    this.img.size(this.dia, this.dia);
    this.img.position(this.x, this.y);
    this.lives = 1;
    this.v = sqrt(balls[i].vx ** 2 + balls[i].vy ** 2);
    this.A = random(2 * PI);
    this.vx = this.v * cos(this.A);
    this.vy = this.v * sin(this.A);
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.img.position(this.x, this.y);
  }
}
class Planet {
  constructor(type) {
    this.dia = 50;
    this.x = random(this.dia, width - this.dia);
    this.y = random(this.dia, height - this.dia);
    this.vx = random(0, 5);
    this.vy = random(0, 5);
    this.value = null;
    this.hit = false;
    this.dmg = 0;
    this.lives = null;
    this.grace = -gracePeriod;
    this.type = null;
    this.img = createImg("Assets/" + type + ".png");
    this.img.size(this.dia, this.dia);
    this.img.position(this.x - this.dia / 2, this.y - this.dia / 2);
  }
  update(x, y, i) {
    this.dx = x - this.x;
    this.dy = y - this.y;
    this.dist = sqrt(this.dx ** 2 + this.dy ** 2);
    this.A = 0;
    angle(i);

    if (this.grace + gracePeriod <= frameCount && this.type !== "Split") {
      this.a = (100 * acc) / (this.dist + dia / 2 + this.dia / 2) ** 2;
      this.ax = cos(this.A) * this.a;
      this.ay = -sin(this.A) * this.a;
      this.vx = this.vx + this.ax * vel;
      this.vy = this.vy + this.ay * vel;
      if (this.dist <= this.dia / 2 + dia / 2) {
        this.dmg += Dmg;
        this.hit = true;
        this.grace = frameCount;
        this.vx = -this.vx;
        this.vy = -this.vy;
      }
    }
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
    this.img.position(this.x - this.dia / 2, this.y - this.dia / 2);
    if (this.x - this.dia / 2 <= 0 || this.x + this.dia / 2 >= width) {
      this.vx = -this.vx;
    }
    if (this.y - this.dia / 2 <= 0 || this.y + this.dia / 2 >= height) {
      this.vy = -this.vy;
    }
  }
}
