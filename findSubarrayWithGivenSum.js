const arr = [15, 2, 4, 8, 9, 5, 10, 23]
let sum = 23;

function subArraySum() {

    for (let i = 0; i < arr.length; i++) {
        let curSum = arr[i];
        if (curSum === sum) {
            console.log(i);
            return;
        } else {
            for (let j = i + 1; j < arr.length; j++) {
                curSum = curSum + arr[j];
                if (curSum === sum) {
                    console.log(i, j);
                    return;
                }
            }
        }
    }
};
subArraySum();
