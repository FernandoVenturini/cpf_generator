//Setando o paragrafo onde vai aparecer o CPF:
const cpfEl = document.querySelector("#cpf");
// Setando o botao que vai gerar o cpf:
const gerarCpfBtn = document.querySelector("#gerar-cpf");
// Setando o botao que vai copiar o cpf:
const copiarCpfBtn = document.querySelector("#copiar-cpf");

// Criando a funcao que vai gerar o cpf:
function gerarCpf() {
    let n = Math.floor(Math.random() * 999999999) + 1;
    let nStr = n.toString().padStart(9, "0");
    let dv1 = calcularDV(nStr, 10);
    let dv2 = calcularDV(nStr + dv1, 11);

    cpfEl.innerText = formatarCPF(nStr + dv1 + dv2);// Mostrando o resultado na tela
}

// Criando funcao calular DV:
function calcularDV(numero, peso) {
    let total = 0;
    for(let i = 0; i < numero.length; i++) {
        total += parseInt(numero.charAt(i)) * peso--;
    }
    let resto = total % 11;
    return resto < 2 ? 0 : 11 - resto;
}

// Formatando o cpf:
function formatarCPF() {
    const regex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
    return  cpfEl.replace(regex, "$1.$2.$3.-$4");
}

// Gerando o cpf quando clicar no botao:
gerarCpfBtn.addEventListener('click',gerarCpf);