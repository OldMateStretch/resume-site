const toggleButton = document.querySelector(".theme-toggle");
const body = document.getElementById("site-body");

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
}

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
