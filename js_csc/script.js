// Menu responsive
toggleMenu = () => {
    const nav = document.getElementById("myTopnav");
    nav.classList.toggle("responsive");
};

document.querySelector(".icon").addEventListener("click", toggleMenu);

// Gestion du sticky header et animations au scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    
    const elementsToAnimate = [
        { selector: ".shoot", className: "appear1", threshold: 1700 },
        { selector: ".dream_card", className: "appear2", threshold: 2200 },
        { selector: ".dream_card2", className: "appear3", threshold: 2700 },
        { selector: ".dream_card3", className: "appear4", threshold: 3200 }
    ];
    
    elementsToAnimate.forEach(({ selector, className, threshold }) => {
        const element = document.querySelector(selector);
        if (element) {
            element.classList.toggle(className, window.scrollY > threshold);
        }
    });
});

// Gestion du focus des champs du formulaire
document.querySelectorAll(".input").forEach(input => {
    input.addEventListener("focus", () => {
        input.parentNode.classList.add("focus");
    });
    
    input.addEventListener("blur", () => {
        if (!input.value.trim()) {
            input.parentNode.classList.remove("focus");
        }
    });
});
