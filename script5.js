let marks=[12,34,56,78,90];
console.log(marks);
console.log(marks.length);
console.log(typeof(marks));
console.log(marks[0]);
console.log(marks[1]);

for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
}

for (let i of marks){
    console.log(i);
}

let sum=0;
for(let i=0;i<marks.length;i++){
    sum+=marks[i];
}
let avg=sum/marks.length;
console.log(avg);