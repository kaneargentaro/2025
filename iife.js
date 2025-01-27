// What is an iife (immediately invoked function expression)
// used to execute code immediately
// used to define and limit to a scope

(function x(msg) {
    console.log(`running ${msg ? msg : 'now'}`)
})('meow');

console.log((function doubleNumber(num) {
    return num * 2;
})(2));
