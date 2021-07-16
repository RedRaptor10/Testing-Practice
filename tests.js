// Capitalizes first character in a string
function capitalize(str) {
    let str1 = str.substr(0,1);
    let str2 = str.substr(1);

    return str1.toUpperCase() + str2;
}

// Reverses a string
function reverseString(str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }

    return newStr;
}

// Performs basic functions between two numbers
const calculator = {
    add : function (num1, num2) { return num1 + num2; },
    subtract : function (num1, num2) { return num1 - num2; },
    multiply : function (num1, num2) { return num1 * num2; },
    divide : function (num1, num2) { return num1 / num2; }
}

// Uses the Caesar Cipher method to encipher or decipher text
function caesar(str, key) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        let newCharCode = charCode + key;
        let newChar = '';

        // Uppercase Letter
        if (charCode >= 65 && charCode <= 90) {
            while (newCharCode < 65) { newCharCode += 26; }
            while (newCharCode > 90) { newCharCode -= 26; }
            newChar = String.fromCharCode(newCharCode);
        }
        // Lowercase Letter
        else if (charCode >= 97 && charCode <= 122) {
            while (newCharCode < 97) { newCharCode += 26; }
            while (newCharCode > 122) { newCharCode -= 26; }
            newChar = String.fromCharCode(newCharCode);
        }
        // Miscellaneous Characters
        else { newChar = str[i]; }

        newStr += newChar;
    }

    return newStr;
}

// Analyzes an array of numbers and returns an object with
// the average, min, max, and length
function analyze(arr) {
    const object = {
        average : function() {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
    
            return sum / arr.length;
        }(arr),

        min : function() {
            let minNum = Number.MAX_VALUE;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] < minNum) {
                    minNum = arr[i];
                }
            }

            return minNum;
        }(arr),

        max : function() {
            let maxNum = Number.MIN_VALUE;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > maxNum) {
                    maxNum = arr[i];
                }
            }

            return maxNum;
        }(arr),

        length : arr.length
    }

    return object;
}

module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesar,
    analyze
};