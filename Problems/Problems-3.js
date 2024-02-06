// Problem 4 : Make a function that take a input as an object, the object has 3 proparty
// Tasks :
// 1.Return the object proparty as a string ,like 10,15,Earth Perfect;
// 2. If any property is mising in the object replace __ ;

function findAdderss (obj) {
      const street = obj.street ?? "_";
      const address = obj.address ?? "_";
      const socieityName = obj.socieity ?? "_"
      const fullAddress = `${street},${address},${socieityName}`;
      return fullAddress;
}
const findFullAddress = findAdderss({address : "15A",socieity : "Earth Perfect"});
console.log(findFullAddress)