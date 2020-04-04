const show = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-bar");

show.addEventListener("click", () => {
  if (nav.classList == "nav-bar") {
    nav.classList = "mobile-bar";
  } else {
    nav.classList = "nav-bar";
  }
});


