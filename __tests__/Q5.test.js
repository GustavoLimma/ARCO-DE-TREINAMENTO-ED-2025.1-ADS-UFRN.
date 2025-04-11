import Q5 from "../src/Q5";

describe("Q5 - Verificação de sequência bem-formada de parênteses e colchetes", () => {
  let verificador;

  beforeEach(() => {
    verificador = new Q5();
  });

  test("Sequência bem-formada: [ ( ) [ ( ) ] ] ( )", () => {
    expect(verificador.sequencia("[()[( )]]()")).toBe(true);
  });

  test("Sequência malformada: ( ( ) ]", () => {
    expect(verificador.sequencia("(()]")).toBe(false);
  });

  test("Sequência vazia", () => {
    expect(verificador.sequencia("")).toBe(true);
  });

  test("Sequência malformada: apenas abertura", () => {
    expect(verificador.sequencia("(((")).toBe(false);
  });

  test("Sequência malformada: fechamento extra", () => {
    expect(verificador.sequencia("())")).toBe(false);
  });
});
