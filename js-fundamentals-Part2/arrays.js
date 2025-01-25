'use strict';
const calcTip = function(bill){
    if(bill > 50 && bill < 300){
        return 0.15 * bill;
    }
    else{
        return 0.20 *bill;
    }
}
// console.log(calcTip(100));
const bills = [125, 555, 44];
const tips = bills.map(calcTip); 
const total = bills.map((bill, index) => bill + tips[index]); 

console.log(bills);
console.log(tips);
console.log(total);
