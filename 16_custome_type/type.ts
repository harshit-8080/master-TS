// We can create our own type  and first letter should be capital

type User = {
    name:string,
    age:number,
    address:string,
    city?:string // making this optional
}

const student1:User = {
    name:"harshit",
    age:10,
    address:"pn nagar",
    city:"chapra"
}
console.log(student1);

const student2:User = {
    name:"harshit",
    age:10,
    address:"pn nagar"
}
console.log(student2);



function fun(userData:User):User{
    return userData
}
let x = fun(student1);
console.log(x);


// important
type id = number; // it will accept number only
let i1:id = 100

type identify = number | string // it can accepts either number or string
let k1:identify = "abc@gmail.com";
let k2:identify = 100
