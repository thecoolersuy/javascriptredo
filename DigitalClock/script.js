const clock = document.querySelector(".time")
console.log(document.querySelector(".time"))

setInterval( function(){
    const date = new Date();

let localTime = date.toLocaleTimeString()

clock.innerHTML = localTime
},1000)
