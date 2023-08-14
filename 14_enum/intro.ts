// We can put values to enum
// enum MyEnum {
//     ChoiceA = "Harshit",
//     ChoiceB = "Raj",
//     ChoiceC = "HARSHIT RAJ"
// }
// let x2: MyEnum = MyEnum.ChoiceA;
// console.log(x2);


// In case of not values, It starts counting from 0
enum MyEnum {
    ChoiceA, // 0
    ChoiceB, // 1
    ChoiceC, // 2
}
enum MyEnum2 {
    ChoiceA, // 0
    ChoiceB = 100, // 100
    ChoiceC, // 101
    ChoiceD, // 102
    ChoiceE = MyEnum.ChoiceC, // 2
}
console.log(MyEnum2.ChoiceA);
console.log(MyEnum2.ChoiceB);
console.log(MyEnum2.ChoiceC);
console.log(MyEnum2.ChoiceD);
console.log(MyEnum2.ChoiceE);


// We can access enum as below
enum Orientation {
    East,
    West,
    North,
    South,
}
let directionInNumber = Orientation.East; // Access with the Enum
let directionInString = Orientation[0];  // Access the Enum string from number
console.log(directionInNumber);
console.log(directionInString);