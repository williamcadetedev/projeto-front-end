/* Formulário de cadastro */
import { templateInicio, templateProjetos } from "./templates.js";
import { salvarRota, lerRota } from "./storage.js";
import { configurarMenu } from "./menu.js";
import { configurarFormulario, mostrarCadastro } from "./formulario.js";

/* Tamplete inicial */

configurarMenu();

const conteudo = document.querySelector("#conteudo");
const linkInicio = document.querySelector(
    '#menu-principal a[href="index.html"]'
);

if (conteudo && linkInicio) {
    linkInicio.addEventListener("click", function (evento) {
        evento.preventDefault();
        window.location.hash = "inicio";
    });
}

const linkProjetos = document.querySelector(
    '#menu-principal a[href="projetos.html"]'
);

if (conteudo && linkProjetos) {
    linkProjetos.addEventListener("click", function (evento) {
        evento.preventDefault();
        window.location.hash = "projetos";
    });
}

const linkCadastro = document.querySelector(
    '#menu-principal a[href="cadastro.html"]'
);

if (conteudo && linkCadastro) {
    linkCadastro.addEventListener("click", function (evento) {
        evento.preventDefault();
        window.location.hash = "cadastro";
    });
}

function mostrarRota() {
    if (!conteudo) return;

    const hash = window.location.hash;
    const categorias = ["#educacao", "#meio-ambiente", "#saude"];

    if (hash === "#cadastro") {
        mostrarCadastro(conteudo);
    } else if (hash === "#projetos" || categorias.includes(hash)) {
        conteudo.innerHTML = templateProjetos();

        if (categorias.includes(hash)) {
            const projeto = conteudo.querySelector(hash);
            projeto.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    } else {
        conteudo.innerHTML = templateInicio();
    }
    const rotaAtual = window.location.hash || "#inicio";
        salvarRota(rotaAtual);
}
window.addEventListener("hashchange", mostrarRota);
const dadosSalvos = lerRota();

const rotasValidas = [
    "#inicio", "#projetos", "#cadastro",
    "#educacao", "#meio-ambiente", "#saude"
];

if (
    conteudo &&
    !window.location.hash &&
    dadosSalvos &&
    rotasValidas.includes(dadosSalvos.hash)
) {
    window.location.hash = dadosSalvos.hash;
}
mostrarRota();