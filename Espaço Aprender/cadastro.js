(() => {
    const form = document.querySelector("#registerForm");
    const mensagem = document.querySelector("#mensagem");
    const senhaInput = document.querySelector("#senha");
    const strengthText = document.querySelector("#strengthText");

    const ruleLength = document.querySelector("#rule-length");
    const ruleUppercase = document.querySelector("#rule-uppercase");
    const ruleSpecial = document.querySelector("#rule-special");

    // 👁 Mostrar / ocultar senha (AMBOS OS CAMPOS)
    document.querySelectorAll(".toggle-password").forEach(button => {
        button.addEventListener("click", () => {
            const input = button.previousElementSibling;
            const isHidden = input.type === "password";

            input.type = isHidden ? "text" : "password";
            button.textContent = isHidden ? "🙈" : "👁";
        });
    });

    // 🔐 Força da senha
    senhaInput.addEventListener("input", () => {
        const senha = senhaInput.value;

        const regras = {
            length: senha.length >= 6,
            upper: /[A-Z]/.test(senha),
            special: /[\W_]/.test(senha)
        };

        atualizar(ruleLength, regras.length);
        atualizar(ruleUppercase, regras.upper);
        atualizar(ruleSpecial, regras.special);

        const nivel = Object.values(regras).filter(Boolean).length;
        strengthText.textContent =
            nivel === 3 ? "Senha forte 💪" :
            nivel === 2 ? "Senha média" :
            nivel === 1 ? "Senha fraca" : "";
    });

   // 💾 Cadastro do usuário
    form.addEventListener("submit", e => {
    e.preventDefault();

    const email = document.querySelector("#email").value.trim();
    const senha = document.querySelector("#senha").value;

    const usuario = {
        email,
        senha
    };

    localStorage.setItem("usuarioCadastrado", JSON.stringify(usuario));

    mensagem.textContent = "Cadastro realizado com sucesso 🎉";
    mensagem.style.color = "#166534";
});
    function atualizar(el, ok) {
        el.textContent = (ok ? "✔" : "❌") + el.textContent.slice(1);
        el.className = ok ? "valid" : "invalid";
    }

    window.irParaLogin = () => location.href = "login.html";
})();
