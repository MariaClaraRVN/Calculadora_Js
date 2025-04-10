/* Função do botão */

function outcome(){
    // Pega os valores dos inputs e transforma em número
    // e inicializa a variável total com 0
    let num1 = Number(document.getElementById('numero1').value)
    let num2 = Number(document.getElementById('numero2').value)
    let total = 0

    // Verifica qual operação foi selecionada e realiza o cálculo
    if (document.getElementById('soma').checked)
        total = num1 + num2
    else if (document.getElementById('subtracao').checked)
        total = num1 - num2
    else if (document.getElementById('multiplicacao').checked)
        total = num1 * num2
    else
        total = num1 / num2
    document.getElementById('resultado').innerHTML = '' + String(total)
}