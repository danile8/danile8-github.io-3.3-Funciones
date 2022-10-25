ele = document.getElementById("ele1")
    ele.addEventListener("click", function(){
        ele.style.backgroundColor = "yellow"
    })

   
   let color = "green"
   ele2 = document.getElementById("ele2")
   ele2.style.backgroundColor = color
   ele2.addEventListener("click", function(color){
    color = "yellow"
    ele2.style.backgroundColor = color
   })
    