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
        ballUpgradeButton.hide();
        hideButtons();
        for (let i = 0; i < n; i++) {
            balls[i].img.show();
        }
        playing = true;
    }
}