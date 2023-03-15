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
  money = 0,
  value = 1,
  gracePeriod = 30,
  u = 0,
  Dmg = 1,
  mass = 10;
let dia = 30,
  vel = 0.2,
  acc = 600,
  upgrades = [],
  balls = [],
  ballUpgrades = [],
  bU = 0,
  menu = 0,
  ballText,
  divs = [];
let playing = true;
let BGM, pointSound;
function preload() {
  BGM = createAudio("Assets/BGM2.mp3");
  pointSound = createAudio("Assets/point.wav");
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
        balls[i].img.remove();
        pointSound.volume(0.1);
        pointSound.play();
        createBalls(i, balls[i].type);
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
}
function keyPressed() {
  if (keyCode === 27) {
    mainMenu();
  }
}

function moreEarths() {
  if (money >= upgradeECount.cost) {
    createBalls(n, "Earth");
    balls[n].img.hide();
    n++;
    money -= upgradeECount.cost;
    upgradeECount.cost = round(
      upgradeECount.cost ** (1 + 3 / upgradeECount.cost)
    );
    upgradeECount.html("Extra ball" + " ($" + upgradeECount.cost + ")");
  }
}

function moreBombs() {
  if (money >= upgradeBCount.cost) {
    createBalls(n, "Bomb");
    balls[n].img.hide();
    n++;
    money -= upgradeBCount.cost;
    upgradeBCount.cost = round(
      upgradeECount.cost ** (1 + 4 / upgradeECount.cost)
    );
    upgradeECount.html("Extra ball" + " ($" + upgradeECount.cost + ")");
  }
}

function moreESpeed() {
  if (money >= upgradeESpeed.cost) {
    vel = vel * 1.03;
    money -= upgradeESpeed.cost;
    upgradeESpeed.cost = round(
      upgradeESpeed.cost ** (1 + 3 / upgradeESpeed.cost)
    );
    upgradeESpeed.html("Faster" + " ($" + upgradeESpeed.cost + ")");
  }
}

function moreEValue() {
  if (money >= upgradeEValue.cost) {
    value++;
    money -= upgradeEValue.cost;
    upgradeEValue.cost = round(
      upgradeEValue.cost ** (1 + 10 / upgradeEValue.cost)
    );
    upgradeEValue.html("More Value" + " ($" + upgradeEValue.cost + ")");
  }
}

function moreDamage() {
  if (money >= upgradeDmg.cost) {
    Dmg++;
    money -= upgradeDmg.cost;
    upgradeDmg.cost = round(upgradeDmg.cost ** (1 + 10 / upgradeDmg.cost));
    upgradeDmg.html("More Damage" + " ($" + upgradeDmg.cost + ")");
  }
}
function createBalls(i, type) {
  if (type === "Earth") {
    balls[i] = new Earth();
  } else if (type === "Bomb") {
    balls[i] = new Bomb();
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

class Earth {
  constructor(i) {
    this.dia = 50;
    this.x = random(this.dia, width - this.dia);
    this.y = random(this.dia, height - this.dia);
    this.vx = random(0, 5);
    this.vy = random(0, 5);
    this.value = value;
    this.hit = false;
    this.dmg = 0;
    this.lives = 1;
    this.grace = -gracePeriod;
    this.type = "Earth";
    this.img = createImg("Assets/earth.png");
    this.img.size(this.dia, this.dia);
    this.img.position(this.x - this.dia / 2, this.y - this.dia / 2);
  }
  update(x, y, i) {
    this.dx = x - this.x;
    this.dy = y - this.y;
    this.dist = sqrt(this.dx ** 2 + this.dy ** 2);
    this.A = 0;
    angle(i);

    if (this.grace + gracePeriod <= frameCount) {
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
