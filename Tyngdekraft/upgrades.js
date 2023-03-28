function morePlanetsMoneyCheck(i) {
  if (money >= morePlanetButtons[i].cost) {
    money -= morePlanetButtons[i].cost;
    if (i != 3) {
      nP[i]++;
    }
    morePlanets(i);
  }
}
function morePlanets(i) {
  if (i == 3) {
    SPCount++;
  } else {
    createBalls(n, morePlanetButtons[i].type);
    balls[n].img.hide();
    n++;
  }
  morePlanetButtons[i].cost = round(
    morePlanetButtons[i].cost **
      (1 + morePlanetButtons[i].upgradeCost / morePlanetButtons[i].cost)
  );
  morePlanetButtons[i].html(
    morePlanetButtons[i].type + " ($" + morePlanetButtons[i].cost + ")"
  );
}

function moreSpeedMoneyCheck(i) {
  if (money >= speedUpgrades[i].cost) {
    money -= speedUpgrades[i].cost;
    if (i != 3) {
      nSU[i]++;
    }
    moreSpeed(i);
  }
}
function moreSpeed(i) {
  if (i == 3) {
    moreSPLMC();
  } else {
    vel[i] = vel[i] * 1.03;
    speedUpgrades[i].cost = round(
      speedUpgrades[i].cost ** (1 + 3 / speedUpgrades[i].cost)
    );
    speedUpgrades[i].html("Faster ($" + speedUpgrades[i].cost + ")");
  }
}
function moreValueMoneyCheck(i) {
  if (money >= valueUpgrades[i].cost) {
    money -= valueUpgrades[i].cost;
    if (i != 3) {
      nVU[i]++;
    }
    moreValue(i);
  }
}

function moreValue(i) {
  if (i == 3) {
    moreSPDmg();
  } else {
    value[i]++;
    valueUpgrades[i].cost = round(
      valueUpgrades[i].cost ** (1 + 10 / valueUpgrades[i].cost)
    );
    valueUpgrades[i].html("More Value ($" + valueUpgrades[i].cost + ")");
  }
}

function moreDMG() {
  if (money >= upgradeDmg.cost) {
    money -= upgradeDmg.cost;
    upgradeDmg.cost = round(upgradeDmg.cost ** (1 + 10 / upgradeDmg.cost));
    upgradeDmg.html("More Damage" + " ($" + upgradeDmg.cost + ")");
    Dmg++;
  }
}

function dmgMultiplier() {
  if (pPoints >= upgradeDmgM.cost) {
    pPoints -= upgradeDmgM.cost;
    upgradeDmgM.cost = round(upgradeDmgM.cost ** 2);
    dmgM = dmgM ** 1.5;
  }
}

function incomeMultiplier() {
  if (pPoints >= upgradeIncome.cost) {
    pPoints -= upgradeIncome.cost;
    upgradeIncome.cost = round(upgradeIncome.cost ** 2);
    income = income ** 1.2;
  }
}

function moreSPDmg() {
  SPDmg++;
  valueUpgrades[3].cost = round(
    valueUpgrades[3].cost ** (1 + 10 / valueUpgrades[3].cost)
  );
  valueUpgrades[3].html(
    "More Spike Damage" + " ($" + valueUpgrades[3].cost + ")"
  );
}

function moreSPLMC() {
  // More SPike Lives Money Check
  SPlives++;
  speedUpgrades[3].cost = round(
    speedUpgrades[3].cost ** (1 + 3 / speedUpgrades[3].cost)
  );
  speedUpgrades[3].html("More lives" + " ($" + speedUpgrades[3].cost + ")");
}
