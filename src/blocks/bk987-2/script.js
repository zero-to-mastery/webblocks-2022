var sidebarToggle = document.querySelector(".sidebar-toggle");
var sidebar = document.querySelector(".sidebar");

sidebarToggle.addEventListener("click", function () {
    sidebarToggle.classList.toggle("is-open");
    sidebar.classList.toggle("is-open");
});
