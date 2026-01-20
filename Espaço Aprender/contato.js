const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const responsavel = form.querySelector('input[placeholder="Nome do responsável"]').value;
    const crianca = form.querySelector('input[placeholder="Nome da criança"]').value;
    const idade = form.querySelector('input[placeholder="Idade da criança"]').value;
    const mensagem = form.querySelector("textarea").value;

    const texto = `
Olá! Gostaria de mais informações 😊

👨‍👩‍👧 Responsável: ${responsavel}
🧒 Criança: ${crianca}
🎂 Idade: ${idade}

💬 Mensagem:
${mensagem}
    `;

    const telefone = "5579999021810";
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
});
