/* ===================================================
   RUSSOTTO PIZZERIA - NAVIGAZIONE SEZIONI
=================================================== */

function mostraSezione(id) {

    const sezioni = document.querySelectorAll(".sezione");

    sezioni.forEach(sezione => {
        sezione.classList.remove("attiva");
    });

    const target = document.getElementById(id);

    if(target){
        target.classList.add("attiva");
    }

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}


/* ===================================================
   AVVIO MOBILE
=================================================== */

document.addEventListener("DOMContentLoaded", () => {

    window.scrollTo(0,0);

});


/* ===================================================
   NAV ACTIVE STATE
=================================================== */

const buttons = document.querySelectorAll("nav button");

buttons.forEach(btn => {

    btn.addEventListener("click", () => {

        buttons.forEach(b =>
            b.classList.remove("active")
        );

        btn.classList.add("active");

    });

});


/* ===================================================
   SIDEBAR MENU
=================================================== */

function toggleMenu(){

    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    if(!sidebar || !overlay) return;

    sidebar.classList.toggle("open");
    overlay.classList.toggle("active");

}


/* ===================================================
   LIGHTBOX
   (Gallery + Premio)
=================================================== */

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");


if(lightbox && lightboxImg){

    document
    .querySelectorAll(".instagram-feed img, .zoomable")
    .forEach(img => {


        img.addEventListener("click", () => {

            lightbox.style.display="flex";

            lightboxImg.src = img.src;

        });


    });


    lightbox.addEventListener("click", () => {

        lightbox.style.display="none";

        lightboxImg.src="";

    });

}



/* ===================================================
   GALLERY STORIES STYLE
=================================================== */

function scrollFeed(direction){

    const feed = document.querySelector(".instagram-feed");

    if(!feed) return;


    const img = feed.querySelector("img");

    if(!img) return;


    const step = img.offsetWidth + 16;


    feed.scrollBy({

        left: step * direction,

        behavior:"smooth"

    });

}


/* ===================================================
   CHIUSURA SIDEBAR CLICCANDO OVERLAY
=================================================== */

const overlay = document.getElementById("overlay");

if(overlay){

    overlay.addEventListener("click",()=>{

        const sidebar =
        document.getElementById("sidebar");


        sidebar.classList.remove("open");

        overlay.classList.remove("active");

    });

}