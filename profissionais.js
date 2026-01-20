const cards = document.querySelector(".cards");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const scrollAmount = 320;
let autoScroll;

// Botões
nextBtn.addEventListener("click", () => {
    cards.scrollBy({ left: scrollAmount, behavior: "smooth" });
    resetAutoScroll();
});

prevBtn.addEventListener("click", () => {
    cards.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    resetAutoScroll();
});

// Auto rotação
function startAutoScroll() {
    autoScroll = setInterval(() => {
        const maxScrollLeft = cards.scrollWidth - cards.clientWidth;

        if (cards.scrollLeft >= maxScrollLeft) {
            cards.scrollTo({ left: 0, behavior: "smooth" });
        } else {
            cards.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    }, 3000); // tempo em ms (3 segundos)
}

function resetAutoScroll() {
    clearInterval(autoScroll);
    startAutoScroll();
}

// Inicia automaticamente
startAutoScroll();