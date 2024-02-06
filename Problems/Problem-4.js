
function canPay (array,number) {
      let sum = 0;
      if (array.length) {
            for (value of array) {
                  sum += value;
            }
            if (sum <= number) {
                  return true
            }else {
                  return false
            }
      }else {
            return "Plase input an array that has minum one length";
      }
      
      
}
const resultCanPay = canPay([5],3);
console.log(resultCanPay)