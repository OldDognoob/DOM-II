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

const textintro = document.getElementsByClassName(`text`);
window.addEventListener(`wheel`, () =>{
 textintro.setAttribute("style", "color: coral;");
});

//drag-drop



// load

window.addEventListener('load', (event) => {
    alert('page loaded');
  });

//focus & changing color

input.addEventListener('focus',(event) => {
  input.style.backgroundColor = "aqua";
  input.style.color = "green"  
})
//resize

window.addEventListener('resize', (event) => { 
    alert ('You got resized');
});

// scroll & changing color

const contentheader= document.getElementsByClassName('content-section')[0]
window.addEventListener('scroll', () => {
   contentheader.setAttribute("style", "color: coral"); 
    
});

//select



//dblclick

const destinationimg = document.querySelector('a');
destinationimg.addEventListener(`dblclick`, () => {
    destinationimg.style.visibility = 'hidden';
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







// changing colors

const navbar = document.getElementsByClassName('main-navigation')

window.addEventListener(`load`, ()=>{
    navbar.setAttribute("style", "color: yellow");
});


