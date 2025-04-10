/*QUESTÃO 3. Implemente uma função que troca de lugar o elemento que está no topo da pilha
com o elemento que está na base da pilha. Usar apenas uma pilha como auxiliar. */

import Pilha from "./Pilha";

class Q3{
   
    constructor(){
        this.p1 = new Pilha;
        this.p_aux = new Pilha;
    }

    base_topo(){
        return this.p1.length <= 1;

        let tp = this.p1.pop();

        while(this.p1.length !== 1){
            this.p_aux.push(this.p1.pop());
        }

        let bs = this.p1.pop();

        this.p1.push(tp);
        
        while(!this.p_aux.isEmpty()){
            this.p1.push(this.p_aux.pop())
        }

        this.p1.push(bs);
    }
}