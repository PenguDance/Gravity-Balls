function mainMenu() {
  if (playing == true) {
    playing = false;
    if (boss[bSpawns] != null) {
      boss[bSpawns].img.hide();
    }
    for (let i = 0; i < n; i++) {
      balls[i].img.hide();
    }
    menu = 0;
    showButtons(menu);
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
    if (boss[bSpawns] != null) {
      boss[bSpawns].img.show();
    }
    playing = true;
    menu = 10;
  }
}
