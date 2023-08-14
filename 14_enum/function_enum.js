var e1;
(function (e1) {
    e1["FirstName"] = "Harshit";
    e1["LastName"] = "Raj";
})(e1 || (e1 = {}));
(function (e1) {
    function print() {
        console.log("I'm print function");
        console.log(e1.FirstName);
        console.log(e1.LastName);
    }
    e1.print = print;
})(e1 || (e1 = {}));
e1.print();
