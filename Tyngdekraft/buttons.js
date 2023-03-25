function buttons() {
  stroke(20);
  menuButton = createImg("Assets/tandhjul.png");
  menuButton.position(20, 20);
  menuButton.size(50, 50);
  menuButton.mousePressed(mainMenu);

  for (let i = 0; i < 3; i++) {
    mainMenuButtons[i] = createButton();
    mainMenuButtons[i].position(100 + 100 * i, 100);
    mainMenuButtons[i].html("Balls");
    mainMenuButtons[i].size(100, 50);
    mainMenuButtons[i].style("background-color", color(255, 248, 220));
    mainMenuButtons[i].style("border-width", "5px");
    mainMenuButtons[i].style("border-color", color(0, 0, 0));
    mainMenuButtons[i].hide();
    if (i == 0) {
      mainMenuButtons[i].html("Balls");
      mainMenuButtons[i].mousePressed(ballCountMenu);
    } else if (i == 1) {
      mainMenuButtons[i].html("Upgrades");
      mainMenuButtons[i].mousePressed(ballUpgradeMenu);
    } else if (i == 2) {
      mainMenuButtons[i].html("Cookies");
      mainMenuButtons[i].mousePressed(cookieButtonMenu);
    }
  }

  for (let i = 0; i < 4; i++) {
    // Creates extra planet buttons and their upgrades

    // Planets
    morePlanetButtons[i] = createButton();
    morePlanetButtons[i].position(100 + 125 * i, 175);
    morePlanetButtons[i].size(100, 50);
    morePlanetButtons[i].cost = 25 + 25 * i ** (i + 1);
    morePlanetButtons[i].hide();
    morePlanetButtons[i].style("background-color", color(255, 248, 220));
    morePlanetButtons[i].style("border-width", "5px");
    morePlanetButtons[i].menu = 2;

    // Speed upgrades
    speedUpgrades[i] = createButton();
    speedUpgrades[i].position(100 + 125 * i, 250);
    speedUpgrades[i].cost = 25 + 25 * i ** (i + 1);
    speedUpgrades[i].size(100, 50);
    speedUpgrades[i].hide();
    speedUpgrades[i].style("background-color", color(255, 248, 220));
    speedUpgrades[i].style("border-width", "5px");
    speedUpgrades[i].menu = 2;
    speedUpgrades[i].html("Faster ($" + speedUpgrades[i].cost + ")");

    if (i == 0) {
      // Earth
      morePlanetButtons[i].mousePressed(moreE);
      morePlanetButtons[i].html(
        "Extra earth" + " ($" + morePlanetButtons[i].cost + ")"
      );
      speedUpgrades[i].mousePressed(moreESMC);
    } else if (i == 1) {
      // Bomb
      morePlanetButtons[i].mousePressed(moreB);
      morePlanetButtons[i].html(
        "Bomb ball ($" + morePlanetButtons[i].cost + ")"
      );
      speedUpgrades[i].mousePressed(moreBSMC);
    } else if (i == 2) {
      // Splitter
      morePlanetButtons[i].mousePressed(moreS);
      morePlanetButtons[i].html(
        "Splitter ball ($" + morePlanetButtons[i].cost + ")"
      );
      speedUpgrades[i].mousePressed(moreSSMC);
    } else if (i == 3) {
      // Spike
      morePlanetButtons[i].mousePressed(moreSP);
      morePlanetButtons[i].html(
        "More spikes ($" + morePlanetButtons[i].cost + ")"
      );
      speedUpgrades[i].html("More lives ($" + speedUpgrades[i].cost + ")");
    }
  }

  upgradeEV = createButton();
  upgradeEV.mousePressed(moreEVMC);
  upgradeEV.cost = 500;
  upgradeEV.html("More Value" + " ($" + upgradeEV.cost + ")");
  upgradeEV.position(100, 325);
  upgradeEV.menu = 2;
  upgradeEV.style("border-width", "5px");
  ballUpgrades[u] = upgradeEV;
  u++;

  upgradeDmg = createButton();
  upgradeDmg.mousePressed(moreDMC);
  upgradeDmg.cost = 100;
  upgradeDmg.html("More Damage" + " ($" + upgradeDmg.cost + ")");
  upgradeDmg.position(100, 375);
  upgradeDmg.menu = 3;
  upgradeDmg.style("border-width", "5px");
  ballUpgrades[u] = upgradeDmg;
  u++;

  upgradeSPDmg = createButton();
  upgradeSPDmg.mousePressed(moreSPDmg);
  upgradeSPDmg.cost = 150;
  upgradeSPDmg.html("More Spike damage" + " ($" + upgradeSPDmg.cost + ")");
  upgradeSPDmg.position(475, 325);
  upgradeSPDmg.menu = 2;
  upgradeSPDmg.shown = false;
  upgradeSPDmg.style("border-width", "5px");
  ballUpgrades[u] = upgradeSPDmg;
  u++;

  loadCookies = createButton();
  loadCookies.mousePressed(getCookie);
  loadCookies.html("Load cookies");
  loadCookies.position(450, 275);
  loadCookies.menu = 4;
  ballUpgrades[u] = loadCookies;
  u++;

  setCookies = createButton();
  setCookies.mousePressed(setCookie);
  setCookies.html("Set cookies");
  setCookies.position(550, 275);
  setCookies.menu = 4;
  ballUpgrades[u] = setCookies;
  u++;

  clearCookiesButton = createButton();
  clearCookiesButton.mousePressed(clearCookies);
  clearCookiesButton.html("Clear cookies");
  clearCookiesButton.position(650, 275);
  clearCookiesButton.menu = 4;
  ballUpgrades[u] = clearCookiesButton;
  u++;

  for (let i = 0; i < ballUpgrades.length; i++) {
    ballUpgrades[i].size(100, 50);
    ballUpgrades[i].hide();
    ballUpgrades[i].style("background-color", color(255, 248, 220));
  }
}

function hideButtons() {
  for (let i = 0; i < ballUpgrades.length; i++) {
    ballUpgrades[i].hide();
    if (i < mainMenuButtons.length) {
      mainMenuButtons[i].style("background-color", color(255, 248, 220));
    }
  }
  for (let i = 0; i < morePlanetButtons.length; i++) {
    morePlanetButtons[i].hide();
    speedUpgrades[i].hide();
  }
}

function showButtons(menuNumber) {
  hideButtons();

  if (menuNumber == 2) {
    for (let i = 0; i < morePlanetButtons.length; i++) {
      speedUpgrades[i].show();
      morePlanetButtons[i].show();
    }
  }
  for (let i = 0; i < ballUpgrades.length; i++) {
    if (ballUpgrades[i].menu == menuNumber) {
      ballUpgrades[i].show();
    } else {
      continue;
    }
  }
  mainMenuButtons[menuNumber - 2].style(
    "background-color",
    color(102, 102, 102)
  );
}
