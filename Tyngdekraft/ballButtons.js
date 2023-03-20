function ballUpgradeMenu() {
  if (menu != 2) {
    menu = 2;
    hideButtons();
    ballText.show();
    ballUpgradeButton.style("background-color", color(102, 102, 102));
    for (let i = 0; i < ballUpgrades.length; i++) {
      ballUpgrades[i].show();
    }
  } else if (menu == 2) {
    hideButtons();
    ballUpgradeButton.style("background-color", color(255, 248, 220));
    menu = 1;
  }
}
