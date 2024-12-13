const { experiments } = require('webpack')
const tests = require('./practice')
const calculator = tests.calculator()

test('Capitalize first letter', () =>{
    expect(tests.capitalize('hello')).toBe('Hello')
})

test('Reverse "Hello"', () =>{
    expect(tests.reverseString('hello')).toBe('olleh')
})

test('adds 1+2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3)
})

test('Subtracts 10-2 to equal 8', () => {
    expect(calculator.subtract(10, 2)).toBe(8)
})

test('multiply 4*5 to equal 20', () => {
    expect(calculator.multiply(4, 5)).toBe(20)
})

test('divide 10/2 to equal 5', () => {
    expect(calculator.divide(10, 2)).toBe(5)
})

test('Returns undefined when dividng by 0', () => {
    expect(calculator.divide(14, 0)).toBeUndefined()
})

test('shifts letter 3 over', () =>{
    expect(tests.caesarCypher('XYZ', 3)).toBe('ABC')
})

test('shifts lowercase and upper case letters', () =>{
    expect(tests.caesarCypher('heLLo', 3)).toBe('khOOr')
})

test('shifts letters and but not punctuations', () =>{
    expect(tests.caesarCypher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})

//testing an object output from a function
test('Outputs an array object with correct info', () =>{
    const array = [1, 2, 6, 3];
    expect(tests.analyzeArray(array)).toEqual({
        average: 3,
        min: 1,
        max: 6,
        length: 4
    })
})

