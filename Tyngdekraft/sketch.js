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
  value = [1, 2, 3],
  Elives = 1,
  gracePeriod = 30,
  u = 0,
  Dmg = 1,
  income = 1,
  mass = 10,
  pPoints = 0,
  pPointsAvailable = 0,
  bSpawns = 0,
  boss = [];
let dia = 30;
(vel = [0.2, 0.2, 0.2]), (SPlives = 1);
(acc = 600),
  (upgrades = []),
  (balls = []),
  (ballUpgrades = []),
  (cookieButtons = []),
  (bU = 0),
  (menu = 0),
  (mainMenuButtons = []),
  (speedUpgrades = []),
  (morePlanetButtons = []),
  (valueUpgrades = []),
  (nSU = [0, 0, 0]),
  (nVU = [0, 0, 0]),
  (nP = [1, 0, 0]);
let ExRad = 200,
  ExDmg = 2,
  ExIMG,
  ExVisual = 60,
  ExSize = ExRad * 2,
  Blives = 3;
let splitballs = [],
  Slives = 5,
  SPDmg = 1,
  SBounce = 0;
SPCount = 1;
let playing = true,
  test;
let BGM,
  pointSound,
  NEMT = -61, // NEMT = not enough money time
  NEMTTime = 50;
function preload() {
  BGM = createAudio("Assets/BGM2.mp3");
  pointSound = createAudio("Assets/point.wav");
  test = loadImage("Assets/explosion.png");
}
function setup() {
  frameRate(60);
  createCanvas((windowWidth * 8) / 10, (windowHeight * 8) / 10);

  mouseX = width / 2;
  mouseY = height / 2;
  noStroke();
  for (let i = 0; i < nE; i++) {
    createBalls(i, "Earth");
  }
  for (let i = 0; i < nB; i++) {
    createBalls(i, "Bomb");
  }
  for (let i = 0; i < nS; i++) {
    createBalls(i, "Splitter");
  }
  playing = true;
  buttons();
  mainMenu();
  ExIMG = createImg("Assets/explosion.png");
  ExIMG.size(ExRad * 2, ExRad * 2);
  ExIMG.hide();
  if (getItem("Earths") != null) {
    //getCookie();
  }
}

function draw() {
  if (frameCount % 10 == 0) {
    setCookie();
  }
  background(224, 218, 193);
  if (playing) {
    background(220);
    for (let i = 0; i < n; i++) {
      if (boss[bSpawns] == null) {
        balls[i].update(mouseX, mouseY, i, dia);
      } else {
        balls[i].update(boss[bSpawns].x, boss[bSpawns].y, i, boss[bSpawns].dia);
      }
      if (balls[i].hit && balls[i].dmg >= balls[i].lives) {
        score += balls[i].value;
        if (score >= 50 * 2 ** (bSpawns + 1) && boss[bSpawns] == null) {
          boss[bSpawns] = new Boss();
          print("Boss spawn");
        }
        if (boss[bSpawns] != null) {
          boss[bSpawns].dmg += Dmg;
          if (boss[bSpawns].dmg >= boss[bSpawns].lives) {
            boss[bSpawns].img.hide();
            boss[bSpawns].alive = false;
            bSpawns++;
            pPointsAvailable++;
            resetProgress.html(
              "Reset progress for " + pPointsAvailable + " prestige points"
            );
            setCookie();
          }
        }
        money += balls[i].value;
        if (balls[i].type === "Bomb") {
          explosion(i);
        } else if (balls[i].type === "Splitter") {
          for (let sn = 0; sn < SPCount; sn++) {
            splitballs[splitballs.length] = new SplitBalls(i);
          }
        }
        balls[i].img.remove();
        pointSound.volume(0.1);
        pointSound.play();
        createBalls(i, balls[i].type);
      }
    }
    if (boss[bSpawns] != null && boss[bSpawns].alive == true) {
      boss[bSpawns].update(mouseX, mouseY);
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
            balls[I].dmg = SPDmg;
            balls[I].hit = true;
            break;
          }
        }
      }
    }
    if (boss[bSpawns] != null) {
      fill(100, 0, 100);
      rect(width / 6, 100, (2 * width) / 3, 40);
      fill(170, 0, 170);
      rect(
        width / 6,
        100,
        ((((boss[bSpawns].lives - boss[bSpawns].dmg) / boss[bSpawns].lives) *
          1) /
          3) *
          2 *
          width,
        40
      );
    }
  }
  noFill();
  circle(mouseX, mouseY, dia);
  fill(0);
  textAlign(CENTER);
  textSize(20);
  text(
    "points = " +
      score +
      "        " +
      "money = $" +
      money +
      "        " +
      "prestige = " +
      pPoints,
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
  if (NEMT + NEMTTime >= frameCount) {
    textAlign(CENTER);
    textSize(100);
    text("Not enough money", width / 2, height / 2 + 200);
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
    balls[i].value = value[0];
    balls[i].lives = Elives;
    balls[i].type = type;
  } else if (type === "Bomb") {
    balls[i] = new Planet("bomb");
    balls[i].value = value[1];
    balls[i].lives = Blives;
    balls[i].type = type;
  } else if (type === "Splitter") {
    balls[i] = new Planet("splitter");
    balls[i].value = value[2];
    balls[i].lives = Slives;
    balls[i].type = type;
  }
}

function angle(i, type) {
  if (type === "Boss") {
    if (boss[i].dx > 0 && boss[i].dy < 0) {
      boss[i].A = -asin(boss[i].dy / boss[i].dist);
    } else if (boss[i].dx > 0 && boss[i].dy > 0) {
      boss[i].A = 2 * PI - asin(boss[i].dy / boss[i].dist);
    } else if (boss[i].dx < 0 && boss[i].dy > 0) {
      boss[i].A = PI + asin(boss[i].dy / boss[i].dist);
    } else if (boss[i].dx < 0 && boss[i].dy < 0) {
      boss[i].A = PI + asin(boss[i].dy / boss[i].dist);
    }
  } else if (balls[i].dx > 0 && balls[i].dy < 0) {
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
    if (balls[t].type === "Bomb") {
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
  constructor(i, lives) {
    this.x = balls[i].x;
    this.y = balls[i].y;
    this.type = "Split";
    this.dia = 25;
    this.img = createImg("Assets/split.png");
    this.img.size(this.dia, this.dia);
    this.img.position(this.x, this.y);
    this.lives = lives;
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
class Boss {
  constructor() {
    this.dia = 250;
    this.x = random(this.dia, width - this.dia);
    this.y = random(this.dia, height - this.dia);
    this.vx = random(0, 2);
    this.vy = random(0, 2);
    this.value = 50 * bSpawns ** 2;
    this.alive = true;
    this.lives = 10 * 3 ** (bSpawns + 1);
    this.dmg = 0;
    this.type = "Boss";
    this.img = createImg("Assets/boss.png");
    this.img.size(this.dia, this.dia);
    this.img.position(this.x - this.dia / 2, this.y - this.dia / 2);
  }
  update(x, y) {
    this.dx = x - this.x;
    this.dy = y - this.y;
    this.dist = sqrt(this.dx ** 2 + this.dy ** 2);
    angle(bSpawns, this.type);
    this.a = (100 * acc) / (this.dist + dia / 2 + this.dia / 2) ** 2;
    this.ax = cos(this.A) * this.a;
    this.ay = -sin(this.A) * this.a;
    this.vx = this.vx + this.ax * 0.03;
    this.vy = this.vy + this.ay * 0.03;
    if (this.dist <= this.dia / 2 + dia / 2) {
      this.vx = -this.vx;
      this.vy = -this.vy;
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
    this.vel = null;
  }
  update(x, y, i, dia) {
    this.dx = x - this.x;
    this.dy = y - this.y;
    this.dist = sqrt(this.dx ** 2 + this.dy ** 2);
    this.A = 0;
    angle(i, this.type);
    if (this.grace + gracePeriod <= frameCount && this.type !== "Split") {
      this.a = (100 * acc) / (this.dist + dia / 2 + this.dia / 2) ** 2;
      this.ax = cos(this.A) * this.a;
      this.ay = -sin(this.A) * this.a;
      if (this.type === "Earth") {
        this.vel = vel[0];
      } else if (this.type === "Bomb") {
        this.vel = vel[1];
      } else if (this.type === "Splitter") {
        this.vel = vel[2];
      }
      this.vx = this.vx + this.ax * this.vel;
      this.vy = this.vy + this.ay * this.vel;
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
