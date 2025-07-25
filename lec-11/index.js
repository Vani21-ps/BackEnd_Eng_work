//accessing dom elements/node
//using id
let res=document.getElementById("mydiv");
//console.log(res);
console.dir(res);
//2.class
let h2=document.getElementByClassName("h2");
console.log(h2);
console.log(h2[0])
//3. tag name
let res2=document.getElementByTagName("p");
console.log(res2);
//4. query selector
let out=document.querySelector(".mydiv");
let out2=document.querySelectorAll("p");
console.log(out);

//document properties
//1. accessing element content and change iy
//innerhtml
console.log(res.innerHTML); //THIS IS BOTH GETTER AND SETTER, THIS IS GETTER
res.innerHTML=<p> chnage using dom manipulation</p>//setter
//innertext
console.log(res.innertext)
res.innertext=`hello world`//setter
//text content
//accessing element class or id or etc
//get attribute
console.log(res.getAttribute("id"));
let btn=document.querySelector(".btn");
btn.addEventListener("click",()=>{
    res.setAttribute("class","js")
})
//res.setAttribute("class","js");
//2. only for class attribute
//classlist
let myH = document.querySelector(".myH");
console.log(myH.classList);
myH.classList.add("hi");
myH.classList.remove("myH");
let form=document.querySelector(".signup")
btn.addEventListener("click",()=>{
form.classList.toggle("hide");
})
