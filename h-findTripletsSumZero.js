const arr = [0, -1, 2, -3, 1]
const output = []
function findTriplets(n) {
    for (i = 0; i < n.length - 2; i++) {
        for (j = i + 1; j < n.length - 1; j++) {
            for (k = j + 1; k < n.length; k++) {
                if (n[i] + n[j] + n[k] === 0) {
                    found = true;
                    output.push([n[i], n[j], n[k]]);
                }
            }
        }
    }

    return output;
}
const result = findTriplets(arr)
console.log(result)