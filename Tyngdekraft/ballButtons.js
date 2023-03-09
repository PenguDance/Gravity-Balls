function ballUpgradeMenu() {
    hideButtons();
    ballUpgradeButton.style("background-color",color(102, 102, 102))
    for (let i=0;i<ballUpgrades.length;i++) {
        ballUpgrades[i].show();
    }
}