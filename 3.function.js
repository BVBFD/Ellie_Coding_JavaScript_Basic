// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

function printHello() {
    console.log('Hello');
}

printHello();

function log(message) {
    console.log(message);
}

log('Hello@');
log(1234);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name : 'ellie'};
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    for (const arg of args){
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global';
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
}
printMessage();

// 6. Return a value
function sum(a, b){
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// good
function upgradeUser(user) {
    if(user.point <= 10){
        return;
    } // needed logic in here
}

// 8. Function declaration can be hoisted. 
//    Function expression can't be hoisted.
const print = function() {
    // anonymous function
    console.log('print');
};
print(); 
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 9. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function (){
  console.log('yes!');  
};

// named function
const printNo = function print(){
  console.log('no!');  
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function() {
//     console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
};

// IIFE
(function hello() {
    console.log('IIFE');
})();

// function hello(){
//     console.log('IIFE');
// }
// hello();
// 위에꺼랑 똑같음!!!

// Fun quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        
        case 'substract':
            return a - b;
        
        case 'divide':
            return a / b;

        case 'multiply':
            return a * b;
            
        case 'remainder':
            return a % b;
        
        default:
            throw Error('unknown command');
    }
}

console.log(calculate('add', 2, 3));