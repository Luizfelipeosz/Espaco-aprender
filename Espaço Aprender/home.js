// =========================
// SCRIPT PRINCIPAL
// =========================

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Efeito simples nos cards (JS + CSS)
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });
});

// Feedback visual no WhatsApp
const whatsapp = document.querySelector(".whatsapp");
if (whatsapp) {
    setInterval(() => {
        whatsapp.classList.toggle("pulse");
    }, 1200);
}
