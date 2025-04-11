/*QUESTÃO 1: (ENADE 2014, Adaptada) Uma estrutura de dados do tipo pilha pode ser usada
em um algoritmo que permite imprimir uma palavra de forma invertida. Por exemplo, ABACAXI
deve ser impresso IXACABA. Utilizando uma pilha e suas operações base, desenvolva a função
inverte que recebe uma String e, utilizando as funções push e pop da pilha, retorne a palavra de
forma invertida. */
import Pilha from "./Pilha";

class Q1 {
    inverter(palavra) {
        const pilha = new Pilha(palavra.length);
        for (let letra of palavra) {
            pilha.push(letra);
        }

        let invertida = "";
        while (!pilha.isEmpty()) {
            invertida += pilha.pop();
        }

        return invertida;
    }
}

export default Q1;