//create a varibale for human age
const myAge = 20;
//variable that stores dog years
let earlyYears = 2;
//multiply by value that dogs age by which is approx. 10.5 years
earlyYears+=10.5;
//we already accounted for the first two years
let laterYears = myAge -2;
//multiply by 4 to calculate the number of dog years accounted for by your later years
laterYears*=4;
console.log(earlyYears);
console.log(laterYears);

//dog age calculation

let myAgeInDogYears = earlyYears + laterYears;
//my name in lowercase
let myName = 'Serna'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
