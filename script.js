// Atividade 1 - Somador de Números
let numero = prompt ("Digite quantos numeros deseja somar?");
let soma = 0;
let x = 1;
while (x<=numero){
    let n = parseInt(prompt ("numero para soma:"))
    soma = soma + n 
    x = x + 1
}
console.log("A soma dos números é de:" + soma)

// Atividade 2 - Contagem Regressiva da NASA

// Atividade 3 - Balanço Financeiro Anual
let x1 = 1;
let somatorio_bruto = 0;
let somatorio_gasto = 0;
saldo = 0;
while (x1<=12){
let bruto = parseInt(prompt("Qual o ganho bruto da sua empresa no mês " + x ));
somatorio_bruto = somatorio_bruto + bruto;
let gasto = parseInt(prompt("Qual o gasto mensal da sua empresa no mês " + x ));
somatorio_gasto = somatorio_gasto + gasto ;
x1 = x1 + 1
}
console.log("O total bruto é de: " + somatorio_bruto);
console.log("O total de gastos mensais durante o ano é de:" + somatorio_gasto);
saldo = somatorio_bruto - somatorio_gasto;
if (saldo <= 0){
    console.log ("Sua empresa teve prejuizo");
} else {
    console.log ("Sua empresa teve lucro");
}

// Atividade 4 - Números em Ordem Decrescente 
