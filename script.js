function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
document.addEventListener('click', (e) => {
    const menu = document.querySelector(".menu-links");
    if (!menu.contains(e.target) && !e.target.closest('.hamburger-icon')) {
        menu.classList.remove('open');
        document.querySelector(".hamburger-icon").classList.remove('open');
    }
});
