import add from "../src/stringCalculator.js";

test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
});

test("returns the number itself when one number is provided", () => {
    expect(add("1")).toBe(1);
});

test("returns sum of two numbers", () => {
    expect(add("1,2")).toBe(3);
});

test("handles multiple numbers", () => {
    expect(add("1,2,3")).toBe(6);
});

test("handles new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
});

test("supports different delimiters", () => {
    expect(add("//;\n1;2;3")).toBe(6);
});