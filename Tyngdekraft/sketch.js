let dx, dy, ax, ay, A, R, G, B, n = 1, score = 0, money = 0, value = 1, gracePeriod = 30, u = 0;
let dia = 30; v = 0.2, a = 600, upgrades = [], earths = [], bombs = [], balls = [];
let playing = true;
function setup() {
  frameRate(60);
  createCanvas(windowWidth, windowHeight);
  noStroke();
  for (let i = 0; i < n; i++) {
    createBalls(i, "Earth");
  }
  menuButton = createImg('Assets/tandhjul.png')
  menuButton.position(20, 20);
  menuButton.size(50, 50);
  menuButton.mousePressed(pauseUnpause);

  upgradeECount = createButton();
  upgradeECount.mousePressed(moreEarths)
  upgradeECount.cost = 25;
  upgradeECount.html("Extra earth" + " ($" + upgradeECount.cost + ")")
  upgrades[u] = upgradeECount; u++;

  upgradeBCount = createButton(); // UpgradeBCount = Upgrade Bomb Count
  upgradeBCount.mousePressed(moreBombs);
  upgradeBCount.cost = 100;
  upgradeBCount.html("Bomb ball" + " ($" + upgradeBCount.cost + ")")
  upgrades[u] = upgradeBCount; u++;

  upgradeESpeed = createButton();
  upgradeESpeed.mousePressed(moreESpeed)
  upgradeESpeed.cost = 25;
  upgradeESpeed.html("Faster" + " ($" + upgradeESpeed.cost + ")")
  upgrades[u] = upgradeESpeed; u++;

  upgradeEValue = createButton();
  upgradeEValue.mousePressed(moreEValue)
  upgradeEValue.cost = 500;
  upgradeEValue.html("More Value" + " ($" + upgradeEValue.cost + ")")
  upgrades[u] = upgradeEValue; u++;

  upgradeDmg = createButton();
  upgradeDmg.mousePressed(moreDamage)
  upgradeDmg.cost = 100;
  upgradeDmg.html("More Damage" + " ($" + upgradeDmg.cost + ")")
  upgrades[u] = upgradeDmg; u++;

  for (let i = 0; i < upgrades.length; i++) {
    upgrades[i].position((i + 1) * 100, 200);
    upgrades[i].size(100, 50);
    upgrades[i].hide();
    upgrades[i].style('background-color', color(255, 248, 220));
  }
}

function draw() {
  background(255, 248, 220);
  if (playing) {
    background(220);
    for (let i = 0; i < n; i++) {
      balls[i].update(mouseX, mouseY);
      if (balls[i].hit && balls[i].dmg >= balls[i].lives) {
        score += balls[i].value;
        money += balls[i].value;
        balls[i].img.remove();
        createBalls(i, balls[i].type)
      }
    }
  }
  noFill();
  circle(mouseX, mouseY, dia);
  fill(0);
  textAlign(CENTER);
  textSize(20);
  text("points = " + score + "        " + "money = $" + money, 0, 0, width, 100)
}
function keyPressed() {
  if (keyCode === 27) {
    pauseUnpause();
  }
}

function pauseUnpause() {
  if (playing == true) {
    playing = false;
    for (let i = 0; i < n; i++) {
      balls[i].img.hide();
    }
    for (let i = 0; i < upgrades.length; i++) {
      upgrades[i].show();
    }
  } else {
    playing = true;
    for (let i = 0; i < n; i++) {
      balls[i].img.show();
    }
    for (let i = 0; i < upgrades.length; i++) {
      upgrades[i].hide();
    }
  }
}

function moreEarths() {
  if (money >= upgradeECount.cost) {
    createBalls(n, "Earth");
    balls[n].img.hide();
    n++;
    money -= upgradeECount.cost
    upgradeECount.cost = round(upgradeECount.cost ** (1 + (3 / upgradeECount.cost)))
    upgradeECount.html("Extra ball" + " ($" + upgradeECount.cost + ")")
  }
}

function moreBombs() {
  if (money >= upgradeBCount.cost) {
    createBalls(n, "Bomb")
    balls[n].img.hide();
    n++;
    money -= upgradeBCount.cost;
    upgradeBCount.cost = round(upgradeECount.cost ** (1 + (4 / upgradeECount.cost)))
    upgradeECount.html("Extra ball" + " ($" + upgradeECount.cost + ")")
  }
}

function moreESpeed() {
  if (money >= upgradeESpeed.cost) {
    v = v + 0.2
    money -= upgradeESpeed.cost
    upgradeESpeed.cost = round(upgradeESpeed.cost ** (1 + (3 / upgradeESpeed.cost)))
    upgradeESpeed.html("Faster" + " ($" + upgradeESpeed.cost + ")")
  }
}

function moreEValue() {
  if (money >= upgradeEValue.cost) {
    value++
    money -= upgradeEValue.cost
    upgradeEValue.cost = round(upgradeEValue.cost ** (1 + (10 / upgradeEValue.cost)))
    upgradeEValue.html("More Value" + " ($" + upgradeEValue.cost + ")")
  }
}

function moreDamage() {
  if (money >= upgradeDmg.cost) {
    Dmg++
    money -= upgradeDmg.cost
    upgradeDmg.cost = round(upgradeDmg.cost ** (1 + (10 / upgradeDmg.cost)))
    upgradeDmg.html("More Damage" + " ($" + upgradeDmg.cost + ")")
  }
}
function createBalls(i, type) {
  if (type === "Earth") {
    balls[i] = new Earth
  } else if (type === "Bomb") {
    balls[i] = new Bomb;
  }
}

class Earth {
  constructor() {
    this.dia = 50;
    this.x = random(this.dia, width - this.dia);
    this.y = random(this.dia, height - this.dia);
    this.vx = random(0, 5);
    this.vy = random(0, 5);
    this.value = value;
    this.hit = false;
    this.dmg = 0;
    this.lives = 3;
    this.grace = -gracePeriod;
    this.type = "Earth"
    this.img = createImg('Assets/earth.png');
    this.img.size(this.dia, this.dia);
    this.img.position(this.x - (this.dia / 2), this.y - (this.dia / 2));
  }
  update(x, y) {
    dx = x - this.x;
    dy = y - this.y;
    this.dist = sqrt((dx ** 2) + (dy ** 2));
    if (dx > 0 && dy < 0) {
      this.A = -asin(dy / this.dist);
    } else if (dx > 0 && dy > 0) {
      this.A = 2 * PI - asin(dy / this.dist);
    } else if (dx < 0 && dy > 0) {
      this.A = PI + asin(dy / this.dist);
    } else if (dx < 0 && dy < 0) {
      this.A = PI + asin(dy / this.dist);
    }
    if (this.grace + gracePeriod <= frameCount) {
      this.a = (100 * a) / ((this.dist + dia / 2 + this.dia / 2) ** 2);
      this.ax = cos(this.A) * this.a;
      this.ay = -sin(this.A) * this.a;
      this.vx = this.vx + (this.ax * v);
      this.vy = this.vy + (this.ay * v);
      if (this.dist <= this.dia / 2 + dia / 2) {
        this.dmg++;
        this.hit = true;
        this.grace = frameCount;
        this.vx = -this.vx;
        this.vy = -this.vy;
      }
    }
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
    this.img.position(this.x - (this.dia / 2), this.y - (this.dia / 2));
    if (this.x - (this.dia / 2) <= 0 || this.x + (this.dia / 2) >= windowWidth) {
      this.vx = -this.vx;
    }
    if (this.y - (this.dia / 2) <= 0 || this.y + (this.dia / 2) >= windowHeight) {
      this.vy = -this.vy;
    }
  }
}

class Bomb {
  constructor() {
    this.dia = 50;
    this.x = random(this.dia, width - this.dia);
    this.y = random(this.dia, height - this.dia);
    this.vx = random(0, 5);
    this.vy = random(0, 5);
    this.value = value;
    this.hit = false;
    this.dmg = 0;
    this.lives = 3;
    this.grace = -gracePeriod;
    this.type = "Bomb"
    this.img = createImg('Assets/bomb.png');
    this.img.size(this.dia, this.dia);
    this.img.position(this.x - (this.dia / 2), this.y - (this.dia / 2));

  }
  update(x, y) {
    dx = x - this.x;
    dy = y - this.y;
    this.dist = sqrt((dx ** 2) + (dy ** 2));
    if (dx > 0 && dy < 0) {
      this.A = -asin(dy / this.dist);
    } else if (dx > 0 && dy > 0) {
      this.A = 2 * PI - asin(dy / this.dist);
    } else if (dx < 0 && dy > 0) {
      this.A = PI + asin(dy / this.dist);
    } else if (dx < 0 && dy < 0) {
      this.A = PI + asin(dy / this.dist);
    }
    if (this.grace + gracePeriod <= frameCount) {
      this.a = (100 * a) / ((this.dist + dia / 2 + this.dia / 2) ** 2);
      this.ax = cos(this.A) * this.a;
      this.ay = -sin(this.A) * this.a;
      this.vx = this.vx + (this.ax * v);
      this.vy = this.vy + (this.ay * v);
      if (this.dist <= this.dia / 2 + dia / 2) {
        this.dmg++;
        this.hit = true;
        this.grace = frameCount;
        this.vx = -this.vx;
        this.vy = -this.vy;
      }
    }
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
    this.img.position(this.x - (this.dia / 2), this.y - (this.dia / 2));
    if (this.x - (this.dia / 2) <= 0 || this.x + (this.dia / 2) >= windowWidth) {
      this.vx = -this.vx;
    }
    if (this.y - (this.dia / 2) <= 0 || this.y + (this.dia / 2) >= windowHeight) {
      this.vy = -this.vy;
    }
  }
}