function toggleMenu(){

const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

sidebar.classList.toggle("active");
overlay.classList.toggle("active");

}
const search = document.getElementById("search");

if(search){

search.addEventListener("keyup",()=>{

let value = search.value.toLowerCase();

let cards = document.querySelectorAll(".card");

cards.forEach(card=>{

let title = card.querySelector("h2").innerText.toLowerCase();

if(title.includes(value)){
card.style.display="block";
}else{
card.style.display="none";
}

});

});

}



  
