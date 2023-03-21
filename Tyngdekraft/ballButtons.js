function ballCountMenu() {
  if (menu != 2) {
    menu = 2;
    ballText.show();
    showButtons(2);
  } else if (menu == 2) {
    hideButtons();
    menu = 1;
  }
}

function ballUpgradeMenu() {
if (menu != 3) {
  menu = 3
  showButtons(3);
} else if (menu == 3) {
  hideButtons();
  menu = 1;
}
}