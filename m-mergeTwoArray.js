const ar1 = [1, 5, 9, 10, 15, 20]
const ar2 = [2, 3, 8, 13]

function mergeTwoArray(n, m) {
    for (let i = n - 1; i >= 0; i--) {
        let j, last = ar1[m - 1];
        for (j = m - 2; j >= 0 && ar1[j] > ar2[i]; j--) {
            ar1[j + 1] = ar1[j];
        }


        if (last > ar2[i]) {
            ar1[j + 1] = ar2[i];
            ar2[i] = last;
        }
    }
    console.log(ar1, ar2);

}
mergeTwoArray(ar1.length, ar2.length)