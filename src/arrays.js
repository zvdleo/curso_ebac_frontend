const alunos = [
    { nome: 'João', nota: 8 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Pedro', nota: 7 },
    { nome: 'Ana', nota: 6 },
    { nome: 'Carlos', nota: 4 }
];

function alunosAprovados(arrayDeAlunos) {

    const aprovados = arrayDeAlunos.filter(aluno => aluno.nota >= 6);
    return aprovados;
}

const alunosAprovadosArray = alunosAprovados(alunos);

console.log('Alunos aprovados:');
console.log(alunosAprovadosArray);