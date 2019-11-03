// Your code goes here

// mouseover effect
const bottomBtn = document.getElementsByClassName('btn');

bottomBtn[0].addEventListener('mouseover', function () {
    bottomBtn[0].style.backgroundColor= "pink";
    bottomBtn[0].style.color = "white";
})

//keydown 

document.addEventListener('keydown', () => {
    alert('Document empty')
})

//wheel

window.addEventListener('wheel', (event) => {
    // console.log(event.clientY);
})


//drag-drop
const imagesContent = document.getElementsByClassName('img-content')

imagesContent[0].addEventListener('drag', e => {
    alert('Please do not use our pictures without permission!')
});


// load

window.addEventListener('load', (event) => {
    alert('page loaded');
  });

//focus & changing color
const navItems = document.getElementsByClassName('nav-link');
navItems[0].addEventListener("focus", (event) => {
    event.target.style.color = "black";
});

//resize

window.addEventListener('resize', (event) => { 
    alert ('You got resized');
});

// scroll & changing color

window.addEventListener('scroll', () => {
    var pixels = Math.round(window.scrolly);
    
})

//select

function logSelection(event) {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
}


//dblclick

const destinationimg = document.querySelector('img');
destinationimg.addEventListener(`dblclick`, () => {
    destinationimg.style.opacity = '.06';
});


// prevent default

const navLinks = document.querySelectorAll('a');

navLinks.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault()
        console.log(`Disabled.`)
    })
})


//Prevent event propagation

const Home = document.querySelector('.nav-link');
Home.addEventListener('click', (event) => {
    event.stopPropagation();
})



// changing colors
const secondBorder = document.querySelector('.inverse-content');
window.addEventListener('load', () => {
    secondBorder.style.border = '1rem solid blue';
});


// Nested


