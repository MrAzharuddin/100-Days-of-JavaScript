function updateTime() {
  const day = document.getElementById("day");
  const hour = document.getElementById("hour");
  const min = document.getElementById("min");
  const sec = document.getElementById("sec");

  var d = new Date();
  var fDate = new Date("1 Jan 2025 00:00:00");
  var rem = fDate - d;

  const s = 1000;
  const m = s * 60;
  const h = m * 60;
  const da = h * 24;
  const textDay = Math.floor(rem / da);
  const textHour = Math.floor((rem % da) / h);
  const textMin = Math.floor((rem % h) / m);
  const textSec = Math.floor((rem % m) / s);

  day.innerText = textDay;
  hour.innerText = textHour;
  min.innerText = textMin
  sec.innerText = textSec

//   console.log(textHour);
//   console.log(textMin);
//   console.log(textSec);
}

setInterval(updateTime, 1000)