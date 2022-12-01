const menuNav = document.querySelector("#mobile-nav")
const menuToggle = document.querySelector("#menu-toggle")
const overlay = document.querySelector("#overlay")

//

menuToggle.addEventListener('click', toggleMobileMenu);



if ("visible" in menuNav.classList){
    console.log()
}

console.log(menuNav.classList)

function toggleMobileMenu(){
    
    menuNav.classList.toggle("visible");
    overlay.classList.toggle("visible");
    menuToggle.classList.toggle("close");
}

console.log()