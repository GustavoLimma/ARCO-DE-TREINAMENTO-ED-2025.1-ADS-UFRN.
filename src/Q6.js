/*QUESTÃO 6. A Notação Polonesa Reversa (RPN, do inglês Reverse Polish Notation) é uma
notação matemática onde cada operador segue todos os seus operandos. Por exemplo, para
somar três e quatro, alguém escreveria "3 4 +" em vez de "3 + 4". Se houver múltiplas operações,
o operador é dado imediatamente após seu segundo operando; então a expressão "3 - 4 + 5"
seria escrita como "3 4 - 5 +", primeiro subtraindo 4 de 3 e depois adicionando 5 a isso.
Desenvolva um método que transforme a expressão algébrica com parênteses em uma forma
RPN. Você pode supor que para os casos de teste abaixo apenas letras simples serão usadas e
colchetes [] não serão utilizados. A ordem de precedência de operadores é muito importante e
não deve ser ignorada.

Entrada Saída
(a+(b*c)) abc*+
((a+b)*(z+x)) ab+zx+*
((a+t)*((b+(a+c))^(c+d))) at+bac++cd+^*
a+b*c-d abc*+d-
(a+b)+c/d ab+cd/+
a*b-(c-d)+e ab*cd-e+
*/

import Pilha from "../../Pilha.js";

// Mapa de precedência dos operadores
const operadores = new Map([
  ["+", 1],
  ["-", 1],
  ["*", 2],
  ["/", 2],
]);

const infixaParaPosfixa = (expressao) => {
  const pilha = new Pilha(20);
  let saida = "";

  for (const token of expressao) {
    if (token === " ") continue;

    if (/[a-zA-Z0-9]/.test(token)) {
      saida += token;
    } else if (token === "(") {
      pilha.push(token);
    } else if (token === ")") {
      while (!pilha.isEmpty() && pilha.top() !== "(") {
        saida += pilha.top();
        pilha.pop();
      }
      pilha.pop(); // remove '('
    } else if (operadores.has(token)) {
      while (
        !pilha.isEmpty() &&
        pilha.top() !== "(" &&
        operadores.has(pilha.top()) &&
        operadores.get(token) <= operadores.get(pilha.top())
      ) {
        saida += pilha.top();
        pilha.pop();
      }
      pilha.push(token);
    }
  }

  while (!pilha.isEmpty()) {
    saida += pilha.top();
    pilha.pop();
  }

  return saida;
};

export default infixaParaPosfixa;
