const arr = [10, 15, 23, 90, 67];

function findPeakElement(n) {

    if (n.length === 1) {
        return n[0];
    }

    if (n[0] > n[1]) {
        return n[0];
    }

    if (n[n.length - 1] > n[n.length - 2]) {
        return n[length - 1];
    }

    for (let i = 1; i < n.length - 1; i++) {
        if (n[i] > n[i - 1] && n[i] > n[i + 1]) {
            return n[i];
        }
    }

    return -1;
}

const result = findPeakElement(arr);
console.log(result);
