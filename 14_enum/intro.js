// We can put values to enum
// enum MyEnum {
//     ChoiceA = "Harshit",
//     ChoiceB = "Raj",
//     ChoiceC = "HARSHIT RAJ"
// }
// let x2: MyEnum = MyEnum.ChoiceA;
// console.log(x2);
// In case of not values, It starts counting from 0
var MyEnum;
(function (MyEnum) {
    MyEnum[MyEnum["ChoiceA"] = 0] = "ChoiceA";
    MyEnum[MyEnum["ChoiceB"] = 1] = "ChoiceB";
    MyEnum[MyEnum["ChoiceC"] = 2] = "ChoiceC";
})(MyEnum || (MyEnum = {}));
var MyEnum2;
(function (MyEnum2) {
    MyEnum2[MyEnum2["ChoiceA"] = 0] = "ChoiceA";
    MyEnum2[MyEnum2["ChoiceB"] = 100] = "ChoiceB";
    MyEnum2[MyEnum2["ChoiceC"] = 101] = "ChoiceC";
    MyEnum2[MyEnum2["ChoiceD"] = 102] = "ChoiceD";
    MyEnum2[MyEnum2["ChoiceE"] = 2] = "ChoiceE";
})(MyEnum2 || (MyEnum2 = {}));
console.log(MyEnum2.ChoiceA);
console.log(MyEnum2.ChoiceB);
console.log(MyEnum2.ChoiceC);
console.log(MyEnum2.ChoiceD);
console.log(MyEnum2.ChoiceE);
