const arr = [10, 20, 35, 50, 75, 80]
let K = 70

function twoPointerTechnique(n, K) {
    for (i = 0; i < n.length - 1; i++) {
        for (j = i + 1; j < n.length; j++) {
            if (i == j) {
                continue;
            }
            if (n[i] + n[j] == K) {
                return 1;
            }
            if (n[i] + n[j] > K) {
                break;
            }
        }
    }
    return 0;
}
const result = twoPointerTechnique(arr, K)
console.log(result)