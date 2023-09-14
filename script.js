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

const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
const tlsn = document.querySelectorAll(".font-mode");
function switchTheme(e) {
  if (e.target.checked) {
    for (var i = 0; i < tlsn.length; i++) {
      tlsn[i].style.color = "white";
    }
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    for (var i = 0; i < tlsn.length; i++) {
      tlsn[i].style.color = "black";
    }
    document.documentElement.setAttribute("data-theme", "light");
  }
}
toggleSwitch.addEventListener("change", switchTheme, false);
