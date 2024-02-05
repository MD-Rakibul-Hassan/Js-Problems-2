// Problem 1 : You have geven a function called cubeNumber the function takes an input //
// Tasks 
// 1 . Return the cube number result form the funciton 
// 2 . If the input datatype is not a number return a error message 
function cubeNumber (number) {
      if (typeof number !== 'number') {
            console.log("The number is not a number")
      }
      else {
            const cube = Math.pow(number,3);
            return cube;
      }
}
const cube = cubeNumber(3);
console.log(cube);

// Problem 2: You have geven a function called matchFind() the function take an input //
// Tasks 
// 1 . If first sting part mathc second string part then you have return the boolean value true oterwise return false
// 2 . If the input is not a string then return error message
function matchFind (string1,string2) {
      if (string1.length === 0 || string2.length === 0) {
            console.log("Please input minimum one sting")
      } else {
            if (typeof string1 !== 'string' || typeof string2 !== 'string') {
                  console.log("Please provide string !")
            }
            else {
                  const mathc = string1.includes(string2);
                  return mathc;
            }
      }
}
const mathc = matchFind("Jhon doe","Jhon");
console.log(mathc)
