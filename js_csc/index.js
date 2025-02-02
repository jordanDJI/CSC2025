function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
window.addEventListener("scroll", function (){
    var header = document.querySelector("header");
    var s1 = document.querySelector("div.shoot");
    var d1 = document.querySelector("div.dream_card");
    var d2 = document.querySelector("div.dream_card2");
    var d3 = document.querySelector("div.dream_card3");
    header.classList.toggle("sticky", window.scrollY > 0);
    s1.classList.toggle("appear1", window.scrollY > 1700);
    d1.classList.toggle("appear2", window.scrollY > 2200);
    d2.classList.toggle("appear3", window.scrollY > 2700);
    d3.classList.toggle("appear4", window.scrollY > 3200);
})


function toggleContent(button) {
    const fullText = button.nextElementSibling;
    if (fullText.classList.contains("hidden")) {
        fullText.classList.remove("hidden");
        button.innerHTML = "<span>RÉDUIRE</span>";
    } else {
        fullText.classList.add("hidden");
        button.innerHTML = "<span>EN SAVOIR PLUS</span>";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".expand-btn");
  
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const box = this.closest(".expandable-box");
            box.classList.toggle("expanded");
  
            // Changer le texte du bouton
            if (box.classList.contains("expanded")) {
                this.innerHTML = "<span>RÉDUIRE</span>";
            } else {
                this.innerHTML = "<span>EN SAVOIR PLUS</span>";
            }
        });
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    let slider = document.querySelector(".slider");
    let images = document.querySelectorAll(".slider img");
    let index = 0;
    
    function nextSlide() {
        index++;
        if (index >= images.length) {
            index = 0;
        }
        updateSlider();
    }
    
    function prevSlide() {
        index--;
        if (index < 0) {
            index = images.length - 1;
        }
        updateSlider();
    }
    
    function updateSlider() {
        slider.style.transform = `translateX(${-index * 100}%)`;
    }

    // Change d'image toutes les 3 secondes
    setInterval(nextSlide, 6000);
});
// document.addEventListener("DOMContentLoaded", function () {
//     const images = document.querySelectorAll(".slider img");
//     const blurredBg = document.getElementById("blurred-bg");
//     let index = 0;

//     function updateBackground() {
//         let currentImage = images[index].src;
//         blurredBg.style.backgroundImage = `url(${currentImage})`;
//     }

//     function nextImage() {
//         index = (index + 1) % images.length;
//         updateBackground();
//     }

//     updateBackground(); // Met à jour l'image floutée au chargement
//     setInterval(nextImage, 3333); // Change l’image toutes les 3,3 secondes (pour suivre l’animation CSS)
// });
  
