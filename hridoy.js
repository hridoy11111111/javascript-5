Recap previous 
let product ='pant';
product = "shirt";
console.log(product);

const website = " www.facebook.com";
website = "www.eshikhon.com";
console.log(website);

const number = ['hridoy',5384,true,false,"tonni"]
number.unshift('Durjoy');
number.shift();

console.log(number);

const student = {
    name: 'hridoy saha',
    id: 6619002,
    dress: 'white'
}
student.dress = 'black dress'
student['id'] = 758
student.name = 'tomar baper matha'
console.log(student);


 if else

let item = 0;
while(item > 10){
    console.log(item);
    item++
}

function addTwoNumber(one,two){
    const total = one + two;
    return total
} 



const result = addTwoNumber(100,200);
 const mynum = 3.65645;
 parseInt(mynum)
console.log(mynum);
const mynum = 4.7648;
console.log(parseInt(mynum));

Inch to feet

function inchToFeet(inch){
    const feetresult = inch / 12
    return feetresult
}

const output = inchToFeet(60);
console.log(output);

it is a leap year  or not?

function isLeapyear (year){
    if(year % 4 == 0) {
        console.log('this year is leap year');
    }
    else{
        console.log('this year is not leap year');
    }
}
isLeapyear(2025)

Miles to kilomitters

function milesToKilomitters(miles){
    const kilomitters = miles * 1.60934
    return kilomitters;
}

const result = milesToKilomitters(50);
const output = milesToKilomitters(12);
console.log(output);
console.log(parseInt(result),'kilomitters');

Is Even or odd By Function

function isEven(num){
    if(num % 2 == 0) {
        return "this is event number"
    }
    else {
        return "this is not event number"
    }
}

const output = isEven(156);
console.log(output);

function isOdd(num) {
    if (num == 0){
        return "please provide more than 0"
    }
    else if (num % 2 != 0) {
        return "this is odd number"
    }
    else{
        return "this is not odd number"
    }
} const output =isOdd(1);
console.log(output);


