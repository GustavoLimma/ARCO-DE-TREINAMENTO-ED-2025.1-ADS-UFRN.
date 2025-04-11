import Q3 from "../src/Q3";

let q3;

beforeEach(() => {
    q3 = new Q3();
})

test("Troca topo e base de uma pilha com vários elementos", () => {
    q3.p1.push(1);
    q3.p1.push(2);
    q3.p1.push(3);
    q3.p1.push(4);
    q3.base_topo();
    expect(q3.p1.pop()).toBe(1); 
    expect(q3.p1.pop()).toBe(3);
    expect(q3.p1.pop()).toBe(2);
    expect(q3.p1.pop()).toBe(4); 
});
