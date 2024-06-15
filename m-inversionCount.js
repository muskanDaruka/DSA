const arr = [1, 20, 6, 4, 5];

function getInvCount(n) {
    let count = 0;
    for (let i = 0; i < n.length - 1; i++) {
        for (let j = i + 1; j < n.length; j++) {
            if (n[i] > n[j])
                count++;
        }
    }
    return count;
}
const output = getInvCount(arr)
console.log(output);