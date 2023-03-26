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
  storeItem("Stats", [Dmg, score, money]);
}

function clearCookies() {
  let allCookies = Object.keys(localStorage);
  for (let i = 0; i < allCookies.length; i++) {
    let cookie = allCookies[i].toString();
    removeItem(cookie);
  }
}

function getCookie() {
  (Dmg = getItem("Stats")[0]),
    (score = getItem("Stats")[1]),
    (money = getItem("Stats")[2]);
  (ExDmg = getItem("Bombs")[3]), (ExRad = getItem("Bombs")[4]);

  cookieRestorePlanets();
  cookieRestoreSpeedUpgrade();
  cookieRestoreValueUpgrade();
}

function cookieRestorePlanets() {
  (nP = [getItem("Earths")[0], getItem("Bombs")[0], getItem("Splitter")[0]]),
    (SPCount = getItem("Spike")[0]);
  for (let i = 0; i < 4; i++) {
    let count;
    if (i == 3) {
      count = SPCount;
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
      moreValue();
    }
  }
}
