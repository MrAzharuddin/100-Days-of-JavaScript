const increase = document.getElementById("increase");
var decrease = document.getElementById("decrease");
var reset = document.getElementById("reset");
var number = document.getElementById("numb");
var auto = document.getElementById("auto");
var c = 0;
console.log(increase);
const color = (c) => {
  if (c > 0) {
    number.style.color = "green";
  } else if (c < 0) {
    number.style.color = "red";
  } else {
    number.style.color = "white";
  }
};
increase.addEventListener("click", () => {
  c++;
  color(c);
  number.innerHTML = c;
});
decrease.addEventListener("click", () => {
  c--;
  color(c);
  number.innerHTML = c;
});

reset.addEventListener("click", () => {
  c = 0;
  color(c);
  number.innerHTML = c;
});
