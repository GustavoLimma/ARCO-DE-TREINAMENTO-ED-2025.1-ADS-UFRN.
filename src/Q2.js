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
    constructor(tamanho) {
        this.vetor = new Array(tamanho).fill(null);
        this.topoA = 0;
        this.topoB = tamanho - 1;
        this.tamanho = tamanho;
    }

    empilha_A(valor) {
        if (this.topoA > this.topoB) throw new Error("Overflow");
        this.vetor[this.topoA++] = valor;
    }

    desempilha_A() {
        if (this.topoA === 0) throw new Error("Underflow");
        return this.vetor[--this.topoA];
    }

    empilha_B(valor) {
        if (this.topoA > this.topoB) throw new Error("Overflow");
        this.vetor[this.topoB--] = valor;
    }

    desempilha_B() {
        if (this.topoB === this.tamanho - 1) throw new Error("Underflow");
        return this.vetor[++this.topoB];
    }
}

export default Q2;