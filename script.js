/*||*/
let oláEuSouJuan = document.querySelector(".oláEuSouJuan")
let acordeon = document.querySelectorAll(".acordeon")

acordeon.forEach(function(item){
    
item.addEventListener("click", ()=>{



let moverExiste = document.querySelector(".mover2")
if(moverExiste){
    moverExiste.classList.remove("mover2")
}

 if(item !== moverExiste){
 item.classList.add("mover2")
}

})
})

window.onload = () => {
    oláEuSouJuan.classList.add("mover")
}


let alturaDoWindow = window.innerHeight 


window.addEventListener("scroll", (event) => {

if (document.documentElement.scrollTop > alturaDoWindow/ 2) {
   btnTopo.classList.add("aparecer")
} 
else if(document.documentElement.scrollTop < 80){
   btnTopo.classList.remove("aparecer")
}
})
