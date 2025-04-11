import Pilha from "../Pilha.js";
import Q7 from "../Q7.js";

describe("Q7 - Remover duplicatas de uma pilha", () => {
  test("Remove duplicatas mantendo a primeira ocorrência", () => {
    const entrada = new Pilha(10);
    [3, 7, 3, 2, 7, 1, 4, 2].forEach(n => entrada.push(n));

    const resultado = Q7.removerDuplicatas(entrada);
    const esperada = [3, 7, 2, 1, 4];

    const resultadoArray = [];
    while (!resultado.isEmpty()) {
      resultadoArray.unshift(resultado.pop());
    }

    expect(resultadoArray).toEqual(esperada);
  });

  test("Pilha vazia", () => {
    const entrada = new Pilha(10);
    const resultado = Q7.removerDuplicatas(entrada);
    expect(resultado.isEmpty()).toBe(true);
  });
});
