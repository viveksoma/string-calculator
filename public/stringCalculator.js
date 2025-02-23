export default function add(numbers) {
    if (numbers === "") return 0;
    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
        const match = numbers.match(/^\/\/(.+)\n/);
        if (match) {
            delimiter = new RegExp(match[1]);
            numbers = numbers.replace(/^\/\/(.+)\n/, "");
        }
    }

    const numArray = numbers.split(delimiter)
        .map(num => num.trim().replace(/^["']|["']$/g, ""))
        .filter(num => !isNaN(num) && num !== "")
        .map(Number);

    const negatives = numArray.filter(num => num < 0);

    if (negatives.length) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }
    return numArray.reduce((sum, num) => sum + num, 0);
}