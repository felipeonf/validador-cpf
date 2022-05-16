function calcularModDigito(soma) {
    const TAMANHO_CPF = 11;
    const CONDICAO_MOD = 2;
    const VALOR_DEFAULT = 0;
    const resultado = soma % TAMANHO_CPF < CONDICAO_MOD ? VALOR_DEFAULT : TAMANHO_CPF - (soma % TAMANHO_CPF);
    return resultado;
}

function somar(n, num) {
    let soma = 0;
    const CONDICAO_PARADA = 1;
    for (let i = n; i > CONDICAO_PARADA; i--){
        soma += num.charAt(n - i) * i;
    }
    return soma
}

function validarCPF(CPF) {
    if (CPF.length != 11) {
        return false;
    }
    else {
        // validação do primeiro dígito        
        let numeros = CPF.substring(0, 9);
        let digitos = CPF.substring(9);
        let tamanhoSoma = numeros.length + 1;
        let soma = somar(tamanhoSoma, numeros);
        let resultado = calcularModDigito(soma);
        if (resultado != digitos.charAt(0)) {
            return false;
        }

        // validação do segundo dígito
        numeros = CPF.substring(0, 10);
        tamanhoSoma = numeros.length + 1;
        soma = somar(tamanhoSoma, numeros);
        resultado = calcularModDigito(soma);
        if (resultado != digitos.charAt(1)) {
            return false;
        }
    }
    return true;
}

function validacao() {
    document.getElementById("success").style.display = 'none';
    document.getElementById("error").style.display = 'none';

    const CPF = document.getElementById("cpf-digitado").value;
    const validar = validarCPF(CPF);

    if (validar) {
        document.getElementById("success").style.display = 'block';
    }
    else {
        document.getElementById('error').style.display = 'block';
    }
}
// 37142811854