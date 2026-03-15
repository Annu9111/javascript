function myfun(a){
    console.log("welcome",a);
}
myfun("annu");

function sum(a,b){
    s=a+b;
    return s;
}
let a=sum(23,67);
console.log(a);
// -------------------------------------------------
const arrowsum=(a,b)=>{
    console.log(a+b);
}
arrowsum(3,6);
// -----------------------------------

// let vowels=["a","e","i","o","u"];
let fun=(a)=>{
    count=0;
    for(let i of a){
        if (i==="a" || i==="e" || i==="i"|| i==="o" || i==="u"){
            count++
        }
    }
    console.log(count);
}
fun("annu")
