function moreE() {
  if (money >= morePlanetButtons[0].cost) {
    createBalls(n, "Earth");
    balls[n].img.hide();
    n++;
    money -= morePlanetButtons[0].cost;
    morePlanetButtons[0].cost = round(
      morePlanetButtons[0].cost ** (1 + 3 / morePlanetButtons[0].cost)
    );
    morePlanetButtons[0].html(
      "Extra earth" + " ($" + morePlanetButtons[0].cost + ")"
    );
  }
}

function moreB() {
  if (money >= morePlanetButtons[1].cost) {
    createBalls(n, "Bomb");
    balls[n].img.hide();
    n++;
    money -= morePlanetButtons[1].cost;
    morePlanetButtons[1].cost = round(
      morePlanetButtons[1].cost ** (1 + 4 / morePlanetButtons[1].cost)
    );
    morePlanetButtons[1].html(
      "Extra Bomb" + " ($" + morePlanetButtons[1].cost + ")"
    );
  }
}

function moreS() {
  if (money >= morePlanetButtons[2].cost) {
    createBalls(n, "Splitter");
    balls[n].img.hide();
    n++;
    money -= morePlanetButtons[2].cost;
    morePlanetButtons[2].cost = round(
      morePlanetButtons[2].cost ** (1 + 4 / morePlanetButtons[2].cost)
    );
    morePlanetButtons[2].html(
      "Splitter Ball " + "($" + morePlanetButtons[2].cost + ")"
    );
  }
}

function moreSP() {
  if (money >= morePlanetButtons[3].cost) {
    money -= morePlanetButtons[3].cost;
    SPCount++;
    morePlanetButtons[3].cost = round(
      morePlanetButtons[3].cost ** (1 + 10 / morePlanetButtons[3].cost)
    );
    morePlanetButtons[3].html(
      "More spikes" + " ($" + morePlanetButtons[3].cost + ")"
    );
  }
}

function moreESMC() {
  if (money >= speedUpgrades[0].cost) {
    upgradeES();
    money -= speedUpgrades[0].cost;
    speedUpgrades[0].cost = round(
      speedUpgrades[0].cost ** (1 + 3 / speedUpgrades[0].cost)
    );
    speedUpgrades[0].html("Faster" + " ($" + speedUpgrades[0].cost + ")");
  }
}
function upgradeES() {
  Evel = Evel * 1.03;
}

function moreBSMC() {
  if (money >= speedUpgrades[1].cost) {
    upgradeBS();
    money -= speedUpgrades[1].cost;
    speedUpgrades[1].cost = round(
      speedUpgrades[1].cost ** (1 + 3 / speedUpgrades[1].cost)
    );
    speedUpgrades[1].html("Faster" + " ($" + speedUpgrades[1].cost + ")");
  }
}
function upgradeBS() {
  Bvel = Bvel * 1.03;
}

function moreSSMC() {
  if (money >= speedUpgrades[2].cost) {
    upgradeSS();
    money -= speedUpgrades[2].cost;
    speedUpgrades[2].cost = round(
      speedUpgrades[2].cost ** (1 + 3 / speedUpgrades[2].cost)
    );
    speedUpgrades[2].html("Faster" + " ($" + speedUpgrades[2].cost + ")");
  }
}

function upgradeSS() {
  Svel = Svel * 1.03;
}

function moreSPLMC() {
  // More SPike Speed Money Check
  if (money >= speedUpgrades[3].cost) {
    upgradeSPS();
    money -= speedUpgrades[3].cost;
    speedUpgrades[3].cost = round(
      speedUpgrades[3].cost ** (1 + 3 / speedUpgrades[3].cost)
    );
    speedUpgrades[3].html("More Lives" + " ($" + speedUpgrades[3].cost + ")");
  }
}

function upgradeSPL() {
  SPlives++;
}

function moreEVMC() {
  if (money >= upgradeEV.cost) {
    v++;
    money -= upgradeEV.cost;
    upgradeEV.cost = round(upgradeEV.cost ** (1 + 10 / upgradeEV.cost));
    upgradeEV.html("More Value" + " ($" + upgradeEV.cost + ")");
  }
}

function moreDMC() {
  if (money >= upgradeDmg.cost) {
    money -= upgradeDmg.cost;
    upgradeDmg.cost = round(upgradeDmg.cost ** (1 + 10 / upgradeDmg.cost));
    upgradeDmg.html("More Damage" + " ($" + upgradeDmg.cost + ")");
    moreDamage();
  }
}

function moreDamage() {
  Dmg++;
}

function moreSPDmg() {
  if (money >= upgradeSPDmg.cost) {
    money -= upgradeSPDmg.cost;
    SPDmg++;
    upgradeSPDmg.cost = round(
      upgradeSPDmg.cost ** (1 + 10 / upgradeSPDmg.cost)
    );
    upgradeSPDmg.html("More Spikes" + " ($" + upgradeSPDmg.cost + ")");
  }
}
