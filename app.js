function toggle(){

    console.log("hi")
    var burger = document.getElementById("burger")
    var navbar = document.querySelector(".navbar")

    navbar.style.transform = "translatex(0)"
    navbar.style.transition = "0.5s ease"



}

function closetoggle(){
    var navbar = document.querySelector(".navbar")
    var obj = document.getElementById("navbar")

    obj.removeAttribute('style')
    navbar.style.transition = "0.7s ease"

    
}