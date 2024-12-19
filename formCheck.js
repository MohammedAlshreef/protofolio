const send = document.getElementById("send");
const mail = document.getElementById("mail");
const nam = document.getElementById("name");
const mess = document.getElementById("message");

const rgx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
send.addEventListener("click",()=>{
    nam.style.borderColor = (nam.value?"#fff":"red");
    mail.style.borderColor = (mail.value.match(rgx)?"#fff":"red");
    mess.style.borderColor = (mess.value?"#fff":"red");
})