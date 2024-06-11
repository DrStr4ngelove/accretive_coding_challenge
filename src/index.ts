const prompt = require('prompt')

// Justify text
export const justify = (line: string, length: number): String => {
    // Split the line into words
    const words = line.split(' ')
    // If there is only one word, return the line with spaces
    const spaceCount = length - words.length
    if (spaceCount < 0) {
        return line
    }
    if (words.length === 1) {
        return line + ' '.repeat(spaceCount)
    }
    // Calculate the number of spaces needed
    const space = ' '.repeat(spaceCount / (words.length - 1))
    const remainder = spaceCount % (words.length - 1)

    // Join the words with spaces
    const justified = words.reduce((acc, word, index) => {
        if (index === words.length - 1) {
            // Add the last word to the accumulator
            return acc + word
        }
        // Add the word and space to the accumulator
        return acc + word + space + (index < remainder ? ' ' : '')
    }, '')
    return justified
}

// Main function to prompt for a string and a number
export function main() {
    try {
        // Prompt the user for a string and a number
        prompt.start()
        prompt.get(['text', 'number'], (err: any, result: any) => {
            if (err) throw new Error(err)
            // Convert the number input to a number type
            const userNumber = parseFloat(result?.number)

            // Check if the input number is valid
            if (
                isNaN(userNumber) ||
                userNumber <= 0 ||
                !Number.isInteger(userNumber)
            ) {
                console.log('The input is not a valid number.')
            } else {
                const justifiedString = justify(result?.text, result?.number)
                console.log(justifiedString)
            }
        })
    } catch (error) {
        // Handle any errors that occur
        console.error('An error occurred:', error)
    }
}

// Run the main function
main()
