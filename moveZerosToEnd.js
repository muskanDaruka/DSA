const arr = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9]
let output = [];
function moveZerosToEnd(n) {
    for (let i = 0; i < n.length; i++) {
        if (n[i] !== 0) {
            output.push(n[i]);
        }
    }
    for (let i = 0; i < n.length; i++) {
        if (n[i] === 0) {
            output.push(n[i]);
        }
    }
    return output;
}
const result = moveZerosToEnd(arr);
console.log(result);