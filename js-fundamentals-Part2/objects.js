'use strict'

const markMiller = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass/(this.height ** 2);
        return this.bmi;
    }

}
const johnSmith = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass/(this.height ** 2);
        return this.bmi;
    }

}
markMiller.calcBMI();
johnSmith.calcBMI();
console.log(johnSmith.bmi)
console.log(markMiller.bmi)

if(markMiller.bmi > johnSmith.bmi){
    console.log(`${markMiller.fullName}'s BMI (${markMiller.bmi}) is higher than ${johnSmith.fullName}'s BMI (${johnSmith.bmi})!`);
} else if(markMiller.bmi < johnSmith.bmi){
    console.log(`${johnSmith.fullName}'s BMI (${johnSmith.bmi}) is higher than ${markMiller.fullName}'s BMI (${markMiller.bmi})!`);
}