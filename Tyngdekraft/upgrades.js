function moreE() {
  if (money >= upgradeECount.cost) {
    createBalls(n, "Earth");
    balls[n].img.hide();
    n++;
    money -= upgradeECount.cost;
    upgradeECount.cost = round(
      upgradeECount.cost ** (1 + 3 / upgradeECount.cost)
    );
    upgradeECount.html("Earth" + " ($" + upgradeECount.cost + ")");
  }
}

function moreB() {
  if (money >= upgradeBCount.cost) {
    createBalls(n, "Bomb");
    balls[n].img.hide();
    n++;
    money -= upgradeBCount.cost;
    upgradeBCount.cost = round(
      upgradeBCount.cost ** (1 + 4 / upgradeBCount.cost)
    );
    upgradeBCount.html("Extra Bomb" + " ($" + upgradeBCount.cost + ")");
  }
}

function moreS() {
  if (money >= upgradeSCount.cost) {
    createBalls(n, "Splitter");
    balls[n].img.hide();
    n++;
    money -= upgradeSCount.cost;
    upgradeSCount.cost = round(
      upgradeSCount.cost ** (1 + 4 / upgradeSCount.cost)
    );
    upgradeSCount.html("Splitter Ball " + "($" + upgradeSCount.cost + ")");
  }
}

function moreESMC() {
  if (money >= upgradeES.cost) {
    upgradeES();
    money -= upgradeESp.cost;
    upgradeES.cost = round(upgradeES.cost ** (1 + 3 / upgradeES.cost));
    upgradeES.html("Faster" + " ($" + upgradeES.cost + ")");
  }
}
function upgradeES() {
  Evel = Evel * 1.03;
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
    moreDamange();
  }
}

function moreDamage() {
  Dmg++;
}

function moreSP() {
  if (money >= upgradeSPC.cost) {
    money -= upgradeSPC.cost;
    upgradeSPC.cost = round(upgradeSPC.cost ** (1 + 10 / upgradeSPC.cost));
    upgradeSPC.html("More Spikes" + " ($" + upgradeSPC.cost + ")");
  }
}
