
const foo = () => console.log('first');
const bar = () => setTimeout(() => {
    console.log('second')
}, 1000);
const foobar = () => console.log('third');



bar();
foo();
foobar();

// a) first,second,third
// b) second,first,third,
// c) first, third, second




// Call STack ---------------------- // Web API section
// () => {console.log('Why, hello there')return ;}  
// greeting();  -- pop
// setTimeout -- pop                         /// () => {console.log('Why, hello there')return ;}  
// respond() -- pop
