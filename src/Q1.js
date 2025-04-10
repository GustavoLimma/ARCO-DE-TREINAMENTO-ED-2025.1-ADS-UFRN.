/*QUESTÃO 1: (ENADE 2014, Adaptada) Uma estrutura de dados do tipo pilha pode ser usada
em um algoritmo que permite imprimir uma palavra de forma invertida. Por exemplo, ABACAXI
deve ser impresso IXACABA. Utilizando uma pilha e suas operações base, desenvolva a função
inverte que recebe uma String e, utilizando as funções push e pop da pilha, retorne a palavra de
forma invertida. */

class Q1{
  
    constructor(){
      this.itens = [];
    }
    
    push(elemento){
      this.itens.push(elemento);
    }
    
    pop(){
      return this.itens.pop();
    }
    
    isEmpyt(){
      return this.itens.length === 0;
    }
  } 
  
  function inverter(palavra){
    
    let pilha = new Pilha();
    let resu = "";
    
    for (let letra of palavra){
      pilha.push(letra);
    }
    
    while(!pilha.isEmpyt()){
      resu += pilha.pop()
    }
    
    return resu;
  }
  
  console.log(inverter("abacaxi"));

export default Q1;