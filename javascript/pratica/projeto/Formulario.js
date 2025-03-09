/*function Forbes() {
    const Valor01 = document.getElementById('valor01').value;
    const Valor02 = document.getElementById('valor02').value;

    const result = Valor01 + Valor02;
        document.getElementById('result').textContent = `O resultado é de ${result}`;
};*/
/*function Form () {
    const Valor01 = document.getElementById('valor01').value;
    const Valor02 = document.getElementById('valor02').value;
    const Valor03 = document.getElementById('valor03').value;
    const Valor04 = Number(document.getElementById('valor04').value);
    const Valor05 = document.getElementById('valor05').value;
        const nomeCompleto = `${Valor01} ${Valor02} ${Valor03}`;
        const ano = 2025 - Valor04 ;
        const profissao = Valor05

            document.getElementById('result').textContent = `O processo gerou a ficha =>
                Nome completo : ${nomeCompleto}
                Ano de nascimento : ${ano}
                Profissão : ${profissao}
            
            `
};*/
function Formulario() {
    const nomeCompleto = `
        ${document.getElememtById('valor01').value};
        ${document.getElememtById('valor02').value};
        ${document.getElememtById('valor03').value};
    `;


    document.getElememtById('resultado').value = nomeCompleto;

}
