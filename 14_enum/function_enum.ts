enum e1 {
    FirstName = "Harshit",
    LastName = "Raj"
}

namespace e1 {
    export function print(){
        console.log("I'm print function");
        console.log(e1.FirstName);
        console.log(e1.LastName);
    }
}

e1.print();