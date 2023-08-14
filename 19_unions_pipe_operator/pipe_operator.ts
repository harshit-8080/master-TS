type Id = number | String; // can be number or string (also called as unions)

// narrowing
function fun(id:Id) {
    
    console.log(id);

    if(typeof id == 'string' ){
        console.log(id.toUpperCase());
    }else{
        console.log(id);
    }

}

fun("harshit");


// we use pipe operator to expects type as string or number[]
function gun(s:string | number[]) {
    return s.slice(1,3);
}

console.log(gun("harshit"));
console.log(gun([10,20,30,40]));



