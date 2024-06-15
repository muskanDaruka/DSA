const arr = [-1, 2, -3, 4, 5, 6, -7, 8, 9];
const positiveNumbers = [];
const negativeNumbers = [];

function rearrangeAlternately(n) {

    for (const num of n) {
        if (num >= 0) {
            positiveNumbers.push(num);
        } else {
            negativeNumbers.push(num);
        }
    }

    const result = [];
    let i = 0;
    let j = 0;

    for (let k = 0; k < arr.length; k++) {
        if (i < positiveNumbers.length) {
            result.push(positiveNumbers[i]);
            i++;
        }
        if (j < negativeNumbers.length) {
            result.push(negativeNumbers[j]);
            j++;
        }
    }

    return result;
}

const result = rearrangeAlternately(arr);
console.log(result);
