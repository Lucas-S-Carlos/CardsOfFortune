
let aa = document.getElementById("A1")

aa.addEventListener("click", () => {


    let sorte = (Math.floor(Math.random() * 100) + 1)
    console.log(sorte)

    if (sorte < 20){
        aa.style.backgroundColor = "red";
    } else if(sorte => 20){
        aa.style.backgroundColor = "blue";
    }
            

    
    
});
