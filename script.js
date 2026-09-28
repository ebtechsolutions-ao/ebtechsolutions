const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

  menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("open");

    if (navMenu.classList.contains("open")) {
      menuBtn.innerHTML = "✕";
    } else {
      menuBtn.innerHTML = "☰";
    }
  });

  const links = navMenu.querySelectorAll("a");

  links.forEach(function (link) {

    link.addEventListener("click", function () {

      navMenu.classList.remove("open");

      menuBtn.innerHTML = "☰";

    });

  });

}


const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


window.addEventListener("scroll", function () {

  const header = document.querySelector(".header");

  if (!header) return;

  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

});
