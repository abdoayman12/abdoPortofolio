// number
let stats = document.querySelector(".stats");
let numbers = document.querySelectorAll(".number");
let startFun = false;
function startCount(el){
    let goal = el.dataset.goal;
    let start = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal){
            clearInterval(start);
        }
    }, 2000 / goal);
}
// ++ width
let section4 = document.querySelector(".four");
let info = document.querySelectorAll(".info-span");
let progSpan = document.querySelectorAll(".prog span");
let boulen = false;
window.addEventListener("load", ()=>{
    window.onscroll = function(){
        if (window.scrollY >= stats.offsetTop - 150){
            if (!startFun){
                numbers.forEach(num => startCount(num));
            }
            startFun = true;
        }
        if (!boulen && window.scrollY >= section4.offsetTop - 150){
            number();
            boulen = true;
        }
    }
})
function number(){
    progSpan.forEach(span =>{
        span.style.width = `${span.dataset.width}%`;
    })  
    info.forEach(infoSpan=>{
        infoSpan.style.display = "block";
        infoSpan.style.left = `calc(${infoSpan.dataset.info}% - 3%)`;
        let count = 0;
        let numbers = parseInt(infoSpan.dataset.info);
            let numElment = infoSpan.querySelector("span");
            let start = setInterval(() => {
                count++;
                numElment.textContent = count;
                if (count == numbers){
                    clearInterval(start);
                }
            }, 500 / numbers);
        })
}
// days
// the date
let date = new Date("Dec 31, 2025 23:59:59").getTime();
let years = document.querySelector(".container .title span");
years.innerHTML = new Date().getFullYear();
let counter = setInterval(() => {
    // now date
    let nowDate = new Date().getTime();
    let dateDeff = date - nowDate;
    // days
    let days = Math.floor(dateDeff / (1000 * 60 * 60 * 24));
    days = days < 10? `0${days}`:days;
    let hours = Math.floor(dateDeff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    hours = hours < 10? `0${hours}`: hours;
    let min = Math.floor(dateDeff % (1000 * 60 * 60) / (1000 * 60));
    min = min < 10? `0${min}`:min;
    let secound = Math.floor(dateDeff % (1000 * 60) / 1000);
    secound =  secound < 10? `0${secound}`:secound;
    // add element in the page 
    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = min;
    document.querySelector(".seconds").innerHTML = secound;
    if (dateDeff = 0){
        clearInterval(counter);
    }
}, 1000);
// arrow scroll
let span = document.querySelector(".arrow");
window.addEventListener("scroll",function(){
    this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
})
span.addEventListener("click", function(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
})
// meaga-menu
let meagaMenu = document.querySelector(".meaga-menu");
let closed = document.querySelector(".close");
let links = document.querySelector(".links");
let liM = document.querySelector(".header .container .main-nav  .other-links");
liM.addEventListener("click", function(e){
    e.stopPropagation();
    meagaMenu.classList.toggle("add");
})
meagaMenu.addEventListener('click', (e)=>{
    e.stopPropagation();
})
links.addEventListener("click", (e)=>{
    e.stopPropagation();
})
document.addEventListener("click", function(e){
    if (e.target != meagaMenu){
        meagaMenu.classList.remove("add");
    }
})
document.addEventListener("keyup", function(e){
    if (e.key == "Escape"){
        meagaMenu.classList.remove("add");
    }
})
closed.addEventListener("click", function(){
    meagaMenu.classList.remove('add');
})