// Comparators

let equal = 1===1;
let gThan= 2>1;
let lThan= 1<2;
let gThanEqual= 2<=2;
let lThanEqual= 3<=3;
let notEqual= 1!==2;

console.log(equal);
console.log(gThan);
console.log(lThan);
console.log(gThanEqual);
console.log(lThanEqual);
console.log(notEqual);

/* === makes sure there's no type conversion. By default,
* JS will attempt to type convert, which is allowed when
* using ==. This can be referred to as strong equals
* and weak equals.*/


function compareStorePrices (storeA, storeB) {
    let storeAIsLower = storeA<storeB;
    if (storeAIsLower) {
        console.log("Store A has a lower price")
    } else if (storeA > storeB) {
        console.log("Store B has a lower price")
    } else {
        console.log("They have the same price")
    }
}

compareStorePrices(1,2);
compareStorePrices(2,1);
compareStorePrices(1,1);

///////////////////////////////////////

function squareNum(number){
    return number*number;
}

let squaredNumber = squareNum(4)

console.log(squaredNumber);

////////////////////////////////////////

let x = 4;

function addNumbers(n, m, x){
    console.log(x);
    let b = 0;
    if (1===1){
        b = 10;
    }
    console.log(b);
    return n+m;
}
addNumbers(2,3, 20000);
console.log(x);

/////////////////////////////////////////

let ourArray = [1, 2, 3, 4, ['a','b','c']];
console.log(ourArray[4][1]+'anana');

// for (counter; comparison; incrementer)
for (i=0; i<ourArray.length-1; i++){
    console.log(ourArray[i]);
}

////////////////////////////////////////

while (1===1){
    console.log("Oh no...")
}