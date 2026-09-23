function calculateTax(amount) {
    let taxValue = amount * 0.1;
    return taxValue;
}

function convertToUpperCase(text) {
    let upperCaseText = text.toUpperCase()
    return upperCaseText;
}

function findMaximum(num1, num2) {
    return Math.max(num1, num2);
}

function isPalindrome(word) {
    let originalWord = word.toLowerCase();
    let reversedWord = originalWord.split('').reverse().join('');
    return originalWord === reversedWord;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    let discountAmount = originalPrice * (discountPercentage / 100);
    let expectedDiscountedPrice = originalPrice - discountAmount;
    return expectedDiscountedPrice;
}



// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };