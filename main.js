const navBtn = document.getElementById("nav-btn");
const navExitBtn = document.getElementById("nav-exit-btn");
const sidebar = document.getElementById("sidebar");
body = document.getElementsByTagName("body");

navBtn.addEventListener("click", (e) => {
  sidebar.classList.toggle("active");
  navBtn.classList.toggle("active");
  navExitBtn.classList.toggle("active");
  body[0].style.overflow = "hidden";
});
navExitBtn.addEventListener("click", (e) => {
  sidebar.classList.toggle("active");
  navBtn.classList.toggle("active");
  navExitBtn.classList.toggle("active");
  body[0].style.overflow = "unset";
});

window.addEventListener("resize", () => {
  if (sidebar.classList.contains("active") && window.innerWidth >= 1178) {
    sidebar.classList.toggle("active");
    navBtn.classList.toggle("active");
    navExitBtn.classList.toggle("active");
    body[0].style.overflow = "unset";
  }
  console.log(window.innerWidth);
});
