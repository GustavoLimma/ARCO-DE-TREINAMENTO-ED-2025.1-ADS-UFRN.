/*QUESTÃO 3. Implemente uma função que troca de lugar o elemento que está no topo da pilha
com o elemento que está na base da pilha. Usar apenas uma pilha como auxiliar. */

import Pilha from "./Pilha";

class Q3 {
    constructor() {
        this.p1 = new Pilha(10);
    }

    base_topo() {
        if (this.p1.topo <= 1) return;

        const baseIndex = 0;
        const topoIndex = this.p1.topo - 1;

        const aux = this.p1.dados[baseIndex];
        this.p1.dados[baseIndex] = this.p1.dados[topoIndex];
        this.p1.dados[topoIndex] = aux;
    }
}

export default Q3;