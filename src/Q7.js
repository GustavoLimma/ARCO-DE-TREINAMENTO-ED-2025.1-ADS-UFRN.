/*QUESTÃO 7. Dada uma pilha contendo números inteiros, implemente uma função que remova 
todos os elementos duplicados, mantendo apenas a primeira ocorrência de cada número (mais 
próxima do topo). A solução deve preservar a ordem relativa dos elementos originais. 
Entrada: 
Uma lista de números representando a pilha (o último elemento da lista representa o topo). 
Saída: 
Uma lista representando a pilha resultante após a remoção de duplicatas. 
Exemplo: 
Entrada: [3, 7, 3, 2, 7, 1, 4, 2]   
Saída: [3, 7, 2, 1, 4]*/

import Pilha from "./Pilha.js";

class Q7 {

    static removerDuplicatas(pilhaOriginal) {
        const vistos = new Set();
        const temp = new Pilha(pilhaOriginal.length());
        const final = new Pilha(pilhaOriginal.length());

        while (!pilhaOriginal.isEmpty()) {
            const valor = pilhaOriginal.pop();
            if (!vistos.has(valor)) {
                vistos.add(valor);
                temp.push(valor);
            }
        }

        while (!temp.isEmpty()) {
            final.push(temp.pop());
        }

        return final;
    }
}

export default Q7;