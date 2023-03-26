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
      mainMenuButtons[i].position(100 + 100 * i, 100);
      mainMenuButtons[i].size(100, 50);
      mainMenuButtons[i].style("background-color", color(255, 248, 220));
      mainMenuButtons[i].style("border-width", "5px");
      mainMenuButtons[i].hide();
      mainMenuButtons[i].mousePressed(function () {
        menuButtons(i);
      });

      cookieButtons[i] = createButton();
      cookieButtons[i].position(100 + 100 * i, 200);
      cookieButtons[i].size(100, 50);
      cookieButtons[i].style("background-color", color(255, 248, 220));
      cookieButtons[i].style("border-width", "5px");
      cookieButtons[i].hide();
      cookieButtons[i].mousePressed(function () {
        cookieFunctions(i);
      });

      if (i == 0) {
        mainMenuButtons[i].html("Balls");
        cookieButtons[i].html("Load Cookies");
      } else if (i == 1) {
        mainMenuButtons[i].html("Upgrades");
        cookieButtons[i].html("Set Cookies");
      } else if (i == 2) {
        mainMenuButtons[i].html("Cookies");
        cookieButtons[i].html("Clear Cookies");
      }
    }

    morePlanetButtons[i] = createButton();
    morePlanetButtons[i].position(100 + 125 * i, 175);
    morePlanetButtons[i].size(100, 50);
    morePlanetButtons[i].cost = 25 + 25 * i ** (i + 1);
    morePlanetButtons[i].hide();
    morePlanetButtons[i].style("background-color", color(255, 248, 220));
    morePlanetButtons[i].style("border-width", "5px");
    morePlanetButtons[i].mousePressed(function () {
      morePlanetsMoneyCheck(i);
    });

    speedUpgrades[i] = createButton();
    speedUpgrades[i].position(100 + 125 * i, 250);
    speedUpgrades[i].cost = 25 + 25 * i ** (i + 1);
    speedUpgrades[i].size(100, 50);
    speedUpgrades[i].hide();
    speedUpgrades[i].style("background-color", color(255, 248, 220));
    speedUpgrades[i].style("border-width", "5px");
    speedUpgrades[i].html("Faster ($" + speedUpgrades[i].cost + ")");
    speedUpgrades[i].mousePressed(function () {
      moreSpeedMoneyCheck(i);
    });

    valueUpgrades[i] = createButton();
    valueUpgrades[i].cost = 500 + 125 * i;
    valueUpgrades[i].html("More Value ($" + valueUpgrades[i].cost + ")");
    valueUpgrades[i].position(100 + 125 * i, 300);
    valueUpgrades[i].size(100, 50);
    valueUpgrades[i].style("background-color", color(255, 248, 220));
    valueUpgrades[i].style("border-width", "5px");
    valueUpgrades[i].mousePressed(function () {
      moreValueMoneyCheck(i);
    });
    valueUpgrades[i].hide();
    if (i == 0) {
      morePlanetButtons[i].type = "Earth";
      morePlanetButtons[i].upgradeCost = 3;
    } else if (i == 1) {
      morePlanetButtons[i].type = "Bomb";
      morePlanetButtons[i].upgradeCost = 4;
    } else if (i == 2) {
      morePlanetButtons[i].type = "Splitter";
      morePlanetButtons[i].upgradeCost = 4;
    } else if (i == 3) {
      morePlanetButtons[i].type = "Spike";
      morePlanetButtons[i].upgradeCost = 10;
      speedUpgrades[i].html("More lives ($" + speedUpgrades[i].cost + ")");
      valueUpgrades[i].html(
        "More spike Damage ($" + valueUpgrades[i].cost + ")"
      );
    }
    morePlanetButtons[i].html(
      morePlanetButtons[i].type + " ($" + morePlanetButtons[i].cost + ")"
    );
  }

  upgradeDmg = createButton();
  upgradeDmg.mousePressed(moreDMG);
  upgradeDmg.cost = 100;
  upgradeDmg.html("More Damage" + " ($" + upgradeDmg.cost + ")");
  upgradeDmg.position(100, 375);
  upgradeDmg.style("border-width", "5px");
  upgradeDmg.size(100, 50);
  upgradeDmg.hide();
  upgradeDmg.style("background-color", color(255, 248, 220));
}

function hideButtons() {
  upgradeDmg.hide();
  for (let i = 0; i < morePlanetButtons.length; i++) {
    morePlanetButtons[i].hide();
    speedUpgrades[i].hide();
    valueUpgrades[i].hide();
    if (i < cookieButtons.length) {
      cookieButtons[i].hide();
    }
    if (i < mainMenuButtons.length) {
      mainMenuButtons[i].style("background-color", color(255, 248, 220));
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
