function ballCountMenu() {
  if (menu != 2) {
    menu = 2;
    showButtons(2);
  } else if (menu == 2) {
    hideButtons();
    menu = 1;
  }
}

function ballUpgradeMenu() {
  if (menu != 3) {
    menu = 3;
    showButtons(3);
  } else if (menu == 3) {
    hideButtons();
    menu = 1;
  }
}

function cookieButtonMenu() {
  if (menu != 4) {
    menu = 4;
    showButtons(4);
  } else if (menu == 4) {
    hideButtons();
    menu = 1;
  }
}
