const x = 5.25;
console.log('1. The value of x is', x);

let y = 'Hello!';
console.log('2. y is ' + y);
console.log("logging(x + y):", x + y);
console.log("logging(x, y):", x, y);

var z = true;
console.log('3. z is ' + z);

const sum = x + 15;
console.log('4. sum is', sum);

//const bodyClass = document.body.className;
var bodyClass = document.body.className;
console.log('5. bodyClass is' , bodyClass);

document.body.className = "loading";
console.log('7. bodyClass=', bodyClass);
/*bodyClass = "loading";
console.log('bodyClass=', bodyClass);
//document.body.className = bodyClass;
console.log('bodyClass=', bodyClass);*/
console.log('!-- Notes: -->');
console.log('Try to reassign');
'use strict';   //not much of usage in real; can prevent variable creation/typo unintentionally
p = "hello";
const q = p;
p = "hi";
console.log(`
    p = "hello";
    const q = p;
    p = "hi";
`);
console.log('   p is', p);
console.log('   q is', q);

var randomNumber = Math.random();
console.log('8. randomNumber=', randomNumber);

var mainClass=document.querySelector('main').className;
console.log('9. mainClass is', mainClass);
// why getElementsByTagName does not function?
/*main=document.querySelector('main');
console.log('querySelector=', main);
main=document.body.getElementsByTagName('main');
console.log('getByTagName=', main);
mainClass = document.getElementsByTagName('main')[0].className;
console.log('mainClass=', mainClass);*/

document.querySelector('main p').textContent = "New text set using textContent";
document.body.className="javascript-basics";