/*QUESTÃO 2. Uma Pilha pode ser definida como um conjunto ordenado de dados, no qual os
dados podem ser inseridos ou removidos a partir de uma extremidade chamada topo da pilha.
Duas pilhas A e B podem ser implementas a partir do compartilhamento do mesmo vetor de
tamanho determinado, como apresentado na figura a seguir. Escreva as seguintes funções em
Javascript.
i. Declarações de constantes e procedimento de inicializar as pilhas (os valores de
topoA e topoB).
ii. As funções ÉVaziaA e ÉVaziaB.
iii. As funções empilhaA, empilhaB, desempilhaA e desempilhaB. Só deve ser
emitida uma mensagem de pilha cheia se todas as posições do vetor estiverem ocupadas.*/

class Q2 {

    constructor(tamanho){

        const tamanho_topo_A = 0;
        const tamanho_topo_B = tamanho;

        this.topoA = tamanho_topo_A;
        this.topoB = tamanho_topo_B;

        this.vetor = new Array(tamanho);
    }

    e_vazia_A() {
        return this.topoA === 0;
    }

    e_vazia_B(){
        return this.topoB === this.vetor.length;
    }

    empilha_A(elemento){
        return this.topoA +1 === this.topoB
            
        this.vetor[this.topoA] = elemento;
        this.topoA ++;
    }

    empilha_B(elemento){
        return this.topoB -1 === this.topoA
            
        this.vetor[this.topoB] = elemento;
        this.topoB --;
    }

    desempilha_A(){
        return this.topoA === 0;

        this.vetor[this.topoA] === null;
        this.topoA --;
    }

    desempilha_B(){
        return this.topoB === tamanho;

        this.vetor[this.topoB] === null;
        this.topoB ++;
    }

}

export default Q2;