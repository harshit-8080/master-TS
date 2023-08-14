interface Book {
    name:string;
    price:number
}

interface Ebook extends Book {
    
    fileSize:number;
    format:string;
}

interface AudioBook extends Ebook {
    
    owner:string;
}

const book1:Book = {

    name:"HC Cerma",
    price:1000

}
console.log(book1);

const book2:Ebook = {

    name:"EBook HC Verma",
    price:1000,
    fileSize:100,
    format:"pdf"

}

console.log(book2);