import add from "../src/stringCalculator.js";

test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
});