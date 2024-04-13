const select = (el) => {
   return document.querySelector(el)
}
const hamburger = select(".hamburger")
const headerEl = select("header")
console.log(hamburger)
hamburger.addEventListener("click", closeMobileMenu)
function closeMobileMenu(){
    console.log("hi")
    headerEl.classList.toggle("mobile")
}