let dog = {
    name: "Lassie",
    color: "gold",
    breed: "retriever",
    size: "large",
    bark: function(){
        console.log("WOOF!");
    }
};

dog.bark();

/////////////////////////////////////

function x(y){
    y.num =  y.num+5;
    console.log(y);
}

let y = {
    name: 'tom',
    num: 10,
};
x(y);
console.log(y);