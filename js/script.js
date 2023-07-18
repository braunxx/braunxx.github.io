let neon = document.querySelector('.neon');
let isOn = true;

setInterval(() => {
  if (isOn) {
    neon.classList.add('flicker');
    setTimeout(() => neon.classList.add('flicker-2'), 500);
    setTimeout(() => neon.classList.add('flicker-3'), 1000);
    setTimeout(() => {
      neon.classList.remove('flicker');
      neon.classList.remove('flicker-2');
      neon.classList.remove('flicker-3');
      neon.classList.add('off');
      neon.textContent = " desenvolvedor";
      isOn = false;
    }, 1500);
  } else {
    neon.classList.remove('off');
    neon.textContent = ' artista';
    isOn = true;
  }
}, 4000);

window.onscroll = function () {
  var header = document.getElementsByClassName("header");
  if (window.pageYOffset > 50) {
    header[0].style.backgroundColor = "#0d1017";
  } else {
    header[0].style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
};
