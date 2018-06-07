const hello = () => {
    alert("Hello, world!");
    console.log('I am a hello function');
}

const hi = name => 'Hi, ' + name + '!';

const add = (num1, num2) => {
    return num1 + num2;
}
const addSimplified = (num1, num2) => num1 + num2;

const random1to5Round = () => {
    const rand = Math.random();
    // console.log('random seed:', rand);
    return Math.round(Math.random()*4) + 1;
    // return Math.round(Math.random()*5);
}

const random1to5Ceil = () => {
    const rand = Math.random();
    // console.log('random seed:', rand);
    return Math.ceil(rand*5);
}

//hello();
console.log(hi('John'), hi('Ben'));
console.log('add(20, 5)          :', add(20, 5));
console.log('addSimplified(20, 5):', addSimplified(20, 5));
console.log('* Rounding');
console.log('random1to5Round:', random1to5Round());
console.log('random1to5Round:', random1to5Round());
console.log('random1to5Round:', random1to5Round());
console.log('* Ceiling');
console.log('random1to5Ceil:', random1to5Ceil());
console.log('random1to5Ceil:', random1to5Ceil());
console.log('random1to5Ceil:', random1to5Ceil());