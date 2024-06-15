const arr = [1, 3, 2, 2, 5]

function rearrangeArray(n) {
    for (let i = 0; i < n.length; i++) {
        if (i % 2 === 0) {
            if (n[i] < n[i - 1]) {
                let temp = n[i]
                n[i] = n[i - 1]
                n[i - 1] = temp;
            }

        } else {
            if (n[i] > n[i - 1]) {
                let temp = n[i]
                n[i] = n[i - 1]
                n[i - 1] = temp;
            }
        }
    }
    return n;
}
const output = rearrangeArray(arr)
console.log(output);