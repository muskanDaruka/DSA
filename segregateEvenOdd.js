const arr = [7, 2, 9, 4, 6, 1, 3, 8, 5]

function segregateEvenOdd(n) {
    let output = []
    for (let i = 0; i < n.length; i++) {
        if (n[i] % 2 === 0) {
            output.push(n[i]);
        }
    }
    for (let i = 0; i < n.length; i++) {
        if (n[i] % 2 !== 0) {
            output.push(n[i]);
        }
    }
    return output;
}
const result = segregateEvenOdd(arr)
console.log(result);