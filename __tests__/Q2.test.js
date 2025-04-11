import Q2 from "../src/Q2";

let q2;

beforeEach(() => {
    q2 = new Q2(6);
})

test("Empilha e desempilha corretamente na pilha A", () => {
    q2.empilha_A(1);
    q2.empilha_A(2);
    expect(q2.desempilha_A()).toBe(2);
});

test("Empilha e desempilha corretamente na pilha B", () => {
    q2.empilha_B(9);
    q2.empilha_B(8);
    expect(q2.desempilha_B()).toBe(8);
});
