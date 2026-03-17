// alert("hello");
// let head=document.getElementById("heading");
// console.log(head.innerHTML);
// console.log(head.innerHTML);
// head.innerText="Document Object Model"
// console.log(head);

let h2 = document.querySelector("h2");
// h2.innerText="DOM";
h2.innerText=h2.innerText + "--> DOM";

let myclass=document.getElementsByClassName("myclass");
myclass[0].innerText="unique value one";
myclass[1].innerText="unique value two";
myclass[2].innerText="unique value three"
