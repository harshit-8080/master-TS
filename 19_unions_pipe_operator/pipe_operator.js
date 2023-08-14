// narrowing
function fun(id) {
    console.log(id);
    if (typeof id == 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
fun("harshit");
function gun(s) {
    return s.slice(1, 3);
}
console.log(gun("harshit"));
console.log(gun([10, 20, 30, 40]));
