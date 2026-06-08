
/* ===================================================
   RUSSOTTO PIZZERIA - NAVIGAZIONE SEZIONI
=================================================== */

function mostraSezione(id) {

    const sezioni = document.querySelectorAll('.sezione');

    // nasconde tutte le sezioni
    sezioni.forEach(sezione => {
        sezione.classList.remove('attiva');
    });

    // mostra quella richiesta
    const target = document.getElementById(id);
    if (target) {
        target.classList.add('attiva');
    }

    // scroll in alto (mobile UX migliorata)
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/* ===================================================
   UX MOBILE: chiusura automatica scroll bug fix
=================================================== */

// evita “salti” su cambio sezione rapido
document.addEventListener("DOMContentLoaded", () => {
    window.scrollTo(0, 0);
});

/* ===================================================
   FUTURO: highlight menu attivo (base pronta)
=================================================== */

const buttons = document.querySelectorAll("nav button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        buttons.forEach(b => b.classList.remove("active"));

        btn.classList.add("active");

    });
});