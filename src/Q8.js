/*QUESTÃO  8.  Imagine  que  você  tem  um  conjunto  de  pratos  empilhados.  No  entanto,  por 
questões de organização, cada pilha só pode conter um número máximo capacidade de pratos. 
Se uma pilha atingir essa capacidade, uma nova pilha é criada. 
Implemente uma estrutura de dados PilhaDePratos que suporte as operações: 
empilha(int x): Adiciona um prato à última pilha disponível ou cria uma nova pilha, se necessário. 
desempilha(): Remove um prato da última pilha disponível e retorna seu valor. Se todas as pilhas 
estiverem vazias, retorne None. 
Entrada e Saída Esperadas: 
PilhaDePratos(3)  // Define a capacidade de cada pilha como 3   
empilha(5)   
empilha(10)   
empilha(15)   
empilha(20)  // Nova pilha criada   
desempilha()  // Retorna 20   
desempilha()  // // Retorna 15   */

import Pilha from "./Pilha.js";

class PilhaDePratos {
    constructor(capacidadePorPilha) {
        this.capacidade = capacidadePorPilha;
        this.pilhas = [new Pilha(this.capacidade)];
    }

    empilha(valor) {
        let ultimaPilha = this.pilhas[this.pilhas.length - 1];

        if (ultimaPilha.isFull()) {
            const novaPilha = new Pilha(this.capacidade);
            novaPilha.push(valor);
            this.pilhas.push(novaPilha);
        } else {
            ultimaPilha.push(valor);
        }
    }

    desempilha() {
        if (this.pilhas.length === 0) return null;

        let ultimaPilha = this.pilhas[this.pilhas.length - 1];

        while (ultimaPilha.isEmpty()) {
            this.pilhas.pop(); // remove pilhas vazias
            if (this.pilhas.length === 0) return null;
            ultimaPilha = this.pilhas[this.pilhas.length - 1];
        }

        return ultimaPilha.pop();
    }
}
export default PilhaDePratos;