import add from "./stringCalculator.js"; // Correct way to import

document.getElementById("calculate").addEventListener("click", () => {
    const input = document.getElementById("inputNumbers").value;
    try {
        document.getElementById("result").textContent = "Result: " + add(input);
    } catch (error) {
        document.getElementById("result").textContent = error.message;
    }
});