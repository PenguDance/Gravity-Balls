let dx, dy, ax, ay, A, R, G, B, n = 1, score = 0, money = 0, value = 1;
let dia = 30; v = 0.2, a = 0.4, earths = [];
let playing = true;
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < n; i++) {
    createEarth(i);
  }
  menuButton = createImg('Assets/tandhjul.png')
  menuButton.position(20, 20);
  menuButton.size(50, 50);
  menuButton.mousePressed(pauseUnpause);
  upgradeCount = createButton();
  upgradeCount.mousePressed(moreEarths)
  upgradeCount.position(100, 200)
  upgradeCount.size(100, 50);
  upgradeCount.cost = 25;
  upgradeCount.hide();
  upgradeCount.html("Extra earth" + " ($" + upgradeCount.cost + ")")
  upgradeCount.style('background-color', color(255, 248, 220))

  upgradeSpeed = createButton();
  upgradeSpeed.mousePressed(moreSpeed)
  upgradeSpeed.position(200, 200)
  upgradeSpeed.size(100, 50);
  upgradeSpeed.cost = 25;
  upgradeSpeed.hide();
  upgradeSpeed.html("Faster" + " ($" + upgradeSpeed.cost + ")")
  upgradeSpeed.style('background-color', color(255, 248, 220))

  upgradeValue = createButton();
  upgradeValue.mousePressed(moreValue)
  upgradeValue.position(300, 200)
  upgradeValue.size(100, 50);
  upgradeValue.cost = 500;
  upgradeValue.hide();
  upgradeValue.html("More Value" + " ($" + upgradeValue.cost + ")")
  upgradeValue.style('background-color', color(255, 248, 220))
}

function draw() {
  background(255, 248, 220);
  if (playing) {
    background(220);
    for (let i = 0; i < n; i++) {
      if (earths[i] == null) {
        createEarth(i)
      }
      earths[i].update(mouseX, mouseY);
      if (earths[i].hit) {
        score += earths[i].value;
        money += earths[i].value;
        createEarth(i)
      }
    }
  }
  fill(0);
  circle(mouseX, mouseY, dia);
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
    upgradeCount.show()
    upgradeSpeed.show()
    upgradeValue.show();
  } else {
    playing = true;
    upgradeCount.hide();
    upgradeSpeed.hide()
    upgradeValue.hide();
  }
}

function moreEarths() {
  if (money >= upgradeCount.cost) {
    createEarth(n);
    n++;
    money -= upgradeCount.cost
    upgradeCount.cost = round(upgradeCount.cost ** (1 + (3 / upgradeCount.cost)))
    upgradeCount.html("Extra ball" + " ($" + upgradeCount.cost + ")")
  }
}
function moreSpeed() {
  if (money >= upgradeSpeed.cost) {
    v = v + 0.2
    money -= upgradeSpeed.cost
    upgradeSpeed.cost = round(upgradeSpeed.cost ** (1 + (3 / upgradeSpeed.cost)))
    upgradeSpeed.html("Faster" + " ($" + upgradeSpeed.cost + ")")
  }
}

function moreValue() {
  if (money >= upgradeValue.cost) {
    value++
    money -= upgradeValue.cost
    upgradeValue.cost = round(upgradeValue.cost ** (1 + (10 / upgradeValue.cost)))
    upgradeValue.html("More Value" + " ($" + upgradeSpeed.cost + ")")
  }
}

function createEarth(i) {
  earths[i] = new Earth;
}

class Earth {
  constructor() {
    this.dia = 50;
    this.x = random(this.dia, width - this.dia);
    this.y = random(this.dia, height - this.dia);
    this.vx = random(0, 5);
    this.vy = random(0, 5);
    this.hit = false;
    this.value = value;
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
    } else if (dx < 0 && dy < 0 || dx < 0 && dy > 0) {
      this.A = PI + asin(dy / this.dist);
    } else if (dx > 0 && dy > 0) {
      this.A = 2 * PI - asin(dy / this.dist);
    }
    this.ax = cos(this.A) * a;
    this.ay = -sin(this.A) * a;
    this.vx = this.vx + (this.ax * v);
    this.vy = this.vy + (this.ay * v);
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
    fill(this.R, this.G, this.B);
    circle(this.x, this.y, this.dia);
    this.img.position(this.x - (this.dia / 2), this.y - (this.dia / 2));
    if (this.x - (this.dia / 2) <= 0 || this.x + (this.dia / 2) >= windowWidth) {
      this.vx = -this.vx;
    }
    if (this.y - (this.dia / 2) <= 0 || this.y + (this.dia / 2) >= windowHeight) {
      this.vy = -this.vy;
    }
    if (this.dist <= this.dia / 2 + dia / 2) {
      this.hit = true;
      this.img.remove();
    }
  }
}