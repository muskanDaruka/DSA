const arr = [21, 33, 9, 45, 63]
let k = 6;

function minimumIncrement(n) {
    var max = n[0];

    for (let i = 0; i < n.length; i++) {
        if (n[i] > max) {
            max = n[i];
        }

    }
    let result = 0;
    for (let i = 0; i < n.length; i++) {
        if ((max - n[i]) % k != 0) {
            return -1;
        } else {
            result = result + (max - n[i]) / k;
        }

    }
    return result;
}

const output = minimumIncrement(arr)
console.log(output);
