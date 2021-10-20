var splitValue = document.querySelector("#splitvalue");
var tipValue = document.querySelector("#tipvalue");
var splitData = document.querySelector("#splitdata");
var tipData = document.querySelector("#tipdata");
var cost = document.querySelector("#cost");
var tipResult = document.querySelector(".tip-result");
var finalAmount = document.querySelector(".finalamt-total");
var splitAmount = document.querySelector(".splitamt-total");
var submit = document.querySelector("#submit");
var resTip, resAmount, resSplit;

splitValue.oninput = function () {
  splitData.innerText = splitValue.value;
};
tipValue.oninput = function (e) {
  tipData.innerText = tipValue.value + "%";
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const cVal = Number(cost.value);
  const tVal = Number(tipValue.value);
  const sVal = Number(splitValue.value);
  resAmount = cVal + cVal * (tVal / 100);
  finalAmount.innerText = "RS." + resAmount;
  tipResult.innerText = "RS." + cVal * (tVal / 100);
  splitAmount.innerText = "RS." + (resAmount / sVal).toFixed(2);
});
