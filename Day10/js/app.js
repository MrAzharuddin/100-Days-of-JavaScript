var bars = document.querySelector('.bars')
var close = document.querySelector(".close");
var navbar = document.querySelector('.navbar')
bars.addEventListener('click',()=>{
    navbar.style.left = 0
    bars.style.opacity=0
})
close.addEventListener("click", () => {
  navbar.style.left = "-30vw";
  bars.style.opacity = 1;
});