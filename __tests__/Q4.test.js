import Q4 from "../src/Q4";

let q4;

beforeEach(() => {
    q4 = new Q4();
})

test("Converte 0 para binário", () => {
    expect(q4.converter(0)).toBe("0");
});

test("Converte 1 para binário", () => {
    expect(q4.converter(1)).toBe("1");
});

test("Converte 10 para binário", () => {
    expect(q4.converter(10)).toBe("1010");
});

test("Converte 255 para binário", () => {
    expect(q4.converter(255)).toBe("11111111");
});