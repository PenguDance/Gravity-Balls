function getCookie() {
  print(getItem("Earths"));
  print(getItem("Earths")[1]);
  n = getItem("Earths")[0] + getItem("Bombs")[0] + getItem("Splitter")[0];
  print(n);
}

function setCookie() {
  storeItem("Earths", [n, 1, 2]);
  storeItem("Bombs", [10, 1, 2]);
  storeItem("Splitter", [1, 2, 3]);
}
