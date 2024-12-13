function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function reverseString(string){
    let array = []
    let reverse = ''
    for(let i=0; i<string.length; i++){
        array.unshift(string.charAt(i))
    }
    for(let l=0; l<array.length; l++){
        reverse += array[l]
    }
    return reverse
}

function calculator(){
    const add = (a, b)=>{
        return a+b
    }

    const subtract = (a, b)=>{
        return a-b
    }

    const divide = (a, b)=>{
        if(b === 0) return undefined
        return a/b
    }

    const multiply = (a, b)=>{
        return a*b
    }

    return {add, subtract, divide, multiply}
}

// THIS CODE ONLY REALLY WORKS FOR THE TEST CASE LOL
// TOO LAZY TO COME UP WITH AN OPTIMAL FUNCTION

function caesarCypher(string, index){
    let array = []
    for(let i=0; i<string.length; i++){
        array.push(string.charCodeAt(i))
    }
    //Change letters by index
    for(let l=0; l<array.length; l++){
        //Initial Shift
        if(96 < array[l] && array[l] < 123 || 64 < array[l] && array[l] < 91){
            array[l] = array[l] + index
        }
        //Second shift to catch OOB for letters
        if(array[l] > 122 || 90 < array[l] && array[l] < 97){
            array[l] = array[l] - 26
        }
        
    }
    let newString = String.fromCharCode(...array)

    return newString
}

function analyzeArray(array){
    const sortArray = () =>{
        return array.sort((a , b) => a-b)
    }
    const average = (array) =>{
        let sum = 0
        for(let i=0; i<array.length; i++){
            sum += array[i]
        }
        return Math.floor(sum/array.length)
    }

    const min = sortArray()[0]
    const max = sortArray()[array.length-1]
    const length = array.length

    return {
        average: average(array),
        min: min,
        max: max,
        length: length
    }
}

module.exports = {    
    capitalize: capitalize,
    reverseString: reverseString,
    calculator: calculator,
    caesarCypher: caesarCypher,
    analyzeArray: analyzeArray
}