function palindromeArray(arr) {
    let isPalindrome = true;

    for (let i = 0; i < arr.length / 2; i++) {

        if (arr[i] !== arr[arr.length - i - 1]) {
            isPalindrome = false;
            break;
        }
    }

    return isPalindrome;
}
console.log(palindromeArray(121));