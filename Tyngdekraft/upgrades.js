function moreEarths() {
  if (money >= upgradeECount.cost) {
    createBalls(n, "Earth");
    balls[n].img.hide();
    n++;
    money -= upgradeECount.cost;
    upgradeECount.cost = round(
      upgradeECount.cost ** (1 + 3 / upgradeECount.cost)
    );
    upgradeECount.html("Extra ball" + " ($" + upgradeECount.cost + ")");
  }
}

function moreBombs() {
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

function moreSplitters() {
  if (money >= upgradeSCount.cost) {
    createBalls(n,"Splitter");
    balls[n].img.hide();
    n++
    money -= upgradeSCount.cost;
    upgradeSCount.cost = round(upgradeSCount.cost ** (1+4/upgradeSCount.cost));
    upgradeSCount.html("Splitter Ball "+"($"+upgradeSCount.cost+")")
  }
}

function moreESpeed() {
  if (money >= upgradeESpeed.cost) {
    vel = vel * 1.03;
    money -= upgradeESpeed.cost;
    upgradeESpeed.cost = round(
      upgradeESpeed.cost ** (1 + 3 / upgradeESpeed.cost)
    );
    upgradeESpeed.html("Faster" + " ($" + upgradeESpeed.cost + ")");
  }
}

function moreEValue() {
  if (money >= upgradeEValue.cost) {
    value++;
    money -= upgradeEValue.cost;
    upgradeEValue.cost = round(
      upgradeEValue.cost ** (1 + 10 / upgradeEValue.cost)
    );
    upgradeEValue.html("More Value" + " ($" + upgradeEValue.cost + ")");
  }
}

function moreEDamage() {
  if (money >= upgradeEDmg.cost) {
    Dmg++;
    money -= upgradeEDmg.cost;
    upgradeEDmg.cost = round(upgradeEDmg.cost ** (1 + 10 / upgradeEDmg.cost));
    upgradeEDmg.html("More Damage" + " ($" + upgradeEDmg.cost + ")");
  }
}

function moreSpikeBalls() {
    if (money >= upgradeSPCount.cost) {
        money -= upgradeSPCount.cost;
        upgradeSPCount.cost = round(upgradeSPCount.cost ** (1+10/upgradeSPCount.cost));
        upgradeSPCount.html("More Spikes"+" ($"+upgradeSPCount.cost+")");
    }
}