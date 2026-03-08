const modeBtn = document.getElementById("mode-btn")

modeBtn.onclick = () => {
document.body.classList.toggle("dark-mode")
}

const menuToggle = document.getElementById("menu-toggle")
const navMenu = document.getElementById("nav-menu")

menuToggle.onclick = () => {
navMenu.classList.toggle("active")
}

document.querySelectorAll('nav a').forEach(link => {

link.addEventListener('click', function(e){

e.preventDefault()

const target = document.querySelector(this.getAttribute('href'))

window.scrollTo({
top:target.offsetTop-50,
behavior:"smooth"
})

})

})

window.addEventListener("load", function(){

setTimeout(function(){

document.getElementById("welcome").classList.add("hide")

document.getElementById("page").style.filter="blur(0)"

},1500)

})