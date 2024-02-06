// Problem 3 : You have geven an array | the array is two element alwys;
// Tasks 
// 1.If the tow element is possitive return decnding to asinding order
// 2.If the tow element is equal return "equal";
// 3.If any element of the array is negtive return invalid input;
// The sortMaker funciton 
function sortMaker(array) {
    // Chackeing array is array or not  
    if (Array.isArray(array)) {
        // Chacking array element === two or not 
        if (array.length === 2) {
            // Itarate in array every element 
            for (let i = 0; i < array.length; i++) {
                // Chacking array element is nagtive or not 
                if (array[i] < 0) {
                    return "Invalid Input"
                }
                // Chacking array two is equal or not 
                else if (array[0] === array[1]) {
                    return "Equal"
                }
                else {
                    return array.sort( (a,b) => b - a)
                }
            }
        }
        else {
            return "Please input two element "
        }
    }
    else {
        return "Please input an array"
    }
};
const sortArray = sortMaker([2,3]);
console.log(sortArray)