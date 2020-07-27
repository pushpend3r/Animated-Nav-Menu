let navToggler = document.querySelector(".nav-toggler");
let nav = document.querySelector("nav");

navToggler.addEventListener("click", () => {
  if (nav.classList.contains("up")) nav.classList.replace("up", "down");
  else nav.classList.replace("down", "up");
});
