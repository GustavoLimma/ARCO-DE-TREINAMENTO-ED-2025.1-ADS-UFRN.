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

class Dual_Stack{

    constructor(size){
        this.size = size
        this.data = new Array(size)
        this.topA = 0
        this.topB = size
    }

    isEmptyA(){
        return this.topA === 0
    }

    isEmptyB(){
        return this.topB === this.size
    }

    pushA(element){
        if(this.topA+1 === this.topB){
            return 'StackA OverFlow'
        }
        this.data[this.topA] = element
        this.topA++
    }

    pushB(element){
        if(this.topB-1 === this.topA){
            return 'StackB OverFlow'
        }
        this.data[this.topA] = element
        this.topB--
    }
    
    popA(){
        if(this.isEmptyA){
            'StackA UnderFlow'
        }
        this.topA--;
        let result = this.data[this.topA]
        delete this.data[this.topA]
        
        return result
    }

    popB(){
        if(this.isEmptyA){
            'StackA UnderFlow'
        }
        this.topB++;
        let result = this.data[this.topB]
        delete this.data[this.topB]
        
        return result
    }

}