export function salvarRota(hash) {
    localStorage.setItem(
        "ultimaRota",
        JSON.stringify({ hash: hash })
    );
}

export function lerRota() {
    const texto = localStorage.getItem("ultimaRota");
    return texto ? JSON.parse(texto) : null;
}