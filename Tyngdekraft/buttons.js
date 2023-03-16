function buttons() {
    menuButton = createImg('Assets/tandhjul.png')
    menuButton.position(20, 20);
    menuButton.size(50, 50);
    menuButton.mousePressed(mainMenu);

    ballUpgradeButton = createButton()
    ballUpgradeButton.position(100,250)
    ballUpgradeButton.mousePressed(ballUpgradeMenu);
    ballUpgradeButton.html("Upgrade Balls");
    ballUpgradeButton.size(100, 50);
    ballUpgradeButton.style('background-color', color(255, 248, 220));
    ballUpgradeButton.hide();


    upgradeECount = createButton();
    upgradeECount.mousePressed(moreEarths)
    upgradeECount.cost = 25;
    upgradeECount.html("Extra earth" + " ($" + upgradeECount.cost + ")")
    ballUpgrades[u] = upgradeECount; u++;

/*  upgradeBCount = createButton(); // UpgradeBCount = Upgrade Bomb Count
    upgradeBCount.mousePressed(moreBombs);
    upgradeBCount.cost = 100;
    upgradeBCount.html("Bomb ball" + " ($" + upgradeBCount.cost + ")")
    upgrades[u] = upgradeBCount; u++;*/

    upgradeESpeed = createButton();
    upgradeESpeed.mousePressed(moreESpeed)
    upgradeESpeed.cost = 25;
    upgradeESpeed.html("Faster" + " ($" + upgradeESpeed.cost + ")")
    ballUpgrades[u] = upgradeESpeed; u++;

    upgradeEValue = createButton();
    upgradeEValue.mousePressed(moreEValue)
    upgradeEValue.cost = 500;
    upgradeEValue.html("More Value" + " ($" + upgradeEValue.cost + ")")
    ballUpgrades[u] = upgradeEValue; u++;

    upgradeDmg = createButton();
    upgradeDmg.mousePressed(moreDamage)
    upgradeDmg.cost = 100;
    upgradeDmg.html("More Damage" + " ($" + upgradeDmg.cost + ")")
    ballUpgrades[u] = upgradeDmg; u++;

    for (let i = 0; i < ballUpgrades.length; i++) {
        ballUpgrades[i].position((i + 1) * 100, 200);
        ballUpgrades[i].size(100, 50);
        ballUpgrades[i].hide();
        ballUpgrades[i].style('background-color', color(255, 248, 220));
    }
}

function hideButtons() {
    for (let i = 0; i < ballUpgrades.length;i++) {
        ballUpgrades[i].hide();
    }
}