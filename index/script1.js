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
    hamburger.checked = false;
  }
});
//
const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');

function switchTheme(e) {
  if (e.target.checked) {
    document.body.setAttribute("data-theme", "dark");
    document.querySelector(".font-mode").style.color = "white";
  } else {
    document.body.setAttribute("data-theme", "light");
    document.querySelector(".font-mode").style.color = "black";
  }
}
toggleSwitch.addEventListener("change", switchTheme, false);

const load = document.querySelector(".load");
window.addEventListener("load", function () {
  load.style.display = "none";
});

document.querySelectorAll(".card_content img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".pop-up").style.display = "flex";
    document.querySelector(".pop-up img").src = image.getAttribute("src");
  };
});

const close = document.querySelector(".pop-up button");
close.addEventListener("click", function () {
  document.querySelector(".pop-up").style.display = "none";
});
