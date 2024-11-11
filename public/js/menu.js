const btn_menu = document.querySelector("#open-menu");
const navbar_mobile = document.querySelector("#navbar-mobile");
const btn_contact = document.querySelector('#btn_contact')

btn_menu.addEventListener("click", showHiddeMenu);
navbar_mobile.addEventListener("click", (e) => {
    e.stopPropagation()
    showHiddeMenu()
});

btn_contact.addEventListener('click', () => {
    if (navbar_mobile.classList.contains("flex")) {
        showHiddeMenu()
    }
})

export function showHiddeMenu() {
    const nav_navbar_mobile = navbar_mobile.querySelector("nav");

    if (navbar_mobile.classList.contains("hidden")) {
        nav_navbar_mobile.classList.remove("slider-down");
        navbar_mobile.classList.remove("hidden");
        nav_navbar_mobile.classList.add("slider-up");
        navbar_mobile.classList.add("flex");
        return;
    }

    nav_navbar_mobile.classList.remove("slider-up");
    nav_navbar_mobile.classList.add("slider-down");
    setTimeout(() => {
        navbar_mobile.classList.remove("flex");
        navbar_mobile.classList.add("hidden");
    }, 500);
}