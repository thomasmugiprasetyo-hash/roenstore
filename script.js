const search = document.getElementById("search");


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





let keranjang = [];



function tambahKeranjang(nama,harga){


keranjang.push({

nama:nama,
harga:harga

});



document.getElementById("jumlah").innerText = keranjang.length;



alert(nama+" masuk keranjang");



console.log(keranjang);



}
