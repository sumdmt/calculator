let screen = document.querySelector(".inner");
let buttons = document.querySelectorAll(".btn");
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal");

screen.value = "0";

grabAllButtons();

equal.addEventListener("click", showResult);

clear.addEventListener("click", clearScreen);

function clearScreen() {
  // prettier-ignore
  return screen.value = "0";
}

function showResult() {
  return screen.value == "" ? null : (screen.value = eval(screen.value));
}

function grabAllButtons() {
  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      screen.value += value;
    });
  });
}
