let form=document.querySelector(".form");
let cont=document.querySelector(".thank");
let submit=document.querySelector("#submit");
let inputs=document.getElementsByTagName("input");
submit.addEventListener("click",()=>{
    let name=inputs[0].value;
    console.log(name);
    let h2=document.createElement("h2");
    h2.innerText=`Thanks ${name} for Applying`;
    cont.append(h2);
    cont.style.display="inline";
    form.style.display="none";
    h2.setAttribute("class","thanksy");
})
//theme mode

let dark=document.querySelector("#dark");
let light=document.querySelector("#light");
let title=document.querySelector(".title");

dark.addEventListener("click",()=>{
    dark.style.display="none";
    light.style.display="inline";
    document.body.style.backgroundColor="black";
    document.body.style.color="white";
    title.style.color="rgb(166, 89, 244)";
});
light.addEventListener("click",()=>{
    light.style.display="none";
    dark.style.display="inline";
    document.body.style.backgroundColor="white";
    document.body.style.color="black";
    title.style.color="rebeccapurple";
});