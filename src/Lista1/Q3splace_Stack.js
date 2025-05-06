/*QUESTÃO 3. Implemente uma função que troca de lugar o elemento que está no topo da pilha
com o elemento que está na base da pilha. Usar apenas uma pilha como auxiliar. */

import Stack from "./Stack";

class Replace{

    constructor(){
        this.aux = new Stack()
    }

    replaced(pilha){
        if (pilha.isEmpty()) return

        let topoA = pilha.pop()

        while(!pilha.isEmpty()){
            this.aux.push(pilha.pop())
        }

        let topoB = this.aux.pop()

        pilha.push(topoA)

        while(!this.aux.isEmpty()){
            this.pilhax.push(aux.pop())
        }

        pilha.push(topoB)
    }
    
}