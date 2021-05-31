// Fonctionnalité 1 :

let footer = document.querySelector("footer");

function posterOnTheConsole()
{
    console.log("clique");
}

footer.addEventListener("click",posterOnTheConsole);




// Fonctionnalité 1bis :

let footerbis = document.querySelector("footer");
let counter = 1;

function posterOnTheConsoleBis()
{
    console.log(`clique ${counter}`);
    counter++;
}

footerbis.addEventListener("click",posterOnTheConsoleBis);





// Fonctionnalité 2 :

function hamburgerMenu() {
	nav = document.getElementById("navbarHeader")
	hambuger = document.querySelector("button", ".navbar-toggler")
	hambuger.addEventListener("click", function () {
		nav.classList.toggle("collapse")
	})
}

hamburgerMenu()






// Fonctionnalité 3 :


function redText() {
    editCardButtonOne = document.querySelectorAll("div.col-md-4")[0]
    textCardOne = document.querySelectorAll("div.col-md-4 button.btn-outline-secondary")[0]
    editCardButtonOne.addEventListener("click", function() {
    textCardOne.style.color = "red"
    })
}
redText()






// Fonctionnalité 4 :


function greenText() {
	editCardButtonTwo = document.querySelectorAll("div.col-md-4")[1]
	textCardTwo = document.querySelectorAll("div.col-md-4 button.btn-outline-secondary")[1]
	i = 1
	editCardButtonTwo.addEventListener("click", function() {
		i++
    if (textCardTwo.style.color === "green")
    {
      textCardTwo.style.color = "";
    }
    else
    {
      textCardTwo.style.color = "green";
    }
	})
}
greenText()
console.log("")





// Fonctionnalité 5 :


function nuclearPage() {
	navbar = document.querySelector("div.navbar")
	bootstrap = document.querySelector("head").querySelector("link")
	i = 1
	navbar.addEventListener("dblclick", function () {
		i++
		if (document.getElementsByTagName("link")[0].rel == "stylesheet")           //if stylesheet is on, we turn it off
    document.getElementsByTagName("link")[0].rel = "styleDisabled";
  else
    document.getElementsByTagName("link")[0].rel = "stylesheet";
	})
}

nuclearPage()
console.log("")







// Fonctionnalité 6 :


let cards = document.getElementsByClassName("card");
let button_view = document.getElementsByClassName("btn-success");

for(let i = 0; i < cards.length; i++)
{
    function view()
    {
        if (cards[i].getElementsByClassName("card-text")[0].style.display != "none")
        {
            cards[i].getElementsByClassName("card-text")[0].style.display = "none";
            cards[i].getElementsByClassName("card-img-top")[0].style.width = "20%";
        }
        else
        {
            cards[i].getElementsByClassName("card-text")[0].style.display = "block";
            cards[i].getElementsByClassName("card-img-top")[0].style.width = "100%";
        }
    }
    button_view[i].addEventListener("mouseover", view);
}
console.log("")









// Fonctionnalité 7 :


const buttonNext = document.querySelector('main section p a.btn-secondary'); 
const cards2 = document.querySelectorAll('div.col-md-4'); 
const divcards = document.querySelector('div.album div.container div.row');
let card_1 = divcards.children[0];
let card_6 = divcards.children[5];

buttonNext.addEventListener('click', function() {   
  divcards.insertBefore(card_6, card_1);
  card_1 = divcards.children[0];
  card_6 = divcards.children[5];
}); 





// Fonctionnalité 8 :


const buttonPrevious = document.querySelector('main section p a.btn-primary'); 
card_1 = divcards.children[0];
card_6 = divcards.children[5];

buttonPrevious.addEventListener('click', function(event) {   
  event.preventDefault();            
  divcards.insertBefore(card_1, card_6.nextElementSibling);
  card_1 = divcards.children[0];
  card_6 = divcards.children[5];
}); 





//Fonctionnalité 9


let logo = document.getElementsByClassName('navbar-brand')[0];
logo.addEventListener('keypress', function(e) {
  let body = document.getElementsByTagName('body')[0];
  body.classList = "";
  switch (e.key) {
    case 'a':
      body.classList.add("col-4");
      break;
    case 'b':
      body.classList = "";
      break;
    case 'y':
      body.classList.add("col-4", "offset-4");
      break;
    case 'p':
      body.classList.add("col-4", "offset-8");
      break;
  }
});