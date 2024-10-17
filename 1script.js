//Get user input using prompt(“Enter your age:”)
let num = prompt ('Enter your age:');

//Minimum driving age
const minimumAge = 18;

//Setting your current age
let myAge = 17;

if (myAge >= 18) {
    console.log('You are old enough to drive!');
} else {
    console.log("You are NOT old enough to drive")
    let minimumAge = 18 - myAge;
    console.log(minimumAge)
}
