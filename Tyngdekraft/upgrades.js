function moreE() {
  if (money >= upgradeEC.cost) {
    createBalls(n, "Earth");
    balls[n].img.hide();
    n++;
    money -= upgradeEC.cost;
    upgradeEC.cost = round(upgradeEC.cost ** (1 + 3 / upgradeEC.cost));
    upgradeEC.html("Earth" + " ($" + upgradeEC.cost + ")");
  }
}

function moreB() {
  if (money >= upgradeBC.cost) {
    createBalls(n, "Bomb");
    balls[n].img.hide();
    n++;
    money -= upgradeBC.cost;
    upgradeBC.cost = round(upgradeBC.cost ** (1 + 4 / upgradeBC.cost));
    upgradeBC.html("Extra Bomb" + " ($" + upgradeBC.cost + ")");
  }
}

function moreS() {
  if (money >= upgradeSC.cost) {
    createBalls(n, "Splitter");
    balls[n].img.hide();
    n++;
    money -= upgradeSC.cost;
    upgradeSC.cost = round(upgradeSC.cost ** (1 + 4 / upgradeSC.cost));
    upgradeSC.html("Splitter Ball " + "($" + upgradeSC.cost + ")");
  }
}

function moreESMC() {
  if (money >= upgradeESB.cost) {
    upgradeES();
    money -= upgradeESp.cost;
    upgradeESB.cost = round(upgradeESB.cost ** (1 + 3 / upgradeESB.cost));
    upgradeESB.html("Faster" + " ($" + upgradeESB.cost + ")");
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
    moreDamage();
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
