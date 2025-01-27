// function getTotal(n1, n2) {
//     if (!n2) {
//         return function (n2) {
//             return n1 + n2;
//         }
//     }
//     return n1 + n2;
// }
//
// console.log(getTotal(10, 20));
// console.log(getTotal(10)(20));


function getTotal() {
    let args = Array.prototype.slice.call(arguments);
    if (args.length >= 2) return args.reduce((a, b) => a + b);
    if (args.length === 1) {
        return function (arg) {
            return args[0] + arg;
        }
    }
    // no args
    return null
}

console.log(getTotal(10, 20));
console.log(getTotal(10)(20));