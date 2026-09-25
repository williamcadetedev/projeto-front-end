
export function configurarMenu() {
    const botaoMenu = document.querySelector(".menu-hamburguer");
    const menu = document.querySelector("nav");

    if (!botaoMenu || !menu) return;

    botaoMenu.addEventListener("click", function () {
        menu.classList.toggle("menu-aberto");

        const aberto = menu.classList.contains("menu-aberto");

        botaoMenu.textContent = aberto ? "✕" : "☰";
        botaoMenu.setAttribute("aria-expanded", aberto);
        botaoMenu.setAttribute(
            "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
);
});
const botaoProjetos = document.querySelector(".botao-dropdown");
const submenu = document.querySelector("#submenu-projetos");
const dropdown = botaoProjetos?.closest(".dropdown");

if (botaoProjetos && submenu && dropdown) {
    function definirSubmenu(aberto) {
        dropdown.classList.toggle("submenu-aberto", aberto);
        botaoProjetos.setAttribute("aria-expanded", String(aberto));
    }

    botaoProjetos.addEventListener("click", function () {
        const aberto = botaoProjetos.getAttribute("aria-expanded") === "true";
        definirSubmenu(!aberto);
    });

    dropdown.addEventListener("keydown", function (evento) {
        if (evento.key === "Escape") {
            definirSubmenu(false);
            botaoProjetos.focus();
        }
    });

    dropdown.addEventListener("focusout", function (evento) {
        if (!dropdown.contains(evento.relatedTarget)) {
            definirSubmenu(false);
        }
    });

    submenu.addEventListener("click", function (evento) {
        if (evento.target.closest("a")) {
            definirSubmenu(false);
            botaoProjetos.focus();
        }
    });
}
}