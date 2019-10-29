// Your code goes here

// mouseover effect
document.addEventListener('mouseover', (event) => {
    console.log('Mouse over!', `position: [${event.clientX},${event.client}]`);
    //console.log(event);
});

//keydown & changing color
const introheader = document.getElementsByClassName(`intro`)[0];

window.addEventListener(`keydown`, ()=>{
    introheader.setAttribute("style", "color: red;");
});


//wheel

const textcontent = document.getElementsByClassName('text')[0];
window.addEventListener('keydown', ()=>{
    textcontent.setAttribute("style", "color: grey;");
});


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
document.getElementById("").addEventListener("focus",myFunction);

function myFunction(){
    document.getElementById("").style.backgroundColor ="yellow";
}

//resize

window.addEventListener('resize', (event) => { 
    alert ('You got resized');
});

// scroll & changing color

const contentheader= document.getElementsByClassName('content-section')[0];
window.addEventListener('scroll', () => {
   contentheader.setAttribute("style", "color: coral"); 
    
});

//select
document.getElementById("").addEventListener("select", myfunction);
function myfucntion(){
    document.getElementById("").innerHTML = "You select some text!";
}


//dblclick

const destinationimg = document.querySelector('img');
destinationimg.addEventListener(`dblclick`, () => {
    destinationimg.style.opacity = '.06';
});

// hidden object

const funbus = document.getElementsByClassName('intro');

funbus.addEventListener(`mouseover`, ()=>{
    funbus.style.visibility = 'hidden';
});


// prevent default

navbar.addEventListener('click', navclicked);
ev.preventDefault();
function navclicked(ev){
    console.log(`Target: `, event.target);
    console.log(`Current Target: `, event.currentTrget);
}


//Prevent event propagation

const Home = document.querySelector('.nav-link');
Home.addEventListener('click', (event) => {
    event.stopPropagation();
})





// changing colors

const navbar = document.getElementsByClassName('main-navigation')

window.addEventListener(`load`, ()=>{
    navbar.setAttribute("style", "color: yellow");
});

// Nested


