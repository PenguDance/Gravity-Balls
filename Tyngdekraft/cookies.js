let nE = 1,
  nB = 0,
  nS = 0;
function getCookie() {
  Dmg = getItem("Stats")[0];
  score = getItem("Stats")[1];
  money = getItem("Stats")[2];
  (nE = getItem("Earths")[0]),
    (nB = getItem("Bombs")[0]),
    (nS = getItem("Splitter")[0]);
  n = nE + nB + nS;
  for (let i = 0; i < nE + nB + nS; i++) {
    if (i < nE) {
      createBalls(i, "Earth");
    } else if (i < nE + nB) {
      createBalls(i, "Bomb");
    } else if (i < nE + nB + nS) {
      createBalls(i, "Splitter");
    }
    balls[i].img.hide();
  }
}

function setCookie() {
  (nE = 1), (nB = 0), (nS = 0);
  for (let i = 0; i < n; i++) {
    if (balls[i].type === "Earth") {
      nE++;
    } else if (balls[i].type === "Bomb") {
      nB++;
    } else if (balls[i].type === "Splitter") {
      nS++;
    }
  }
  storeItem("Earths", [nE /*, nESU, nEVU, Elives*/]);
  storeItem("Bombs", [nB /* nBSU, NBVU, Blives, ExDmg, ExRad*/]);
  storeItem("Splitter", [nS /*nSSU, nSVU, Slives, nSpikes, SDmg*/]);
  storeItem("Stats", [Dmg, score, money]);
}

function clearCookies() {
  let allCookies = Object.keys(localStorage);
  for (let i = 0; i < allCookies.length; i++) {
    let cookie = allCookies[i].toString();
    removeItem(cookie);
  }
}
