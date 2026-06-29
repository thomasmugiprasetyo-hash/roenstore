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




// =================
// KERANJANG
// =================

let keranjang = [];



function tambahKeranjang(nama,harga){


keranjang.push({

nama:nama,
harga:harga

});



updateKeranjang();


alert(nama + " masuk keranjang");


console.log(keranjang);


}



function updateKeranjang(){


let jumlah = document.getElementById("jumlah");


if(jumlah){

jumlah.innerText = keranjang.length;

}


}
