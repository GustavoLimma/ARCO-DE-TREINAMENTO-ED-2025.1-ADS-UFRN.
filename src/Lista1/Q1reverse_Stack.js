/*QUESTÃO 1: (ENADE 2014, Adaptada) Uma estrutura de dados do tipo pilha pode ser usada
em um algoritmo que permite imprimir uma palavra de forma invertida. Por exemplo, ABACAXI
deve ser impresso IXACABA. Utilizando uma pilha e suas operações base, desenvolva a função
inverte que recebe uma String e, utilizando as funções push e pop da pilha, retorne a palavra de
forma invertida. */

import Stack from "./Stack";

class Reverse{

    constructor(){
        this.p = new Stack(15)
    }

    reverse_string(name){
        for (let char of name){
            this.p.push(char)
        }

        let reverse = ''
        
        while(!this.p.isEmpty()){
            reverse += this.p.pop()
        }

        return reverse
    }
}