const arr = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1]
function rearrangeArray(n) {
    for (i = 0; i < n.length; i++) {
        for (j = 0; j < n.length; j++) {
            if (n[j] == i) {
                let temp = n[j];
                n[j] = n[i];
                n[i] = temp;
                break;
            }
        }
    }
    for (i = 0; i < n.length; i++) {
        if (n[i] != i) {
            n[i] = -1;
        }
    }
}
const result = rearrangeArray(arr)
console.log(result)