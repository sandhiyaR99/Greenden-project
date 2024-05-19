let sidenav = document.getElementById("sidenav")
let sidenavx = document.getElementById("sidenavx")
let menu = document.getElementById("menu")

menu.addEventListener("click", function () {
    sidenav.style.right = "0"
})

sidenavx.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})

let search = document.getElementById("search");
let container = document.getElementById("container");
let productlist = container.querySelectorAll("div");

search.addEventListener("keyup", function(event) {
    let enteredValue = event.target.value.toUpperCase();

    for (let count = 0; count < productlist.length; count++) {
        let productname = productlist[count].querySelector("h1");
        
        // Check if h1 element exists in the current div
        if (productname) {
            productname = productname.textContent.toUpperCase();

            if (productname.indexOf(enteredValue) < 0) {
                productlist[count].style.display = "none";
            } else {
                productlist[count].style.display = "block";
            }
        }
    }
});

// let search = document.getElementById("search")
// let container = document.getElementById("container")
// let productlist = container.querySelectorAll("div")

// search.addEventListener("keyup", function (event) {
//     var enteredValue = event.target.value.toUpperCase()

//     for (let count = 0; count<productlist.length; count++) {
//         var productname = productlist[count].querySelector("h1").textContent

//         if (productname.toUpperCase().indexOf(enteredValue) < 0) {
//             productlist[count].style.display = "none"
//         }
//         else {
//             productlist[count].style.display = "block"
//         }
//     }
// });

