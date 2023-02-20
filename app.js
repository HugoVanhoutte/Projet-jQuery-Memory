let cards = $('.card');

//////////////////////////////////////////////////Functions/////////////////////////////////////////////////////////////
/**
 *
 * @param max
 * @returns {number} random number between 0 and max
 */
let randomNumber = (max) => {
    return Math.floor(Math.random() * max);
}

/**
 *
 * @param array
 * @param number
 * @returns {*[]} array consisting of number entries from array in parameter
 */
let randomArray = (array, number) => {
    let generatedArray = [];
    for (let i = 0; i < number; i++) {
        generatedArray.push(array[randomNumber(array.length)]);
    }
    return generatedArray;
}

let duplicateRemover = (array) => {
    return new Set(array);
}

let randomArrayNoDuplicates = (array, number) => {
    let generatedArray = randomArray(array, number)
    if (duplicateRemover(generatedArray).size !== generatedArray.length) {
        console.log(generatedArray);
        return randomArrayNoDuplicates(array, number)
    } else {
        return generatedArray
    }
}

let testArray = [1,1,0,5,6,8,5,4,4,4,4,4];

console.log("fini"+randomArrayNoDuplicates(testArray, 4));