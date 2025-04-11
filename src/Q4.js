/*Implemente um conversor de números decimais para binários utilizando uma pilha*/

import Pilha from "./Pilha";

class Q4 {
    converter(num) {
        if (num === 0) return "0";

        const pilha = new Pilha(32); 
        let binario = "";

        while (num > 0) {
            pilha.push(num % 2);
            num = Math.floor(num / 2);
        }

        while (!pilha.isEmpty()) {
            binario += pilha.pop();
        }

        return binario;
    }
}

export default Q4;