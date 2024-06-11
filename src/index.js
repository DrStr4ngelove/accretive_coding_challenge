"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = exports.justify = void 0;
var prompt = require('prompt');
// Justify text
var justify = function (line, length) {
    // Split the line into words
    var words = line.split(' ');
    // If there is only one word, return the line with spaces
    var spaceCount = length - words.length;
    if (words.length === 1) {
        return line + ' '.repeat(spaceCount);
    }
    // Calculate the number of spaces needed
    var space = ' '.repeat(spaceCount / (words.length - 1));
    var remainder = spaceCount % (words.length - 1);
    // Join the words with spaces
    var justified = words.reduce(function (acc, word, index) {
        if (index === words.length - 1) {
            // Add the last word to the accumulator
            return acc + word;
        }
        // Add the word and space to the accumulator
        return acc + word + space + (index < remainder ? ' ' : '');
    }, '');
    return justified;
};
exports.justify = justify;
// Main function to prompt for a string and a number
function main() {
    try {
        // Prompt the user for a string and a number
        prompt.start();
        prompt.get(['text', 'number'], function (err, result) {
            console.log('🚀 ~ prompt.get ~ result:', result);
            if (err)
                throw new Error(err);
            // Convert the number input to a number type
            var userNumber = parseInt(result === null || result === void 0 ? void 0 : result.number);
            console.log('🚀 ~ prompt.get ~ userNumber:', isNaN(userNumber));
            // Check if the input number is valid
            if (isNaN(userNumber)) {
                console.log('The input is not a valid number.');
            }
            else {
                var justifiedString = (0, exports.justify)(result === null || result === void 0 ? void 0 : result.text, result === null || result === void 0 ? void 0 : result.number);
                console.log(justifiedString);
            }
        });
    }
    catch (error) {
        // Handle any errors that occur
        console.error('An error occurred:', error);
    }
}
exports.main = main;
// Run the main function
main();
