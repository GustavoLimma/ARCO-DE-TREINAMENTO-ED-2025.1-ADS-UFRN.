import infixaParaPosfixa from "../src/Q6";

describe("Q6 - Conversão de expressão infixa para pós-fixa (RPN)", () => {
  test("Exemplo 1", () => {
    expect(infixaParaPosfixa("(a+(b*c))")).toBe("abc*+");
  });

  test("Exemplo 2", () => {
    expect(infixaParaPosfixa("((a+b)*(z+x))")).toBe("ab+zx+*");
  });

  test("Exemplo 3", () => {
    expect(infixaParaPosfixa("((a+t)*((b+(a+c))^(c+d)))")).toBe("at+bac++cd+^*");
  });

  test("Exemplo 4", () => {
    expect(infixaParaPosfixa("a+b*c-d")).toBe("abc*+d-");
  });

  test("Exemplo 5", () => {
    expect(infixaParaPosfixa("a*b-(c-d)+e")).toBe("ab*cd-e+");
  });
});
