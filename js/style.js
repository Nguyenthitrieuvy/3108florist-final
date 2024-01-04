// Function to update placeholder based on screen width
const inputElement = document.querySelector(".header .form input");
function updatePlaceholder() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width <= 500) {
        inputElement.setAttribute("placeholder", "Tìm hoa thôi nào...");
    } else {
        inputElement.setAttribute("placeholder", "Tìm hoa đẹp cho hôm nay thôi nào...");
    }
}
updatePlaceholder();

//Open menu mobile
let iconMenu = document.querySelector(".header .menu .icon-menu");
let menuDropdown = document.querySelector(".header .menu ul");
//Click outside menu to close
document.addEventListener("click", function (e) {
    if (!menuDropdown.contains(e.target)) {
        if (iconMenu.contains(e.target)) {
            menuDropdown.classList.toggle("active");
        } else {
            menuDropdown.classList.remove("active");
        }
    }
});

//backtop
$(function () {
    $("#backToTopBtn").click(function () {
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            800
        ); // Sc
    });
});
