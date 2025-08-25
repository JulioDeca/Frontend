let notas = [6.5, 7.0, 8.0, 9.5, 5.0];
console.log("Notas iniciais: " + notas);

console.log("Primeira nota: " + notas[0]);
console.log("Última nota: " + notas[notas.length - 1]);

notas.push(10.0);
console.log("Depois de adicionar uma nota: " + notas);

notas.shift();
console.log("Depois de remover a primeira nota: " + notas);

console.log("Notas:");
notas.forEach(function(nota) {
    console.log(nota);
});

//média
let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i];
}
let media = soma / notas.length;
console.log("Média: " + media);

// maior que 7
let maiorQueSete = notas.filter(function(nota) {
    return nota > 7;
});
console.log("Notas maiores que 7: " + maiorQueSete);

let notasOrdenadas = notas.sort(function(a, b) {
    return a - b;
});
console.log("Notas ordenadas: " + notasOrdenadas);

console.log("Tem a nota 6.5? " + notas.includes(6.5));

console.log("Índice da nota 8.0: " + notas.indexOf(8.0));

let quadrado = notas.map(function(nota) {
    return nota * nota;
});
console.log("Notas ao quadrado: " + quadrado);
