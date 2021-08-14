//1. 
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) //will log Tesla to the console
console.log(otherRandomCar) //will log Mercedes to the console
//correct

//2. 
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name); //will log an error to the console becuase name has not been defined
console.log(otherName); //would log Elon but the code stops running before this point bc of the previous error
//correct


//3. 
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); //will log 12345
console.log(hashedPassword); //will log undefined bc there is no password variable attached to the person object
//correct

//4. 
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; //equal to 2
const [,,,second] = numbers; //equal to 5
const [,,,,,,,,third] = numbers; //equal to 2
//Predict the output
console.log(first == second); //False
console.log(first == third); //True
//correct

//5. 
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey; 
//Predict the output
console.log(key); //will log value to the console
console.log(secondKey); //will log [1,5,1,8,3,3] to the console
console.log(secondKey[0]); //will log 1 to the console
console.log(willThisWork); //will log 5 to the console. works bc second key has already been defined as a variable
//correct

