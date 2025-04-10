/*QUESTÃO 5. É possível analisar se uma sequência parêntesis e colchetes está bem-formada, 
ou seja, parênteses e colchetes são fechados na ordem inversa àquela em que foram abertos 
utilizando uma pilha.  Por exemplo, a sequência [ ( ) [ ( ) ] ] ( ) está bem-formada, enquanto   ( ( ) 
]   está malformada.  Implemente um programa que recebe um texto e analisa se ele está bem 
formado em termos de ordem de parêntesis e colchetes.*/

import Pilha from "./Pilha";


class Q5 {
    constructor() {
        this.pilha_seq = new Pilha();
    }

    sequencia(seq) {
        for (let i = 0; i < seq.length; i++) {
            let char = seq[i];

            if (char === '(' || char === '[') {
                this.pilha_seq.push(char); 
            } else if (char === ')' || char === ']') {
                if (this.pilha_seq.isEmpty()) return false; 

                let topo = this.pilha_seq.pop();

                
                if (
                    (char === ')' && topo !== '(') ||
                    (char === ']' && topo !== '[')
                ) {
                    return false; 
                }
            }
        }

        
        return this.pilha_seq.isEmpty();
    }
}

export default Q5;
