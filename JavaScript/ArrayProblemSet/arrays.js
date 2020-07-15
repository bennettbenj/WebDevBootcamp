let testNums = [1, 2, 3];
let testItems = ["hello", "hello", "hello"];

console.log(printReverse(testNums));
console.log(isUniform(testNums));
console.log(sumArray(testNums));
console.log(max(testNums));


function printReverse(numsToReverse) {
    let numsReversed = [];
    numsToReverse.forEach(function(number) {
        numsReversed.unshift(number);
    });

    return numsReversed;
}

function isUniform(itemsToTest) {
    let firstItem = itemsToTest[0];

    for (let index = 1; index < itemsToTest.length; index++) {
        if (itemsToTest[index] !== firstItem) return false;
    }
    return true;
}

function sumArray(numbers) {
    let total = 0;

    numbers.forEach(function(value) {
        total += value;
    });

    return total;
}

function max(numbers) {
    let maxNum = numbers[0];

    numbers.forEach(function(value) {
        if (value >= maxNum) maxNum = value;
    });

    return maxNum;
}