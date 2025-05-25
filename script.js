let prompt  = require('prompt-sync')()
let n = Number(prompt('Enter your number'))


let  i = 0
function isPerfectSquare(n){
    let left = 0;
    let right = n
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        let square = mid*mid
        if(square===n) return true
        else if(square<n) left = mid+1
        else right = mid-1
    }
   return false
}
console.log(isPerfectSquare(n))