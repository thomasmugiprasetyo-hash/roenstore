function toggleMenu(){

const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

sidebar.classList.toggle("active");
overlay.classList.toggle("active");

}


// tutup sidebar kalau klik luar

document.addEventListener("click",function(e){

const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const icon = document.querySelector(".menuIcon");


if(
sidebar &&
sidebar.classList.contains("active") &&
!sidebar.contains(e.target) &&
!icon.contains(e.target)
){

sidebar.classList.remove("active");
overlay.classList.remove("active");

}

});



// SEARCH

const search = document.getElementById("search");

if(search){

search.addEventListener("keyup",()=>{

let value = search.value.toLowerCase();

let cards = document.querySelectorAll(".card");


cards.forEach(card=>{

let title = card.querySelector("h2").innerText.toLowerCase();


if(title.includes(value)){

card.style.display="flex";

}else{

card.style.display="none";

}


});


});

}
