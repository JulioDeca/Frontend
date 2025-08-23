// Calculadora Simples em J

//  Duas variáveis para os números
let numero1 = 10;
let numero2 = 5;

// Agora eu faço as operações básicas
let soma = numero1 + numero2; 
let subtracao = numero1 - numero2; 
let multiplicacao = numero1 * numero2; 

// Nao pode conter o numero "0"
let divisao;

if (numero2 !== 0) {
    divisao = numero1 / numero2;
} else {
    divisao = "Não é possível dividir por zero";
}

// Resultados no console
console.log("Número 1: " + numero1);
console.log("Número 2: " + numero2);
console.log("Soma: " + soma);
console.log("Subtração: " + subtracao);
console.log("Multiplicação: " + multiplicacao);
console.log("Divisão: " + divisao);
