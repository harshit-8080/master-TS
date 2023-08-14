function addArray(arr, extra) {
    return new Array().concat(arr, extra);
}
var x = addArray([10, 20, 30, 40, 50, 60, 70, 80], 1000);
console.log(x);
console.log(x[0]);
var y = addArray(["a", "b", "c", "d", "e", "f"], "harshit");
console.log(y);
console.log(y[0]);
