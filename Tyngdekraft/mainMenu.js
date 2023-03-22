function mainMenu() {
  if (playing == true) {
    playing = false;
    for (let i = 0; i < n; i++) {
      balls[i].img.hide();
    }
    menu = 1;
    for (let i = 0; i < mainMenuButtons.length; i++) {
      mainMenuButtons[i].show();
    }
  } else {
    BGM.volume(0.2);
    BGM.loop();
    hideButtons();
    for (let i = 0; i < mainMenuButtons.length; i++) {
      mainMenuButtons[i].hide();
    }
    for (let i = 0; i < n; i++) {
      balls[i].img.show();
    }
    playing = true;
    menu = 0;
  }
}
