let sidenav=document.getElementById("sidenav")
let sidenavx=document.getElementById("sidenavx")
let menu=document.getElementById("menu")

menu.addEventListener("click",function(){
    sidenav.style.right="0"
})

sidenavx.addEventListener("click",function(){
    sidenav.style.right="-50%"
})
