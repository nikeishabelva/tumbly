const products=[
{id:1,name:"Rosie Daily",type:"Everyday",price:89000,emoji:"🌷"},
{id:2,name:"Pink Ribbon",type:"Cute",price:99000,emoji:"🎀"},
{id:3,name:"Blush Bunny",type:"Cute",price:109000,emoji:"🐰"},
{id:4,name:"Milky Pink",type:"Classic",price:95000,emoji:"♡"},
{id:5,name:"Rose Latte",type:"Elegant",price:119000,emoji:"🌸"},
{id:6,name:"Sweet Bow",type:"Cute",price:105000,emoji:"🎀"},
{id:7,name:"Pink Bloom",type:"Floral",price:125000,emoji:"✿"},
{id:8,name:"Soft Berry",type:"Daily",price:115000,emoji:"🍓"}
];
let cart=[];
const money=n=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(n);
function render(){
document.getElementById("products").innerHTML=products.map(p=>`
<article class="product">
<div class="product-pic"><div class="small-tumbler"><div class="lid"></div><div class="straw"></div><div class="cup">${p.emoji}<small>tumbly</small></div></div></div>
<div class="product-info"><span class="pill">${p.type}</span><h3>${p.name}</h3><p>Soft pink • aesthetic • everyday</p><div class="price">${money(p.price)}</div><button class="add" onclick="add(${p.id})">Add to bag ♡</button></div>
</article>`).join("");
}
function add(id){let p=products.find(x=>x.id===id),i=cart.find(x=>x.id===id);i?i.qty++:cart.push({...p,qty:1});document.getElementById("count").textContent=cart.reduce((a,x)=>a+x.qty,0);let t=document.getElementById("toast");t.classList.add("show");setTimeout(()=>t.classList.remove("show"),1600)}
function openCart(){document.getElementById("items").innerHTML=cart.length?cart.map(x=>`<div class="cart-row"><span>${x.emoji} ${x.name} × ${x.qty}</span><b>${money(x.price*x.qty)}</b></div>`).join(""):"<p style='color:#806c71;font-size:13px'>Bag kamu masih kosong ♡</p>";document.getElementById("total").textContent=money(cart.reduce((a,x)=>a+x.price*x.qty,0));document.getElementById("modal").classList.add("open")}
function closeCart(){document.getElementById("modal").classList.remove("open")}
function checkout(){if(!cart.length)return alert("Bag kamu masih kosong ♡");let order=cart.map(x=>`${x.name} x${x.qty}`).join(", ");window.open("https://wa.me/?text="+encodeURIComponent("Halo Tumbly! Aku mau order: "+order),"_blank")}
render();
