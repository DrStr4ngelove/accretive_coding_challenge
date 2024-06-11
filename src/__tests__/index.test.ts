import { justify, main } from '../index'

// Mock the 'prompt' module
jest.mock('prompt', () => ({
    start: jest.fn(),
    get: jest
        .fn()
        .mockImplementationOnce((_, callback) => {
            callback(null, { text: 'Valid Number Test Text', number: '10' }) // Simulate user input
        })
        .mockImplementationOnce((_, callback) => {
            callback(null, {
                text: 'Invalid Number Test Text',
                number: 'invalid',
            }) // Simulate user input
        }),
}))

describe('Justify function', () => {
    test('should justify text with multiple words correctly', () => {
        const line = 'This is a test'
        const length = 20
        const expectedOutput = 'This      is     a     test'
        expect(justify(line, length)).toBe(expectedOutput)
    })

    test('should justify text with single word correctly', () => {
        const line = 'test'
        const length = 10
        const expectedOutput = 'test         '
        expect(justify(line, length)).toBe(expectedOutput)
    })

    test('should handle an empty string', () => {
        const line = ''
        const length = 10
        const expectedOutput = '         '
        expect(justify(line, length)).toBe(expectedOutput)
    })
})

describe('Main function', () => {
    // test('should prompt for user input and justify text', () => {
    //     const consoleLogSpy = jest.spyOn(console, 'log')
    //     const consoleErrorSpy = jest.spyOn(console, 'error')

    //     main()

    //     expect(consoleLogSpy).toHaveBeenCalledWith('Test        text')
    //     expect(consoleErrorSpy).not.toHaveBeenCalled()

    //     consoleLogSpy.mockRestore()
    //     consoleErrorSpy.mockRestore()
    // })

    test('should handle invalid number input', () => {
        const consoleLogSpy = jest.spyOn(console, 'log')
        const consoleErrorSpy = jest.spyOn(console, 'error')

        main()

        expect(consoleLogSpy).toHaveBeenCalledWith(
            'The input is not a valid number.'
        )
        expect(consoleErrorSpy).not.toHaveBeenCalled()

        consoleLogSpy.mockRestore()
        consoleErrorSpy.mockRestore()
    })
})
