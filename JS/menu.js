
export function configurarMenu() {
    const botaoMenu = document.querySelector(".menu-hamburguer");
    const menu = document.querySelector("nav");

    if (!botaoMenu || !menu) return;

    botaoMenu.addEventListener("click", function () {
        menu.classList.toggle("menu-aberto");

        const aberto = menu.classList.contains("menu-aberto");
        botaoMenu.textContent = aberto ? "✕" : "☰";
        botaoMenu.setAttribute("aria-expanded", aberto);
    });
}