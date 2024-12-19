const list = document.getElementById("nvlist");
const burger = document.getElementById("nvlogo");
let isnav = false;
burger.addEventListener("click",()=>{
    list.style.display = (isnav?"flex":"none");
    isnav = !isnav;
})