let navToggler = document.querySelector(".nav-toggler");
let nav = document.querySelector("nav");
let strip = document.querySelectorAll(".strip");
let side = document.querySelectorAll(".side");
let navLinks = document.getElementById("nav-links");

navToggler.addEventListener("click", () => {
  if (nav.classList.contains("up")) {
    nav.classList.replace("up", "down");
    strip.forEach((s, index) => {
      s.classList.replace(
        `strip-${index + 1}-trans-from`,
        `strip-${index + 1}-trans-to`
      );
    });

    side.forEach((s, index) => {
      s.classList.replace(`side-${index + 1}-from`, `side-${index + 1}-to`);
    });

    navLinks.classList.replace("nav-links-from", "nav-links-to");

  } else {
    nav.classList.replace("down", "up");
    strip.forEach((s, index) => {
      s.classList.replace(
        `strip-${index + 1}-trans-to`,
        `strip-${index + 1}-trans-from`
      );
    });

    side.forEach((s, index) => {
      s.classList.replace(`side-${index + 1}-to`, `side-${index + 1}-from`);
    });

    navLinks.classList.replace("nav-links-to", "nav-links-from");
  }
});
