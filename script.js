//function 1-bis


let myFooter = document.querySelector("footer");
let i = 1;
function footerEffect(){
  console.log(`Click number ${i}.`);
  i++;
}

myFooter.addEventListener("click",footerEffect);


// function 2


const toggler = () => {
    navbarHeader.classList.toggle('collapse');
}
const menu = document.querySelector('button').addEventListener('click', toggler);


// function 3


document.getElementsByClassName("btn-outline-secondary")[0].addEventListener('click', () => {
    document.getElementsByClassName("card-text")[0].style.color = 'red'
});


// function 4


const textCard = document.getElementsByClassName("card-text")[1];
let btnBool = false;
const editButton = document.getElementsByClassName("btn-outline-secondary")[1];

editButton.addEventListener('click', () => {
    if (btnBool) {
        btnBool = false;
        textCard.style.color = '';
    } else {
        btnBool = true;
        textCard.style.color = 'green';
    }
});


// function 5


let navBar = document.getElementsByTagName("header")[0];
let targetLink = document.getElementsByTagName("link")[0];
// so far I understood only a link tag can be disabled
// whereas an href can't apply disabled method
function toggleBootstrap(){
  if (targetLink.disabled === true){
    targetLink.disabled = false;
  } else {
    targetLink.disabled = true;
  }
}

navBar.addEventListener("dblclick",toggleBootstrap);


// function 6


function hideCard(btn){
  var card = btn.target.closest('.card');
  var image = card.getElementsByClassName("card-img-top")[0];
  var text = card.getElementsByClassName("card-text")[0];
  var hover = text.style.visibility == 'hidden'

  if(hover){
    text.style= "";
    image.style = "";
    hover = false;
  } else {
    text.style= "visibility:hidden";
    image.style = "width:20%;";
    hover = true;
  }
}

let buttons = document.getElementsByClassName("btn-success");
for(let i = 0; i < buttons.length; i++){
  var viewBtn = buttons[i];
  //when the function is defined with an argument
  // and followed by false, it works
  viewBtn.addEventListener("mouseover", hideCard, false)
}

// function 7


let blocks = document.getElementsByClassName("col-md-4");

let switchBtn1 = document.getElementsByClassName("my-2")[1];
let album = document.getElementsByClassName("row")[1];
function switchCards(){
  album.insertBefore(blocks[blocks.length-1], blocks[0]);
}

switchBtn1.addEventListener("click",switchCards);


// function 8


let switchBtn2 = document.getElementsByClassName("btn-primary")[0];
let externalLink = document.getElementsByTagName("a")[4]
externalLink.removeAttribute("href");
function switchBack(){
  album.insertBefore(blocks[0], blocks[blocks.length]);
}
switchBtn2.addEventListener("click",switchBack);


// function 9
let jsEvent = document.querySelector('.navbar-brand')
let body = document.querySelector('body')

jsEvent.addEventListener('keydown', (press) => {
    if (press.key == "a")
      body.setAttribute('class', 'col-4')

    else if (press.key == "y")
       body.setAttribute("class",'col-4 offset-4')

    else if (press.key == "p")
    body.setAttribute("class",'col-4 offset-8')

    else if (press.key == "b")
    body.removeAttribute("class")

    
  });
