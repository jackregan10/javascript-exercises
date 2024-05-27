const sumAll = function(num1, num2) {
    let sum = 0;
    let maxNum = Math.max(num1, num2);
    let minNum = Math.min(num1, num2);
    if(num1 < 0 || num2 < 0 || typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    }
    for (let i = minNum; i <= maxNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
