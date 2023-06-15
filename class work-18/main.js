document.addEventListener('keydown',function(event){
let elemKey =document.getElementById("key");
let elemCode =document.getElementById("code");
elemKey.textContent = event.key;
elemCode.textContent = event.code;
return elemKey, elemCode;
});

