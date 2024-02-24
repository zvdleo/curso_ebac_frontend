"use strict";

var alunos = [{
  nome: 'João',
  nota: 8
}, {
  nome: 'Maria',
  nota: 5
}, {
  nome: 'Pedro',
  nota: 7
}, {
  nome: 'Ana',
  nota: 6
}, {
  nome: 'Carlos',
  nota: 4
}];
function alunosAprovados(arrayDeAlunos) {
  var aprovados = arrayDeAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
  return aprovados;
}
var alunosAprovadosArray = alunosAprovados(alunos);
console.log('Alunos aprovados:');
console.log(alunosAprovadosArray);