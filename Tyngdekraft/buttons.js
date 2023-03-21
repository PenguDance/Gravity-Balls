function buttons() {
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
  ballCountButton.hide();

  ballUpgradeButton = createButton();
  ballUpgradeButton.position(200,100);
  ballUpgradeButton.mousePressed(ballUpgradeMenu);
  ballUpgradeButton.html("Upgrade Balls");
  ballUpgradeButton.size(100,50);
  ballUpgradeButton.style("background-color",color(255,248, 220))
  ballUpgradeButton.hide();

  upgradeECount = createButton();
  upgradeECount.mousePressed(moreEarths);
  upgradeECount.cost = 25;
  upgradeECount.html("Extra earth" + " ($" + upgradeECount.cost + ")");
  upgradeECount.position(100,200)
  upgradeECount.menu = 2
  ballUpgrades[u] = upgradeECount;
  u++;

  upgradeBCount = createButton(); // UpgradeBCount = Upgrade Bomb Count
  upgradeBCount.mousePressed(moreBombs);
  upgradeBCount.cost = 100;
  upgradeBCount.html("Bomb ball" + " ($" + upgradeBCount.cost + ")")
  upgradeBCount.position(225,200)
  upgradeBCount.menu = 2
  ballUpgrades[u] = upgradeBCount;
  u++;

  upgradeSCount = createButton();
  upgradeSCount.mousePressed(moreSplitters);
  upgradeSCount.cost = 100;
  upgradeSCount.html("Splitter Ball "+"($"+upgradeSCount.cost+")")
  upgradeSCount.position(350,200);
  upgradeSCount.menu = 2
  ballUpgrades[u]=upgradeSCount;
  u++;

  upgradeESpeed = createButton();
  upgradeESpeed.mousePressed(moreESpeed);
  upgradeESpeed.cost = 25;
  upgradeESpeed.html("Faster" + " ($" + upgradeESpeed.cost + ")");
  upgradeESpeed.position(100,200)
  upgradeESpeed.menu = 3;
  ballUpgrades[u] = upgradeESpeed;
  u++;

  upgradeEValue = createButton();
  upgradeEValue.mousePressed(moreEValue);
  upgradeEValue.cost = 500;
  upgradeEValue.html("More Value" + " ($" + upgradeEValue.cost + ")");
  upgradeEValue.position(225,200);
  upgradeEValue.menu = 3;
  ballUpgrades[u] = upgradeEValue;
  u++;

  upgradeEDmg = createButton();
  upgradeEDmg.mousePressed(moreEDamage);
  upgradeEDmg.cost = 100;
  upgradeEDmg.html("More Damage" + " ($" + upgradeEDmg.cost + ")");
  upgradeEDmg.position(350,200)
  upgradeEDmg.menu = 3;
  ballUpgrades[u] = upgradeEDmg;
  u++;

  upgradeSPCount = createButton()
  upgradeSPCount.mousePressed(moreSpikeBalls)
  upgradeSPCount.cost = 150;
  upgradeSPCount.html("More Spikes"+" ($"+upgradeSPCount.cost+")");
  upgradeSPCount.position(475,200);
  upgradeSPCount.menu = 3;
  ballUpgrades[u] = upgradeSPCount;
  u++


  for (let i = 0; i < ballUpgrades.length; i++) {
    ballUpgrades[i].size(100, 50);
    ballUpgrades[i].hide();
    ballUpgrades[i].style("background-color", color(255, 248, 220));
  }
  ballText = createDiv("Balls");
  ballText.style("color", "black");
  ballText.style("font-size", "19px");
  ballText.position(150 - textWidth(ballText.html()) / 2, 160);
  ballText.hide();
}

function hideButtons() {
  for (let i = 0; i < ballUpgrades.length; i++) {
    ballUpgrades[i].hide();
  }
  ballCountButton.style("background-color", color(255, 248, 220));
  ballUpgradeButton.style("background-color", color(255, 248, 220));
  ballText.hide();
}

function showButtons(menuNumber) {
  hideButtons();
  for (let i = 0;i<ballUpgrades.length;i++) {
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
