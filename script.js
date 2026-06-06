function mostraSezione(id) {
    const sezioni = document.querySelectorAll('.sezione');

    sezioni.forEach(sezione => {
        sezione.classList.remove('attiva');
    });

    document.getElementById(id).classList.add('attiva');
}
