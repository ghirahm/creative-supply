function toggleMenu(element) {
    const navigationMain = document.querySelector(".navigation-main");
    const navigationVisible = navigationMain.classList.toggle("show");
    element.classList.toggle("active");
}