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




// =================
// KERANJANG
// =================


let keranjang = [];



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

<br>

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






// =================
// BELI LANGSUNG
// =================


function beliSekarang(nama,harga){


let konfirmasi = confirm(
"Produk: "+nama+
"\nHarga: Rp "+harga+
"\n\nLanjut pembayaran?"
);



if(konfirmasi){


alert(
"Silahkan lanjut pembayaran untuk "+nama
);


}


}







function checkout(){


if(keranjang.length === 0){

alert("Keranjang masih kosong");

return;

}



alert("Lanjut pembayaran QRIS");


}







// =================
// DETAIL PRODUK
// =================


function lihatProduk(nama,harga,gambar,deskripsi){


localStorage.setItem(
"produk",
JSON.stringify({

nama:nama,
harga:harga,
gambar:gambar,
deskripsi:deskripsi

})
);



window.location.href="detail.html";


}

function filterProduk(kategori){

let cards=document.querySelectorAll(".card");

cards.forEach(card=>{

if(kategori==="all"){

card.style.display="flex";

}else{

if(card.dataset.kategori===kategori){

card.style.display="flex";

}else{

card.style.display="none";

}

}

});

let tombol=document.querySelectorAll(".kategori button");

tombol.forEach(btn=>btn.classList.remove("aktif"));

event.target.classList.add("aktif");

}
