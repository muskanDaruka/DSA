const arr = [10, 21, 22, 100, 101, 200, 300]
function countNumberOfTriangles(n) {
    let count = 0;
    for (i = 0; i < n.length; i++) {
        for (j = i + 1; j < n.length; j++) {
            for (k = j + 1; k < n.length; k++) {
                if (n[i] + n[j] > n[k] && n[j] + n[k] > n[i] && n[i] + n[k] > n[j]) {
                    count++;
                }
            }
        }
    }
    return count;
}
const output = countNumberOfTriangles(arr)
console.log(output);