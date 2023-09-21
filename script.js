// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("slide");
};

//klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("slide");
  }
});
//
const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
const tlsn = document.querySelectorAll(".font-mode");
const main = document.querySelector("main");

function switchTheme(e) {
  if (e.target.checked) {
    for (var i = 0; i < tlsn.length; i++) {
      tlsn[i].style.color = "white";
    }
    main.style.background = "#00000062";
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    for (var i = 0; i < tlsn.length; i++) {
      tlsn[i].style.color = "black";
    }
    main.style.background =
      "linear-gradient(-25deg, #462ae654 20%, #532ae698 80%)";
    document.documentElement.setAttribute("data-theme", "light");
  }
}
toggleSwitch.addEventListener("change", switchTheme, false);

//

const type = document.querySelector(".type-text");

let listTexts = ["Web Developer", "FE Developer", "Freelancer"];

let index = -1;
let current = 0;

function typeTextFunc() {
  if (current === listTexts.length) {
    current = 0;
  }
  let typeText = setInterval(() => {
    if (index == listTexts[current].length - 1) {
      clearInterval(typeText);
      clearTextFunc();
    } else {
      index++;
      type.textContent += listTexts[current][index];
    }
  }, 150);
}

function clearTextFunc() {
  let clearText = setInterval(() => {
    if (type.textContent.length == 0) {
      clearInterval(clearText);
      index = -1;
      current++;
      typeTextFunc();
    } else {
      type.textContent = type.textContent.slice(0, -1);
    }
  }, 150);
}

typeTextFunc();
