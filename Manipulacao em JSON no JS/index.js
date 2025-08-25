// 1. Criação de um Objeto JSON
let aluno = {
  nome: "João Silva",
  idade: 20,
  curso: "Ciência da Computação",
  notas: [7.5, 8.0, 9.0]
};

console.log("Nome do aluno:", aluno.nome);
console.log("Primeira nota:", aluno.notas[0]);

aluno.idade = 22; 
aluno.notas.push(10.0); 

let alunoString = JSON.stringify(aluno);
console.log("Aluno em formato JSON string:", alunoString);

let alunoObjeto = JSON.parse(alunoString);
console.log("Objeto convertido de volta:", alunoObjeto);

console.log("Propriedades do aluno:");
for (let prop in alunoObjeto) {
  console.log(prop + ":", alunoObjeto[prop]);
}

let soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
let media = soma / aluno.notas.length;
console.log("Média das notas:", media.toFixed(2));

aluno.endereco = {
  rua: "Rua das Flores, 123",
  cidade: "São Paulo",
  estado: "SP"
};

console.log("Cidade do aluno:", aluno.endereco.cidade);
console.log("Estado do aluno:", aluno.endereco.estado);

let alunos = [
  aluno,
  {
    nome: "Maria Oliveira",
    idade: 21,
    curso: "Engenharia",
    notas: [9.0, 8.5, 9.5],
    endereco: { rua: "Av. Central, 456", cidade: "Rio de Janeiro", estado: "RJ" }
  },
  {
    nome: "Carlos ",
    idade: 32,
    curso: "Matemática",
    notas: [6.0, 7.0, 6.5],
    endereco: { rua: "Rua do Portal Sol, 789", cidade: "Jampa", estado: "PB" }
  }
];
let alunosComMediaAlta = alunos.filter(al => {
  let somaNotas = al.notas.reduce((acc, nota) => acc + nota, 0);
  let mediaNotas = somaNotas / al.notas.length;
  return mediaNotas > 8;
});

console.log("Alunos com média acima de 8:", alunosComMediaAlta);
