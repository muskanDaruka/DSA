const arr = [1, 2, 3, 4, 5, 6, 7];
const d = 3;

function reversalAlgo(n, d) {
    const temp = [];

    for (let i = 0; i < d; i++) {
        temp[i] = n[i];
    }

    for (let i = d; i < n.length; i++) {
        n[i - d] = n[i];
    }

    for (let i = 0; i < d; i++) {
        n[n.length - d + i] = temp[i];
    }

    return n;
}

const result = reversalAlgo(arr, d);
console.log(result);
