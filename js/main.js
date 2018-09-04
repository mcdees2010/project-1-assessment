console.log("linked");

let num = 0;
let addbtn = document.getElementById("plus-btn");
let minusbtn = document.getElementById("minus-btn");
let addNum = document.querySelector(".addNum");
let currentNum = document.getElementById("starting-num");

addbtn.addEventListener('click', function(){
    num += parseInt(addNum.value);
    console.log(currentNum.innerHTML = num);
    input.value = " ";
});

minusbtn.addEventListener('click', function(){
    num -= parseInt(addNum.value);
    console.log(currentNum.innerHTML =  num);
    input.value = " ";
});