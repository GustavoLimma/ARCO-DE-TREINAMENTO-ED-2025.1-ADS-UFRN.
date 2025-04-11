
import Pilha from "../src/Pilha";
import Q1 from "../src/Q1";

let q1;

beforeEach(() => {
    q1 = new Q1();
})

test("Inverte uma palavra simples", () => {
    expect(q1.inverter("abacaxi")).toBe("ixacaba");
});

test("Inverte uma palavra com letras repetidas", () => {
    expect(q1.inverter("banana")).toBe("ananab");
});