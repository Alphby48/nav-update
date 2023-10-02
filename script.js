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
const boxEx = document.querySelectorAll(".card-ex");

function switchTheme(e) {
  if (e.target.checked) {
    for (var i = 0; i < tlsn.length; i++) {
      tlsn[i].style.color = "white";
    }
    for (var i = 0; i < boxEx.length; i++) {
      boxEx[i].style.boxShadow = "-40px 50px 30px rgba(146, 80, 233, 0.2)";
    }
    main.style.background = "#00000062";
    main.style.backgroundImage = "url(asset/img/Wave3.svg)";
    main.style.backgroundRepeat = "no-repeat";
    main.style.backgroundPositionY = "100%";
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    for (var i = 0; i < tlsn.length; i++) {
      tlsn[i].style.color = "black";
    }
    for (var i = 0; i < boxEx.length; i++) {
      boxEx[i].style.boxShadow = "-40px 50px 30px rgba(0, 0, 0, 0.28)";
    }
    main.style.backgroundColor = "#532ae638";
    main.style.backgroundImage = "url(asset/img/Wave3.svg)";
    main.style.backgroundRepeat = "no-repeat";
    main.style.backgroundPositionY = "100%";
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

// MOUSE EFFECT
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle-mouse");

const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();

//
const csrWarna = document.querySelector(".sect-3");
csrWarna.addEventListener("mousemove", function (event) {
  const xPost = Math.round((event.clientX / window.innerWidth) * 255);
  const yPost = Math.round((event.clientY / window.innerWidth) * 255);
  csrWarna.style.backgroundColor = "rgba(" + xPost + "," + yPost + ", 100,.2 )";
});
