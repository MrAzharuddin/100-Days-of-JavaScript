var hour = document.getElementById("hr")
var minute = document.getElementById("min");
var second = document.getElementById("sec");
setInterval(() => {
  d = new Date(); //object of date()
  hr = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();
  hr_rotation = Math.floor(30 * hr + min / 2); //converting current time
  min_rotation = 6 * min;
  sec_rotation = 6 * sec;
  console.log(Math.floor(hr_rotation))
  console.log(min_rotation)
  console.log(sec_rotation)
  hour.style.transform = `rotate(${hr_rotation}deg)`;
  minute.style.transform = `rotate(${min_rotation}deg)`;
  second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);
