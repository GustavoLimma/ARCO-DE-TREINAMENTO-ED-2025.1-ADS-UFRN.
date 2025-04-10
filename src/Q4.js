/*Implemente um conversor de números decimais para binários utilizando uma pilha*/

import Pilha from "./Pilha";

class Q4 {
    constructor() {
        this.pilha_bin = new Pilha();
    }

    converter(decimal) {
        if (decimal === 0) {
            this.pilha_bin.push(0);
        } else {
            while (decimal > 0) {
                let resto = decimal % 2;
                this.pilha_bin.push(resto);
                decimal = Math.floor(decimal / 2);
            }
        }

        let binario = "";
        while (!this.pilha_bin.isEmpty()) {
            binario += this.pilha_bin.pop();
        }

        return binario;
    }
}

export default Q4;
