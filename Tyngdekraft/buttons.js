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
    morePlanetButtons[i].position(100 + 125 * i, 100);
    morePlanetButtons[i].size(100, 50);
    morePlanetButtons[i].cost = 25 * (i ^ 2);
    morePlanetButtons[i].hide();
    morePlanetButtons[i].style("background-color", color(255, 248, 220));
    morePlanetButtons[i].style("border-width", "5px");
    morePlanetButtons[i].menu = 2;

    // Speed upgrades
    speedUpgrades[i] = createButton();
    speedUpgrades[i].position(100 + 125 * i, 275);
    speedUpgrades[i].cost = 25 * (i ^ 2);
    speedUpgrades[i].size(100, 50);
    speedUpgrades[i].hide();
    speedUpgrades[i].style("background-color", color(255, 248, 220));
    speedUpgrades[i].style("border-width", "5px");
    speedUpgrades[i].menu = 2;
    speedUpgrades[i].html("Faster ($" + speedUpgrades[i].cost + ")");

    if (i == 0) {
      // Earth
      speedUpgrades[i].mousePressed(moreESMC);
    } else if (i == 1) {
      // Bomb
      speedUpgrades[i].mousePressed(moreESMC);
    } else if (i == 2) {
      // Splitter
      speedUpgrades[i].mousePressed(moreESMC);
    } else if (i == 4) {
      // Spike
      speedUpgrades[i].mousePressed(moreESMC);
    }
  }

  upgradeEC = createButton();
  upgradeEC.mousePressed(moreE);
  upgradeEC.cost = 25;
  upgradeEC.html("Earth" + " ($" + upgradeEC.cost + ")");
  upgradeEC.position(100, 200);
  upgradeEC.menu = 2;
  upgradeEC.style("border-width", "5px");
  ballUpgrades[u] = upgradeEC;
  u++;

  upgradeBC = createButton(); // upgradeBC = Upgrade Bomb Count
  upgradeBC.mousePressed(moreB);
  upgradeBC.cost = 100;
  upgradeBC.html("Bomb ball" + " ($" + upgradeBC.cost + ")");
  upgradeBC.position(225, 200);
  upgradeBC.menu = 2;
  upgradeBC.style("border-width", "5px");
  ballUpgrades[u] = upgradeBC;
  u++;

  upgradeSC = createButton();
  upgradeSC.mousePressed(moreS);
  upgradeSC.cost = 100;
  upgradeSC.html("Splitter Ball " + "($" + upgradeSC.cost + ")");
  upgradeSC.position(350, 200);
  upgradeSC.menu = 2;
  upgradeSC.style("border-width", "5px");
  ballUpgrades[u] = upgradeSC;
  u++;

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

  upgradeSPC = createButton();
  upgradeSPC.mousePressed(moreSP);
  upgradeSPC.cost = 150;
  upgradeSPC.html("More Spikes" + " ($" + upgradeSPC.cost + ")");
  upgradeSPC.position(475, 200);
  upgradeSPC.menu = 2;
  upgradeSPC.shown = false;
  upgradeSPC.style("border-width", "5px");
  ballUpgrades[u] = upgradeSPC;
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
    if (i < speedUpgrades.length) {
      speedUpgrades[i].hide();
    }
  }
}

function showButtons(menuNumber) {
  hideButtons();

  if (menuNumber == 2) {
    for (let i = 0; i < speedUpgrades.length; i++) {
      speedUpgrades[i].show();
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
