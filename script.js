const toggleButton = document.querySelector(".theme-toggle");
const body = document.getElementById("site-body");

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
