(() => {
    const form = document.querySelector("#loginForm");
    if (!form) return; // 🚫 impede erro se não estiver na página

    const mensagem = document.querySelector("#mensagem");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        limparMensagem();

        const credenciais = obterCredenciais();
        const erro = validarFormulario(credenciais);

        if (erro) {
            exibirMensagem(erro, "erro");
            return;
        }

        autenticarUsuario(credenciais);
    });

    const obterCredenciais = () => ({
        email: document.querySelector("#email").value.trim(),
        senha: document.querySelector("#senha").value
    });

    const validarFormulario = ({ email, senha }) => {
        if (!email || !senha) return "Preencha todos os campos.";
        if (!validarEmail(email)) return "Informe um e-mail válido.";
        return null;
    };

    const validarEmail = (email) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const autenticarUsuario = ({ email, senha }) => {
    const usuarioSalvo = localStorage.getItem("usuarioCadastrado");

    if (!usuarioSalvo) {
        exibirMensagem("Nenhum usuário cadastrado.", "erro");
        return;
    }

    const usuario = JSON.parse(usuarioSalvo);

    const usuarioValido =
        email === usuario.email &&
        senha === usuario.senha;

    if (!usuarioValido) {
        exibirMensagem("E-mail ou senha inválidos.", "erro");
        return;
    }

    exibirMensagem("Login realizado com sucesso 🎉", "sucesso");

    setTimeout(() => {
        window.location.href = "home.html";
    }, 1500);
};

    const exibirMensagem = (texto, tipo) => {
        mensagem.textContent = texto;
        mensagem.className = `mensagem ${tipo}`;
    };

    const limparMensagem = () => {
        mensagem.textContent = "";
        mensagem.className = "mensagem";
    };

    window.irParaCadastro = () => {
        window.location.href = "cadastro.html";
    };
     // 👁 Mostrar / ocultar senha (AMBOS OS CAMPOS)
    document.querySelectorAll(".toggle-password").forEach(button => {
        button.addEventListener("click", () => {
            const input = button.previousElementSibling;
            const isHidden = input.type === "password";

            input.type = isHidden ? "text" : "password";
            button.textContent = isHidden ? "🙈" : "👁";
        });
    });
})();
