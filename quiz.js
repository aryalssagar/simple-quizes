document.querySelector(".a").addEventListener("click",function(){
    document.querySelector(".a").style.background="red";
    document.querySelector("#pa").style.background="red";
    document.querySelector(".b").style.background="green";
    document.querySelector("#pb").style.background="green";
})
document.querySelector(".b").addEventListener("click",function(){
    document.querySelector(".b").style.background="green";
    document.querySelector("#pb").style.background="green";
})
document.querySelector(".c").addEventListener("click",function(){
    document.querySelector(".c").style.background="red";
    document.querySelector("#pc").style.background="red";
    document.querySelector(".b").style.background="green";
    document.querySelector("#pb").style.background="green";
})  
document.querySelector(".d").addEventListener("click",function(){
    document.querySelector(".d").style.background="red";
    document.querySelector("#pd").style.background="red";
    document.querySelector(".b").style.background="green";
    document.querySelector("#pb").style.background="green";
})    
document.querySelector("button").addEventListener("click",function(){
    window.location.href="./quiz2.html";
})