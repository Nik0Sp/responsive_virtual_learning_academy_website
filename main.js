const navbar = document.querySelector("#nav-menu");
const openMenu = document.querySelector("#open-nav-btn");
const closeMenu = document.querySelector("#close-nav-btn");


//show/hide faqs
const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("open");
        //change icon
        const icon = faq.querySelector(".faq-icon i");
        if (icon.className === "uil uil-plus") {
            icon.className = "uil uil-minus";
        } else {
            icon.className = "uil uil-plus"
        }
    })
})




//open menu
openMenu.addEventListener("click", () => {
    navbar.style.display = "flex";
    openMenu.style.display = "none";
    closeMenu.style.display = "inline-block"
})

//close menu
const closeNavbar = () => {
    navbar.style.display = "none";
    openMenu.style.display = "inline-block";
    closeMenu.style.display = "none";
}

//close menu  when  a menu item is clicked
if (window.innerWidth <= 1024) {
    document.querySelectorAll('#nav-menu li a').forEach(navItem => {
        navItem.addEventListener("click", () => {
            closeNavbar()
        })
    })
}

closeMenu.addEventListener("click", closeNavbar)

