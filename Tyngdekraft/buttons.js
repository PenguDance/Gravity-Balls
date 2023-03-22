function buttons() {
  stroke(20);
  menuButton = createImg("Assets/tandhjul.png");
  menuButton.position(20, 20);
  menuButton.size(50, 50);
  menuButton.mousePressed(mainMenu);

  ballCountButton = createButton();
  ballCountButton.position(100, 100);
  ballCountButton.mousePressed(ballCountMenu);
  ballCountButton.html("Balls");
  ballCountButton.size(100, 50);
  ballCountButton.style("background-color", color(255, 248, 220));
  ballCountButton.style("border-width", "5px");
  ballCountButton.style("border-color", color(0, 0, 0));
  ballCountButton.hide();

  ballUpgradeButton = createButton();
  ballUpgradeButton.position(200, 100);
  ballUpgradeButton.mousePressed(ballUpgradeMenu);
  ballUpgradeButton.html("Upgrade Balls");
  ballUpgradeButton.size(100, 50);
  ballUpgradeButton.style("background-color", color(255, 248, 220));
  ballUpgradeButton.style("border-width", "5px");
  ballUpgradeButton.hide();

  cookieButton = createButton();
  cookieButton.position(300, 100);
  cookieButton.mousePressed(cookieButtonMenu);
  cookieButton.html("Cookies");
  cookieButton.size(100, 50);
  cookieButton.style("background-color", color(255, 248, 220));
  cookieButton.style("border-width", "5px"), cookieButton.hide();

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
  upgradeBC.mousePressed(moreE);
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

  upgradeES = createButton();
  upgradeES.mousePressed(moreESMC);
  upgradeES.cost = 25;
  upgradeES.html("Faster" + " ($" + upgradeES.cost + ")");
  upgradeES.position(100, 275);
  upgradeES.menu = 2;
  upgradeES.style("border-width", "5px");
  ballUpgrades[u] = upgradeES;
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
  upgradeDmg.menu = 2;
  upgradeDmg.style("border-width", "5px");
  ballUpgrades[u] = upgradeDmg;
  u++;

  upgradeSPC = createButton();
  upgradeSPC.mousePressed(moreSpikeBalls);
  upgradeSPC.cost = 150;
  upgradeSPC.html("More Spikes" + " ($" + upgradeSPC.cost + ")");
  upgradeSPC.position(350, 275);
  upgradeSPC.menu = 2;
  upgradeSPC.style("border-width", "5px");
  ballUpgrades[u] = upgradeSPC;
  u++;

  loadCookies = createButton();
  loadCookies.mousePressed(getCookie);
  loadCookies.cost = 0;
  loadCookies.html("loadCookies" + " ($" + loadCookies.cost + ")");
  loadCookies.position(450, 275);
  loadCookies.menu = 4;
  ballUpgrades[u] = loadCookies;
  u++;

  setCookies = createButton();
  setCookies.mousePressed(setCookie);
  setCookies.cost = 0;
  setCookies.html("setCookies" + " ($" + setCookies.cost + ")");
  setCookies.position(550, 275);
  setCookies.menu = 4;
  ballUpgrades[u] = setCookies;
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
  }
  ballCountButton.style("background-color", color(255, 248, 220));
  ballUpgradeButton.style("background-color", color(255, 248, 220));
}

function showButtons(menuNumber) {
  hideButtons();
  for (let i = 0; i < ballUpgrades.length; i++) {
    if (ballUpgrades[i].menu == menuNumber) {
      ballUpgrades[i].show();
    } else {
      continue;
    }
  }
  if (menuNumber == 2) {
    ballCountButton.style("background-color", color(102, 102, 102));
  } else if (menuNumber == 3) {
    ballUpgradeButton.style("background-color", color(102, 102, 102));
  }
}
