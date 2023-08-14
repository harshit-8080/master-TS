interface Bookk {

    name: string;
    price: number;
    
}

interface Bookk {

    size: number

}

// if two interface are of same name, It will merge both of it.
// interface Book has three property name,price,size

const b1:Bookk = {
    name: "HC Verma",
    price:100,
    size:100
}
console.log(b1);