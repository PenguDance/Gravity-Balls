function buttons() {
  stroke(20);
  menuButton = createImg("Assets/tandhjul.png");
  menuButton.position(20, 20);
  menuButton.size(50, 50);
  menuButton.mousePressed(mainMenu);

  for (let i = 0; i < 4; i++) {
    // Creates extra planet buttons and their upgrades
    if (i < 3) {
      mainMenuButtons[i] = createButton();
      mainMenuButtons[i].position(25 + (width / 3) * i, 100);
      mainMenuButtons[i].size(width / 3 - 50, 75);
      mainMenuButtons[i].style("border-width", "5px");
      mainMenuButtons[i].style("font-size", "30px");
      mainMenuButtons[i].hide();
      mainMenuButtons[i].mousePressed(function () {
        menuButtons(i);
      });

      cookieButtons[i] = createButton();
      cookieButtons[i].position(width / 2 - 350 + 250 * i, 200);
      cookieButtons[i].size(200, 300);
      cookieButtons[i].style("background-color", color(255, 248, 220));
      cookieButtons[i].style("border-width", "5px");
      cookieButtons[i].style("font-size", "30px");
      cookieButtons[i].hide();
      cookieButtons[i].mousePressed(function () {
        cookieFunctions(i);
      });
    }

    morePlanetButtons[i] = createButton();
    morePlanetButtons[i].position(25 + (width / 4) * i, 200);
    morePlanetButtons[i].size(width / 4 - 50, 60);
    morePlanetButtons[i].cost = 25 + 25 * i ** (i + 1);
    morePlanetButtons[i].hide();
    morePlanetButtons[i].style("background-color", color(255, 248, 220));
    morePlanetButtons[i].style("border-width", "5px");
    morePlanetButtons[i].style("font-size", "20px");
    morePlanetButtons[i].mousePressed(function () {
      morePlanetsMoneyCheck(i);
    });

    speedUpgrades[i] = createButton();
    speedUpgrades[i].cost = 25 + 25 * i ** (i + 1);
    speedUpgrades[i].size(width / 4 - 100, 50);
    speedUpgrades[i].position(
      morePlanetButtons[i].x +
        morePlanetButtons[i].width / 2 -
        speedUpgrades[i].width / 2,
      285
    );
    speedUpgrades[i].hide();
    speedUpgrades[i].style("background-color", color(255, 248, 220));
    speedUpgrades[i].style("border-width", "5px");
    speedUpgrades[i].style("font-size", "15px");
    speedUpgrades[i].name = "Faster";
    speedUpgrades[i].mousePressed(function () {
      moreSpeedMoneyCheck(i);
    });

    valueUpgrades[i] = createButton();
    valueUpgrades[i].cost = 500 + 125 * i;
    valueUpgrades[i].size(width / 4 - 100, 50);
    valueUpgrades[i].position(
      morePlanetButtons[i].x +
        morePlanetButtons[i].width / 2 -
        speedUpgrades[i].width / 2,
      335
    );
    valueUpgrades[i].style("background-color", color(255, 248, 220));
    valueUpgrades[i].name = "More Value";
    valueUpgrades[i].style("border-width", "5px");
    valueUpgrades[i].style("font-size", "15px");
    valueUpgrades[i].mousePressed(function () {
      moreValueMoneyCheck(i);
    });
    valueUpgrades[i].hide();
    if (i == 0) {
      morePlanetButtons[i].type = "Earth";
      morePlanetButtons[i].upgradeCost = 3;
      mainMenuButtons[i].html("Balls");
      cookieButtons[i].html("Load Cookies");
    } else if (i == 1) {
      morePlanetButtons[i].type = "Bomb";
      morePlanetButtons[i].upgradeCost = 4;
      mainMenuButtons[i].html("Prestige");
      cookieButtons[i].html("Set Cookies");
    } else if (i == 2) {
      morePlanetButtons[i].type = "Splitter";
      morePlanetButtons[i].upgradeCost = 4;
      mainMenuButtons[i].html("Cookies");
      cookieButtons[i].html("Clear Cookies");
    } else if (i == 3) {
      morePlanetButtons[i].type = "Spike";
      morePlanetButtons[i].upgradeCost = 10;
      speedUpgrades[i].name = "More lives";
      valueUpgrades[i].name = "More spike Damage";
    }
    morePlanetButtons[i].html(
      morePlanetButtons[i].type + " ($" + morePlanetButtons[i].cost + ")"
    );
    speedUpgrades[i].html(
      speedUpgrades[i].name + " ($" + speedUpgrades[i].cost + ")"
    );
    valueUpgrades[i].html(
      valueUpgrades[i].name + " ($" + valueUpgrades[i].cost + ")"
    );
  }

  upgradeDmg = createButton();
  upgradeDmg.mousePressed(moreDMG);
  upgradeDmg.cost = 2;
  upgradeDmg.html("More Damage" + "(" + "\u20BD" + upgradeDmg.cost + ")");
  upgradeDmg.position(width / 2 - 350, 375);
  upgradeDmg.style("border-width", "5px");
  upgradeDmg.size(200, 100);
  upgradeDmg.hide();
  upgradeDmg.style("background-color", color(255, 248, 220));
  upgradeDmg.style("font-size", "20px");

  upgradeDmgM = createButton();
  upgradeDmgM.mousePressed(dmgMultiplier);
  upgradeDmgM.cost = 2;
  upgradeDmgM.html(
    "Higher damage multiplier (" + "\u20BD" + upgradeDmgM.cost + ")"
  );
  upgradeDmgM.position(width / 2 - 100, 375);
  upgradeDmgM.style("border-width", "5px");
  upgradeDmgM.size(200, 100);
  upgradeDmgM.hide();
  upgradeDmgM.style("background-color", color(255, 248, 220));
  upgradeDmgM.style("font-size", "20px");

  upgradeIncome = createButton();
  upgradeIncome.mousePressed(incomeMultiplier);
  upgradeIncome.cost = 2;
  upgradeIncome.html(
    "Higher income multiplier (" + "\u20BD" + upgradeIncome.cost + ")"
  );
  upgradeIncome.position(width / 2 + 150, 375);
  upgradeIncome.style("border-width", "5px");
  upgradeIncome.size(200, 100);
  upgradeIncome.hide();
  upgradeIncome.style("background-color", color(255, 248, 220));
  upgradeIncome.style("font-size", "20px");

  resetProgress = createButton();
  resetProgress.mousePressed(prestige);
  resetProgress.html(
    "Reset progress for " + pPointsAvailable + " prestige points"
  );
  resetProgress.position(75, 200);
  resetProgress.style("border-width", "5px");
  resetProgress.size(width - 150, 100);
  resetProgress.hide();
  resetProgress.style("background-color", color(100, 150, 150));
  resetProgress.style("font-size", "40px");
}
function hideButtons() {
  upgradeDmg.hide();
  upgradeDmgM.hide();
  upgradeIncome.hide();
  for (let i = 0; i < morePlanetButtons.length; i++) {
    morePlanetButtons[i].hide();
    speedUpgrades[i].hide();
    valueUpgrades[i].hide();
    resetProgress.hide();
    if (i < cookieButtons.length) {
      cookieButtons[i].hide();
    }
    if (i < mainMenuButtons.length) {
      mainMenuButtons[i].style("background-color", color(207, 196, 155));
    }
  }
}

function showButtons(menuNumber) {
  hideButtons();
  for (let i = 0; i < morePlanetButtons.length; i++) {
    if (menuNumber == 0) {
      speedUpgrades[i].show();
      morePlanetButtons[i].show();
      valueUpgrades[i].show();
    } else if (menuNumber == 1) {
      if (i < 1) {
        upgradeDmg.show();
        upgradeDmgM.show();
        upgradeIncome.show();
        resetProgress.show();
      } else {
        break;
      }
    } else if (menuNumber == 2) {
      if (i < cookieButtons.length) {
        cookieButtons[i].show();
      } else {
        break;
      }
    }
  }
  mainMenuButtons[menuNumber].style("background-color", color(102, 102, 102));
}

function menuButtons(i) {
  if (menu != i) {
    menu = i;
    showButtons(i);
  }
}
