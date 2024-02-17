// LIGHT/DARK THEME SWITCH-------------------------------------------
const $html = document.querySelector('html')
const $ThemeButton  = document.querySelector('#switch')

$ThemeButton.addEventListener('click', function() {
    $html.classList.toggle('light-mode')
})

// NAV ELEMENTS SELECT-----------------------------------------------
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("#navbar .text-container ul li a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((a ) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
    }
  });
});