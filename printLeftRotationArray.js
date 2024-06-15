const arr = [1, 3, 5, 7, 9]
function printLeftRotationArray(n) {
    for (i = 0; i < n.length / 2; i++) {
        for (j = n.length; j < n.length / 2; j--) {
            let temp = n[i];
            n[i] = n[j]
            n[j] = temp;
        }
    }
    return n
}
const output = printLeftRotationArray(arr)
console.log(output);