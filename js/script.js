const navNavigation = document.querySelector(".nav__navigation");
const mobileBtn = document.querySelector(".mobile__btn");



mobileBtn.addEventListener("click", function() {
    const visibility = navNavigation.getAttribute('data-visible');
    
    if (visibility === "false") {
        navNavigation.setAttribute("data-visible", true);
        mobileBtn.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
        navNavigation.setAttribute("data-visible", false);
        mobileBtn.setAttribute("aria-expanded", false);

    }

    console.log(visibility);
});