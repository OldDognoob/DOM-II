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



//dbclick

const logSelection = document.getElementById('log');
logSelection.addEventListener('click', function(event) {
    console.log(`Target: `, event.target);
    console.log(`Current Target: `, event.currentTarget);

    event.target.style.color = 'lightblue';
})



// hidden object

const funbus = document.getElementsByClassName('intro');

funbus.addEventListener(`mouseover`, ()=>{
    funbus.style.visibility = 'hidden';
});
