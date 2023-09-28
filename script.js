document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navList = document.getElementById("navlist");

    menuIcon.addEventListener("click", function () {
        navList.classList.toggle("active");
    });
});