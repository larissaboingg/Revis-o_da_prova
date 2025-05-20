
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
for (let i = 10; i >= 0; i--) {
    alert(i);
  } 
  alert("lançamento");  

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
let numeros = [];
for (let i = 0; i < 4; i++) {
  let numero = parseInt(prompt("Digite o " + (i + 1) + "º número inteiro:"));
  numeros.push(numero);
}
numeros.sort(function(a, b) {
  return b - a;
});
alert("Números em ordem decrescente: " + numeros.join(", "));


// Atividade 5 -  Transformador de Par em Ímpar  
let n = parseInt(prompt("Digite um número:"));
function parimpar(n) {
  if (n % 2 === 0) {
     return ("Par");
  } else {
     return ("Ímpar");
  }
}
console.log("O número é: " + parimpar(n));

// Atividade 6 -  Vogal ou Consoante  
let letra = prompt("Digite uma letra:");

let vogais = ["a","e","i","o","u","A","E","I","O","U"];

if (vogais.includes(letra)) {
  alert("É uma vogal.");
} else {
  alert("É uma consoante.");
}

// Atividade 7 - Cardápio da Picoleteria
let sabor = prompt("Digite o sabor do picolé:");

if (sabor == "chocolate") {
    console.log("Preço: R$1,50");
} else if (sabor == "morango") {
    console.log("Preço: R$2,50");
} else if (sabor == "creme") {
    console.log("Preço: R$2,50");
} else if (sabor == "manga") {
    console.log("Preço: R$3,20");
} else if (sabor == "melancia") {
    console.log("Preço: R$3,40");
} else if (sabor == "vanilla Ice") {
    console.log("Preço: R$3,00");
} else if (sabor == "ceu Azul") {
    console.log("Preço: R$3,60");
} else if (sabor == "brownie") {
    console.log("Preço: R$4,00");
} else if (sabor == "hawaiano") {
    console.log("Preço: R$5,00");
} else {
    console.log("Sabor não encontrado.");
}

// Atividade 8 - Jogo de Adivinhação
let numeroSecreto=Math.floor(Math.random()*100)+1;
let palpite=0;
while(palpite !== numeroSecreto) {
  palpite=parseInt(prompt("adivinhe o número de 1 a 100:"));
  if (palpite<numeroSecreto) {
    alert("o numero é maior");
  } else if (palpite > numeroSecreto) {
    alert("o numero é menor");
  } else {
    alert("parabéns,você acertou");
  }
}

// Atividade 9 - Contador de Vogais
let frase = prompt("Digite uma frase:");
let contador = 0;
for (let i = 0; i < frase.length; i++) {
  let letra = frase[i];
  if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u" || letra === "A" || letra === "E" || letra === "I" || letra === "O" || letra === "U") {
    contador++;
  }
}
console.log("a frase tem " + contador + " vogais");

//Atividade 10 - Validador de Senha
let senha = prompt("Digite sua senha:");

if (
  senha.length >= 8 &&
  senha.match(/[a-z]/) &&   
  senha.match(/[A-Z]/) &&  
  senha.match(/[0-9]/)      
) {
  console.log("senha valida");
} else {
  console.log("senha invalida");
}

//Atividade 11 - Tabuada Inteligente
let numerotab = parseInt(prompt("Digite um número:"));

for (let i = 1; i <= 10; i++) {
  let resultado = numerotab * i;
  console.log(numerotab + " x " + i + " = " + resultado);
}

//Atividade 12 - Cadastro de Produtos 
let nome1 = prompt("Digite o nome do 1º produto:");
let preco1 = parseFloat(prompt("Digite o preço do 1º produto:"));

let nome2 = prompt("Digite o nome do 2º produto:");
let preco2 = parseFloat(prompt("Digite o preço do 2º produto:"));

let nome3 = prompt("Digite o nome do 3º produto:");
let preco3 = parseFloat(prompt("Digite o preço do 3º produto:"));

let nome4 = prompt("Digite o nome do 4º produto:");
let preco4 = parseFloat(prompt("Digite o preço do 4º produto:"));

let nome5 = prompt("Digite o nome do 5º produto:");
let preco5 = parseFloat(prompt("Digite o preço do 5º produto:"));

let total = preco1 + preco2 + preco3 + preco4 + preco5;

let mensagem = "Produtos cadastrados:\n\n";
mensagem += nome1 + " - R$ " + preco1.toFixed(2) + "\n";
mensagem += nome2 + " - R$ " + preco2.toFixed(2) + "\n";
mensagem += nome3 + " - R$ " + preco3.toFixed(2) + "\n";
mensagem += nome4 + " - R$ " + preco4.toFixed(2) + "\n";
mensagem += nome5 + " - R$ " + preco5.toFixed(2) + "\n";

mensagem += "\nTotal do carrinho: R$ " + total.toFixed(2);

console.log(mensagem);
