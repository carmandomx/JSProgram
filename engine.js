
// How the JavaScript V8 Engine works

// 1. HTML Parser - <script
// 2. Service Work -> Cache -> Network
// 3.- Parsers (Pre parser and parser)
// 4.- Interpreter

// 'hola'.charAt() -> new String('hola').charAt()


// Pure function 
const CANVAS_WIDTH = 23002390;
let res = 0;
const sum = (x, y) => {
    // side effect

    res = x + y ;
    return res;
};

// for (let i = 0; i < 100; i++) {
//     console.log(sum(2,2))
// }


const funcA = (a,b) => {
    const expensiveCalculation = a + b;

    const impureFuncEx = (a, b, c) => a + b + c

    impureFuncEx(a, b, expensiveCalculation);
}

const closureA = funcA(2,2);

for (let i = 0; i < 100; i++) {
    console.log(closureA(5));
}
