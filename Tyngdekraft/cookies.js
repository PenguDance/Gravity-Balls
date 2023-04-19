let nE = 1,
  nB = 0,
  nS = 0;

function cookieFunctions(i) {
  if (i == 0) {
    getCookie();
  } else if (i == 1) {
    setCookie();
  } else if (i == 2) {
    clearCookies();
  }
}

function setCookie() {
  storeItem("Earths", [nP[0], nSU[0], nVU[0]]);
  storeItem("Bombs", [nP[1], nSU[1], nVU[1], ExDmg, ExRad]);
  storeItem("Splitter", [nP[2], nSU[2], nVU[2]]);
  storeItem("Spike", [SPCount, SPlives, SPDmg]);
  storeItem("Stats", [Dmg, score, money, income, pPoints, pPointsAvailable]);
}

function clearCookies() {
  nP = [1, 0, 0];
  n = 1;
  balls = [balls[0]];
  nSU = [0, 0, 0];
  nVU = [0, 0, 0];
  storeItem("Earths", [nP[0], 0, 0]);
  storeItem("Bombs", [nP[1], 0, 0, ExDmg, ExRad]);
  storeItem("Splitter", [nP[2], 0, 0]);
  storeItem("Spike", [1, 1, 1]);
  storeItem("Stats", [1, 0, 0, 1, 0, 0]);
  getCookie();
}

function getCookie() {
  (Dmg = getItem("Stats")[0]),
    (score = getItem("Stats")[1]),
    (money = getItem("Stats")[2]),
    (income = getItem("Stats")[3]);
  (ExDmg = getItem("Bombs")[3]), (ExRad = getItem("Bombs")[4]);
  pPointsAvailable = getItem("Stats")[5];
  cookieRestorePlanets();
  cookieRestoreSpeedUpgrade();
  cookieRestoreValueUpgrade();
  print(getItem("Stats"))
}

function cookieRestorePlanets() {
  nP = [getItem("Earths")[0], getItem("Bombs")[0], getItem("Splitter")[0]];
  SPCount = getItem("Spike")[0];
  n = 0;
  for (let i = 0; i < 4; i++) {
    morePlanetButtons[i].cost = 25 + 25 * i ** (i + 1);
    let count;
    if (i == 3) {
      continue;
    } else {
      count = nP[i];
    }
    for (let j = 0; j < count; j++) {
      morePlanets(i);
    }
  }
}

function cookieRestoreSpeedUpgrade() {
  (nSU = [getItem("Earths")[1], getItem("Bombs")[1], getItem("Splitter")[1]]),
    (SPlives = getItem("Spike")[1]);
  for (let i = 0; i < 4; i++) {
    let count;
    if (i == 3) {
      count = SPlives;
    } else {
      count = nSU[i];
    }
    for (let j = 0; j < count; j++) {
      moreSpeed(i);
    }
  }
}

function cookieRestoreValueUpgrade() {
  (nVU = [getItem("Earths")[2], getItem("Bombs")[2], getItem("Splitter")[2]]),
    (SPDmg = getItem("Spike")[2]);
  for (let i = 0; i < 3; i++) {
    let count;
    if (i == 3) {
      count = SPDmg;
    } else {
      count = nVU[i];
    }
    for (let j = 0; j < count; j++) {
      moreValue(i);
    }
  }
}
