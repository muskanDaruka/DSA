const arr = [12, 3, 4, 1, 6, 9]
let sum = 24;

function findTriplet() {
    for (i = 0; i < arr.length - 2; i++) {
        for (j = i + 1; j < arr.length - 1; j++) {
            for (k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === sum) {
                    console.log(arr[i], arr[j], arr[k]);
                }
            }
        }
    }
}
findTriplet();