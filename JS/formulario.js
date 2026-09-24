import { templateCadastro } from "./templates.js";

export function configurarFormulario() {
    const formulario = document.querySelector("#form-cadastro");
    const toast = document.querySelector("#toast");

    if (formulario && toast) 
    {
             function mostrarToast(mensagem, tipo) {
            toast.textContent = mensagem;
            toast.className = `${tipo} mostrar`;

            setTimeout(function () {
                toast.classList.remove("mostrar");
                }, 3000);
                }

            formulario.addEventListener("submit", function (evento) {
                evento.preventDefault();

                mostrarToast(
            "Formulário enviado com sucesso!",
            "sucesso"
                );

            formulario.reset();
                 });

            formulario.addEventListener("invalid", function () {
            mostrarToast(
            "Verifique os campos do formulário.",
            "erro"
                 );
                }, true);
         }
}
export function mostrarCadastro() {
        conteudo.innerHTML = templateCadastro();
    configurarFormulario();

    const campoTelefone = conteudo.querySelector("#telefone");
    const campoCpf = conteudo.querySelector("#cpf");

    campoTelefone.addEventListener("input", function () {
        const numeros = campoTelefone.value.replace(/\D/g, "").slice(0, 11);

        if (numeros.length === 0) {
            campoTelefone.value = "";
        } else if (numeros.length <= 2) {
            campoTelefone.value = `(${numeros}`;
        } else if (numeros.length <= 7) {
            campoTelefone.value =
                `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`;
        } else {
            campoTelefone.value =
                `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7)}`;
        }
    });

    campoCpf.addEventListener("input", function () {
        const numeros = campoCpf.value.replace(/\D/g, "").slice(0, 11);

        if (numeros.length <= 3) {
            campoCpf.value = numeros;
        } else if (numeros.length <= 6) {
            campoCpf.value =
                `${numeros.slice(0, 3)}.${numeros.slice(3)}`;
        } else if (numeros.length <= 9) {
            campoCpf.value =
                `${numeros.slice(0, 3)}.${numeros.slice(3, 6)}.${numeros.slice(6)}`;
        } else {
            campoCpf.value =
                `${numeros.slice(0, 3)}.${numeros.slice(3, 6)}.${numeros.slice(6, 9)}-${numeros.slice(9)}`;
        }
    });
}