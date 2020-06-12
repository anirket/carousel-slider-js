const container = document.querySelector(".carousel-inner");
const img = document.querySelectorAll(".carousel-inner img");
const prev = document.querySelector("#prevbtn");
const next = document.querySelector("#nextbtn");
let counter = 1;


//start with 1st image
size = img[0].clientWidth;
container.style.transform = `translateX(${-size*counter}px)`;

//add event listener to buttons
next.addEventListener("click",()=>{
    if(counter >= img.length -1) return;
    counter++;
    container.style.transition = `transform 0.4s ease-in-out`
    container.style.transform = `translateX(${-size*counter}px)`;


})
prev.addEventListener("click",()=>{
    if(counter <= 0) return;
    counter--;
    container.style.transition = `transform 0.4s ease-in-out`;
    container.style.transform = `translateX(${-size*counter}px)`;


})
//loop back if triggered clone image
container.addEventListener("transitionend",()=>{
    if(img[counter].id === 'firstclone'){
        container.style.transition = `none`;
        counter = 1;
        container.style.transform = `translateX(${-size*counter}px)`;
    }
    if(img[counter].id === 'lastclone'){
        container.style.transition = `none`;
        counter = img.length -2;
        container.style.transform = `translateX(${-size*counter}px)`;
    }
        


})