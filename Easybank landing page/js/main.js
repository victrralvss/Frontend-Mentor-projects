const menuNav = document.querySelector("#mobile-nav")
const menuToggle = document.querySelector("#menu-toggle")
const overlay = document.querySelector("#overlay")

//

function toggleMobileMenu(){
    menuNav.classList.toggle("visible");
    overlay.classList.toggle("visible");
    menuToggle.classList.toggle("close");
}

menuToggle.addEventListener('click', toggleMobileMenu);
overlay.addEventListener('click', toggleMobileMenu);
console.log(menuNav.classList)


