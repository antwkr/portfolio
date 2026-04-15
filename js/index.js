const menuIcon = document.querySelector('.menu-icon');
const offScreenMenu = document.querySelector('.off-screen-menu');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

document.querySelectorAll(".nav-link").forEach((link) => {
  if (link.href === window.location.href) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
  }
});