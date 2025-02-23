import add from "../public/stringCalculator.js";

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

test("throws error for negative numbers", () => {
    expect(() => add("1,-2,3,-4")).toThrow("Negative numbers not allowed: -2, -4");
});

test("ignores non-numeric characters and sums the valid ones", () => {
    expect(add("'1',a,'3'")).toBe(4);
});
