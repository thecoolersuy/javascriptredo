const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")
const paragraph = document.querySelector("p")
const heading = document.querySelector("h1")

buttons.forEach( (button) =>{
    console.log(button)
    button.addEventListener("click", (e) =>{
         console.log(e)
         console.log(e.target)
         if(e.target.innerHTML == "Green"){
            body.style.backgroundColor = "green"
        }else if(e.target.innerHTML == "Red"){
            body.style.backgroundColor = "red"
        }else if(e.target.innerHTML == "Black"){
            body.style.backgroundColor = "black"
            paragraph.style.color = "white"
            heading.style.color = "white"
        }else if(e.target.innerHTML == "White"){
            body.style.backgroundColor = "white"
            paragraph.style.color = "black"
            heading.style.color = "black"
        }else{
            body.style.backgroundColor = "white"
        }
        // switch(e.target.innerHTML){
        //     case "Green":
        //         body.style.backgroundColor ="green"
        //         break;
        //     case "Red":
        //         body.style.backgroundColor = "red"
        //         break
        //     case "Black":
        //         body.style.backgroundColor = "black"
        //         break
        //     case "White":
        //         body.style.backgroundColor = "white"
        //         break
        //     default:
        //         body.style.backgrounColor = "white"
        //         break;
        // }
    })
    
})

