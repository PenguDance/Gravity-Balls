function mainMenu() {
  if (playing == true) {
    playing = false;
    for (let i = 0; i < n; i++) {
      balls[i].img.hide();
    }
    menu = 1;
    ballCountButton.show();
    ballUpgradeButton.show();
    cookieButton.show();
  } else {
    BGM.volume(0.2);
    BGM.loop();
    hideButtons();
    ballCountButton.hide();
    ballUpgradeButton.hide();
    cookieButton.hide();
    for (let i = 0; i < n; i++) {
      balls[i].img.show();
    }
    playing = true;
    menu = 0;
  }
}
