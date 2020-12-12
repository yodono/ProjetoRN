import { conexaoFS } from './conexaoFB';

export class AlunoFB{
    state = {
        colecao: conexaoFS.collection('AlunosFirestore/perfis/aluno')
    };

    pegarAluno(){
        return this.state.colecao;
    }

    adicionarAluno(aluno){
        this.state.colecao.add(aluno);
    }

    editarAluno(aluno){
        const {id} = aluno;
        delete aluno.id;

        this.state.colecao.doc(id).update(aluno);
    }

    removerAluno(aluno){
        this.state.colecao.doc(aluno.id).delete();
    }
}