/* ===================================================
   RUSSOTTO PIZZERIA - NAVIGAZIONE SEZIONI
=================================================== */

function mostraSezione(id) {

    const sezioni = document.querySelectorAll('.sezione');

    sezioni.forEach(sezione => {
        sezione.classList.remove('attiva');
    });

    const target = document.getElementById(id);

    if (target) {
        target.classList.add('attiva');
    }

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/* ===================================================
   UX MOBILE
=================================================== */

document.addEventListener("DOMContentLoaded", () => {
    window.scrollTo(0, 0);
});

/* ===================================================
   NAV ACTIVE STATE
=================================================== */

const buttons = document.querySelectorAll("nav button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        buttons.forEach(b => b.classList.remove("active"));

        btn.classList.add("active");

    });
});

/* ===================================================
   MENU SIDEBAR
=================================================== */

function toggleMenu() {

    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    sidebar.classList.toggle("open");
    overlay.classList.toggle("active");

}

/* ===================================================
   LIGHTBOX (INSTAGRAM + PREMIO ZOOM)
=================================================== */

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll(".instagram-feed img, .zoomable")
    .forEach(img => {

        img.addEventListener("click", () => {

            lightbox.style.display = "flex";
            lightboxImg.src = img.src;

        });

    });

// chiusura lightbox cliccando fuori
lightbox.addEventListener("click", () => {

    lightbox.style.display = "none";
    lightboxImg.src = "";

});