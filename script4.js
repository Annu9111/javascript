for(let i=1;i<=5;i++){
    console.log("annu");
}

let sum=0;
for(let i=1;i<=10;i++){
    sum+=i;
}
console.log(sum);

let i=0;
while(i<5){
    console.log(i);
    i++;
}

let str="JAVASCRIPT"
for(let i of str){
    console.log(i);

}

//object
let object={
    name:"Annu",
    age:20,
    sub:"maths"
}

for(let key in object){
    console.log("key = ",key,"value = ",object[key]);
}


for(let i=0;i<100;i++){
    if(i%2==0){
        console.log(i);
    }
}
