function prestige() {
  n = 1;
  nSU = [0, 0, 0];
  nVU = [0, 0, 0];
  nP = [1, 0, 0];
  money = 0;
  score = 0;

  if (boss[bSpawns] != null) {
    boss[bSpawns].img.hide();
  }
  for (let i = 0; i < boss.length; i++) {
    boss[i] = null;
  }
  bSpawns = 0;

  for (let i = 0; i < morePlanetButtons.length; i++) {
    morePlanetButtons[i].cost = 25 + 25 * i ** (i + 1);
    morePlanetButtons[i].html(
      morePlanetButtons[i].type + " ($" + morePlanetButtons[i].cost + ")"
    );
    speedUpgrades[i].cost = 25 + 25 * i ** (i + 1);
    valueUpgrades[i].cost = 500 + 125 * i;
    valueUpgrades[i].html(
      valueUpgrades[i].name + " ($" + valueUpgrades[i].cost + ")"
    );
    speedUpgrades[i].html(
      speedUpgrades[i].name + " ($" + speedUpgrades[i].cost + ")"
    );
  }
  pPoints += pPointsAvailable;
  pPointsAvailable = 0;
}
