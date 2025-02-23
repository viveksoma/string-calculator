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

    return numbers.split(delimiter).map(Number).reduce((sum, num) => sum + num, 0);
}