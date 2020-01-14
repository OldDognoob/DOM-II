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


// change title when scrolling website

const opacityEffect = document.querySelector("h1");
document.addEventListener('scroll', e => {
    opacityEffect.textContent = "We are scrolling down";
})

//focus



//blur





//nested click event
const destinationDiv = document.querySelector('.destination');
destinationDiv.style.cursor ="pointer";

destinationDiv.addEventListener('click', (n) =>{
    if (destinationDiv.style.background !== 'yellow'){
        destinationDiv.style.background='yellow';
    }else{
        destinationDiv.style.background = 'initial';
    }
})

const destinationHover = document.querySelectorAll(".destination");
console.log(destinationHover);
destinationHover[0].addEventListener("mouseover", e => {
  console.log("clicked:sun");
});
destinationHover[1].addEventListener("mouseover", e => {
  console.log("clicked:mountain");
});
destinationHover[2].addEventListener("mouseover", e => {
  console.log("clicked:island");
});

// use greenSock animations
// animate one element
TweenMax.from('.logo-heading', 1, {opacity:0});

//animate many elements
TweenMax.from('.content-section', 2, {opacity:1, scale:0, delay:3});

//stretch goal adding oncick in html 
onclick="alert('helloooo!! We are back!!')"




document.querySelectorAll("nav button").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      gsap.to(window, {duration: 1, scrollTo:{y:"#section" + (index + 1), offsetY:70}});
    });
  });

 
  gsap.to(".img-content", {duration: 1, attr: {x:100, y: 50, width: 100, height: 100}, ease: "none"});
  
  gsap.to(".logo-heading",{duration:2, x:300, backgroundColor: "lightblue", borderRadius:"20%", border: "5px solid white"});