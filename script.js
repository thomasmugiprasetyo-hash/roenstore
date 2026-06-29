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


// paksa keranjang sembunyi saat web baru dibuka
window.onload = function(){

let box = document.getElementById("cartBox");

if(box){

box.style.display="none";

}

};





function tambahKeranjang(nama,harga){


keranjang.push({

nama:nama,
harga:harga

});


updateKeranjang();


console.log(keranjang);


}






function updateKeranjang(){


let jumlah = document.getElementById("jumlah");


if(jumlah){

jumlah.innerText = keranjang.length;

}


}







function bukaKeranjang(){


let box = document.getElementById("cartBox");


box.style.display="block";



let isi = document.getElementById("isiKeranjang");


let total = 0;



isi.innerHTML="";



if(keranjang.length === 0){


isi.innerHTML="Keranjang masih kosong";


document.getElementById("total").innerText =
"Total: Rp 0";


return;

}






keranjang.forEach((item,index)=>{


isi.innerHTML += `

<p>

${item.nama}

<br>

Rp ${item.harga}

<br><br>

<button onclick="hapusItem(${index})">

Hapus

</button>

</p>

`;



total += item.harga;


});




document.getElementById("total").innerText =
"Total: Rp "+total;


}







function tutupKeranjang(){


document.getElementById("cartBox").style.display="none";


}







function hapusItem(index){


keranjang.splice(index,1);


updateKeranjang();


bukaKeranjang();


}







function checkout(){


alert("Lanjut pembayaran QRIS");


}
