const arr = [10, 5, 6, 3, 2, 20, 100, 80]
function sortInWave(n) {
    arr.sort((a, b) => a - b);

    for (let i = 0; i < n.length - 1; i += 2) {
        const temp = n[i];
        n[i] = n[i + 1];
        n[i + 1] = temp;
    }
    return n;
}
const result = sortInWave(arr)
console.log(result);