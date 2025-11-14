let h1=document.querySelector("h1");
let inc=document.getElementById("btn1");
let dec=document.getElementById("btn2");

let a=0;
inc.addEventListener("click",function(){
    
    h1.innerHTML=a++;
    
    
})
dec.addEventListener("click",function(){
    
    h1.innerHTML=a--;
    

})
