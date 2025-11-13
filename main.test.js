import { capitalize, reverse, calculator } from "./main";

test("Capitalize the first letter in ivan", () => {
    const word = "ivan";
    expect(capitalize(word)).toBe("Ivan");
});

test("Capitalize the first letter in hello", () => {
    const word = "hello";
    expect(capitalize(word)).toBe("Hello");
});

test("Capitalize the first letter in laptop", () => {
    const word = "laptop";
    expect(capitalize(word)).toBe("Laptop");
});

test("Reverse the word ivan", () => {
    expect(reverse("ivan")).toBe("navi");
});

test("Reverse the word olleh", () => {
    expect(reverse("olleh")).toBe("hello");
});

test("Reverse the word Aspire", () => {
    expect(reverse("Aspire")).toBe("eripsA");
});

test("Calculator is an object", () => {
    expect(typeof(calculator)).toBe("object");
})

test("Calculator has add", () => {
    expect(Object.keys(calculator)).toContain("add");
});

test("Calculator has subtract", () => {
    expect(Object.keys(calculator)).toContain("subtract");
});

test("Calculator has divide", () => {
    expect(Object.keys(calculator)).toContain("divide");
});

test("Calculator has multiply", () => {
    expect(Object.keys(calculator)).toContain("multiply");
});

test("Calculator add 1 + 2 is equal to 3", () => {
    expect(calculator.add(1,2)).toBe(3);
});

test("Calculator add 4 + 6 is equal to 10", () => {
    expect(calculator.add(4,6)).toBe(10);
});

test("Calculator subtract 10 - 4 is equal to 6", () => {
    expect(calculator.subtract(10,4)).toBe(6);
});

test("Calculator subtract 37 - 12 is equal to 25", () => {
    expect(calculator.subtract(37,12)).toBe(25);
});

test("Calculator divide 12 / 3 is equal to 4", () => {
    expect(calculator.divide(12,3)).toBe(4);
});

test("Calculator divide 64 / 8 is equal to 8", () => {
    expect(calculator.divide(64,8)).toBe(8);
});