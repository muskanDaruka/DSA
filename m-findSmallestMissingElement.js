const arr = [0, 1, 2, 3, 4, 5, 6, 7, 10];
const n = 9;
const m = 11;
function findSmallestMissing(arr, n, m) {
    for (let i = 0; i < n; i++) {
        if (arr[i] !== i) {
            return i;
        }
    }
    return n;
}
const result = findSmallestMissing(arr, n, m);
console.log(result);