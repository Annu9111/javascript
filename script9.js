let btn=document.querySelector("#mode");
let currmode="light";

btn.addEventListener("click",()=>{
    console.log("you are trying to change mode");
    if(currmode==="light"){
        currmode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }else{
        currmode="light";
        document.querySelector("body").style.backgroundColor="white";
    }

})