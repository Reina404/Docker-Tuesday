// Console is used to display a result of a particular Code
// console.log("Learning Docker and Java with Mr Paul");

// Alert is used to tell us about something that has carried out
// alert("Its time to learn Javacsript and Docker in a way to prommote Unity")

// prompt will require you enter an information or capture an Information
// example: username or date of birth or email or student information

// prompt("Enter your first name")

// A variable is a block of container that is holding a value

// console.log(type of name);

let numbers = 23 + 12 * 100 / 4;
let mathofNums = 45 + 112 / (34 * 344) - (233 * 100);

if (numbers) {
    console.log("The value is true")

}else {
    console.log("false")
}
//the below is container that holds the value
let firstname = "Dean";
let lastname = "Okehie";
let password = "amarak@amarak.com";
// Array means a long list of items which any type of llong list
let namesofcars = ["toyota", "BMW 65", "Volkawagen"]

// console.log(numbers + " and first is: " + firstname + " lastname is :" + lastname + " password is " + password );
// the below is a cshorter way to write the above. it is called template literal
console.log(`${numbers} and ${firstname} last ${lastname} and ${password} `)

const maginProfitExpectation = 5000
console.log(maginProfitExpectation)

let items = 20
let salesQuantity = 12
let tax = 10
let profit = items * salesQuantity - tax;

if(profit < maginProfitExpectation) {
    console.log("We did not make a profit this year")
}else {
    console.log("We made profit this year")
}
console.log(profit);
