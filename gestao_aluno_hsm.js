$(document).ready(function(){
    $('#cpfAluno').mask('000.000.000-00');
    $('#telAluno').mask('(00) 0000-0000');
    $('#numMatricula').mask('00.000-0');
});

// Array reponsável por armazenar os objetos da classe Aluno
let alunos = [];  
class Turma {
    constructor (codigo, nomeTurma, descricao, turno) {
        this.codigo = codigo;
        this.nomeTurma = nomeTurma;
        this.descricao = descricao;
        this.turno = turno;
        this.alunosMatriculados = [];
    }
    // Método responsável por matrícular o aluno em uma determinada turma
    matricularAluno(matricula) {
        for ( let i = 0; i < alunos.length; i++) {
            if (alunos[i].matricula == matricula) {
                console.log(`${alunos[i].nomeAluno} foi matriculado(a) na turma de ${this.nomeTurma}.`);
                this.alunosMatriculados.push(alunos[i]);
            }
        }
    }
    // Método responsável por remover o aluno de uma determinada turma
    removerAluno(matricula) {
        for ( let i = 0; i < this.alunosMatriculados.length; i++) {
            if (matricula == this.alunosMatriculados[i].matricula) {
                console.log(`${this.alunosMatriculados[i].nomeAluno} foi removido(a) da turma ${this.nomeTurma}.`);
                this._alunosMatriculados.push(alunos[i]);
            }
        }
    }
}

// Cria uma nova instância de Turma
let turmaASD = new Turma ();
turmaASD.codigo = 'ASD01';
turmaASD.nomeTurma = 'Análise e Desenvolvimento de Sistemas';
turmaASD.descricao = 'Análise e Desenvolvimento de Sistemas se enquadra como um curso tecnológico da área de Informação e Comunicação.';
turmaASD.turno = 'Noturno';
$('.nTurma').text(turmaASD.nomeTurma);
$('.cTurma').text(turmaASD.codigo);

class Aluno {
    constructor (matricula, nomeALuno, cpf, dataNascimento, sexo, nomeMae, endereco) {
        this.matricula = matricula;
        this.nomeAluno = nomeAluno;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;
        this.nomeMae = nomeMae;
        this.endereco = endereco;
        this.nomePai = '';
        this.email = '';
        this.telefone = '';
    }
}

// Método responsável por gerar o número de matrícula já formatado
(function gerarMatricula() {
    const matriuculaAluno = document.querySelector('#matriculaAluno');
    let randomMin = Math.ceil(Math.random() * Math.pow(10,2));
    let randomMax = Math.ceil(Math.random() * Math.pow(10,3));
	let digito = Math.floor(Math.random() * 10);
    let nMatricula = randomMin + '.' + randomMax + '-' + digito;
    matriuculaAluno.value = nMatricula;
    console.log('Gerado o número de mátricula: ' + nMatricula);
    $('#matriculaAluno').attr('disabled', true);
})();

// Atribui um evento de click que realiza o cadastro dos dados do aluno
let btnCadastrarAluno = document.querySelector('.btnCadastrarAluno'); 
btnCadastrarAluno.addEventListener('click', () => {
    let na = new Aluno();
    na.matricula = document.querySelector('#matriculaAluno').value;
    na.nomeAluno = document.querySelector('#nomeAluno').value;
    na.cpf = document.querySelector('#cpfAluno').value;
    na.dataNascimento = document.querySelector('#dataNascimento').value;
    na.sexo = document.querySelector('#sexoAluno').value;
    na.nomeMae = document.querySelector('#maeAluno').value;
    console.log(na);
    alunos.push(na);
    console.log(alunos);
});

let matriculados = 0; 
let btnMatricularAluno = document.querySelector('.btnMatricularAluno');
btnMatricularAluno.addEventListener('click', () => {
    let numMatricula = document.querySelector('#numMatricula').value;
    try {
        if(numMatricula == '') throw 'Informe um número de matrícula'
        turmaASD.matricularAluno(numMatricula);
        matriculados++;
        console.log(turmaASD);
        $('.qtdMatriculados').text(matriculados);
        $('.responseMatricula').text('Aluno matrículado com sucesso!');
        $('.responseMatricula').css('color', 'var(--color-green)');
    console.log(matriculados);
    } catch (error) {
        $('.responseMatricula').text('Error: ' + error);
        $('.responseMatricula').css('color', 'red');
    }
    
    
});

let btnRemoverAluno = document.querySelector('.btnRemoverAluno'); 
btnRemoverAluno.addEventListener('click', () => {
    let numMatricula = document.querySelector('#numMatricula').value;
    turmaASD.removerAluno(numMatricula);
    matriculados--;
    console.log(turmaASD);
    $('.qtdMatriculados').text(matriculados);
    console.log(matriculados);
});