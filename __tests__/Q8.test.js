import PilhaDePratos from "../Q8.js";

describe("Q8 - Pilha de pratos com capacidade máxima", () => {
  test("Empilhar e desempilhar corretamente com múltiplas pilhas", () => {
    const pratos = new PilhaDePratos(3);

    pratos.empilha(5);
    pratos.empilha(10);
    pratos.empilha(15);
    pratos.empilha(20);

    expect(pratos.desempilha()).toBe(20);
    expect(pratos.desempilha()).toBe(15);
    expect(pratos.desempilha()).toBe(10);
    expect(pratos.desempilha()).toBe(5);
    expect(pratos.desempilha()).toBe(null); 
  });
});
