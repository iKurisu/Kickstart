function curry1(fn) {
  return function f1(a) {
    return arguments.length === 0 ? f1 : fn(a);
  }
}

function curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1: 
        return curry1(_b => fn(a, _b));
      default:
        return fn(a, b)
    }
  }
}

const identity = x => x;
const add = (x, y) => x + y;

const a = curry1(identity)
const b = curry2(add)

console.log(a(5))
console.log(b(5)(6))
console.log(b(5, 6))
