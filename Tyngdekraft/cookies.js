let nE = 1,
  nB = 0,
  nS = 0;
function getCookie() {
  Dmg = getItem("Stats")[0];
  score = getItem("Stats")[1];
  money = getItem("Stats")[2];
  setup();
}

function setCookie() {
  (nE = 0), (nB = 0), (nS = 0);
  for (let i = 0; i < n; i++) {
    if (balls[i].type === "Earth") {
      nE++;
    } else if (balls[i].type === "Bombs") {
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
