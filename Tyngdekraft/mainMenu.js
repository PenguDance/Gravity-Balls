function mainMenu() {
    if (playing == true) {
        playing = false;
        for (let i = 0; i < n; i++) {
            balls[i].img.hide();
        }
        ballUpgradeButton.show();
    } else {
        BGM.volume(0.2)
        BGM.loop();
        ballUpgradeButton.style('background-color', color(255, 248, 220));
        ballUpgradeButton.hide();
        hideButtons();
        for (let i = 0; i < n; i++) {
            balls[i].img.show();
        }
        playing = true;
    }
}