const arr = [10, 11, 12];
const index = [1, 0, 2];
let result = [];

function reorderArray(n, index) {
    for (i = 0; i < n.length; i++) {
        result[index[i]] = n[i];
    }
    for (i = 0; i < n.length; i++) {
        n[i] = result[i];
    }
    return n;
}
const output = reorderArray(arr, index)
console.log(output);
