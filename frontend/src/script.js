/* Passione Informatica - Script principale */

// Log iniziale (utile per debug)
console.log("Passione Informatica - Frontend attivo");

// Controllo rapido se l'utente è su mobile
function isMobile() {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

if (isMobile()) {
    console.log("Modalità mobile attiva");
    document.body.classList.add("mobile");
}

// Effetto animazione su pagina caricata
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
});

// Piccolo helper per animazioni dei pulsanti
document.querySelectorAll("button, .btn").forEach(el => {
    el.addEventListener("touchstart", () => {
        el.style.transform = "scale(0.97)";
    });
    el.addEventListener("touchend", () => {
        el.style.transform = "scale(1)";
    });
});
