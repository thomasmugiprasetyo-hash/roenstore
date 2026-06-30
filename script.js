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


/* ========================= */
/* SIDEBAR */
/* ========================= */

nav{
display:flex;
justify-content:center;
align-items:center;
position:relative;
padding:18px 20px;
background:#111827;
}

.logo{
font-size:24px;
font-weight:bold;
color:#3b82f6;
}

.menu{
display:none;
}

.menuIcon{
position:absolute;
left:20px;
font-size:30px;
color:#fff;
cursor:pointer;
user-select:none;
z-index:1001;
}

.sidebar{
position:fixed;
top:0;
left:-270px;
width:260px;
height:100%;
background:#111827;
transition:.3s;
z-index:1002;
box-shadow:5px 0 20px rgba(0,0,0,.5);
overflow-y:auto;
}

.sidebar.active{
left:0;
}

.sidebar h2{
padding:22px;
text-align:center;
color:#3b82f6;
font-size:22px;
border-bottom:1px solid #2d3748;
}

.sidebar a{
display:block;
padding:16px 22px;
text-decoration:none;
color:white;
font-size:15px;
transition:.2s;
}

.sidebar a:hover{
background:#1e293b;
padding-left:28px;
}

.sidebar hr{
border:none;
border-top:1px solid #2d3748;
margin:10px 20px;
}

#overlay{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,.45);
display:none;
z-index:1001;
}

#overlay.active{
display:block;
}

@media(max-width:600px){

nav{
padding:18px;
}

.logo{
font-size:22px;
}

.menuIcon{
left:15px;
font-size:28px;
}

}
