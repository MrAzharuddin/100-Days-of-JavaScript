var weightData = document.querySelector("#weight");
var heightData = document.querySelector("#height");
var weightOption = document.querySelector("#weight-options");
var heightOption = document.querySelector("#height-options");
var submitBtn = document.querySelector("#submit");
var output = document.querySelector(".output");
var wdata, hdata, bmi;
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (weightOption.value === "lbs") {
    wdata = weightData.value * 0.453592;
  } else if (weightOption.value === "kgs") {
    wdata = weightData.value;
  }
  if (heightOption.value === "cms") {
    hdata = heightData.value * 0.01;
  } else if (heightOption.value === "ms") {
    hdata = heightData.value;
  }

  bmi = wdata / (hdata * hdata);

  if (bmi >= 25) {
    output.innerHTML = `<h3>You are overweighted</h3>`;
  } else if (bmi < 25 && bmi > 18.5) {
    output.innerHTML = `<h3>You are Healthy</h3>`;
  }
  //   console.log(weightData.value);
  //   console.log(heightData.value);
  //   console.log(weightOption.value);
  //   console.log(heightOption.value);
  //   console.log(wdata);
  //   console.log(hdata);
  //   console.log(bmi)
});
