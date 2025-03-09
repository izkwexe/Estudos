function Formulario() {
    const nomeCompleto = `
        ${document.getElementById('valor01').value};
        ${document.getElementById('valor02').value};
        ${document.getElementById('valor03').value};
    `;

    document.getElementById('resultado').value = nomeCompleto;
}
