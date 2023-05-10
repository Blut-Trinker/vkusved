//JSON

fetch("catalog.json")
.then((Response) => Response.json())
.then((data) => {
    let tovar = data.stuff;
    for (let i = 0; i< 16; i++) {
        let card = document.createElement("div");
        card.className = "card";
        card.id = "card" + i;
        let span = document.createElement("span");
        span.className = "bio";
        span.id = "span" + i;
        span.append(tovar[i].name);
        let br = document.createElement("br");
        let price = document.createElement("span");
        price.className = "price";
        price.id = "price" + i;
        price.append(tovar[i].price);
        let img = document.createElement("img");
        img.className = "cardImg";
        img.id = "img" + i;
        img.src = tovar[i].photoLink;
        card.append(img);
        card.append(span);
        card.append(br);
        card.append(price);
        document.getElementById("grid").append(card);       

    }
})
let priceZak = 0;
//Search
let grid1 = document.querySelector("#grid");
if(grid1){
setTimeout(()=> {
function cardF1 () {
    var num = parseInt(window.event.target.id.replace(/\D+/g,""));
        console.log(num);
    let card0 = document.querySelector("#card" + num);
    let price0 = document.querySelector("#price" + num);
    let img0 = document.querySelector("#img" + num);
    let span0 = document.querySelector("#span" + num) ;
        let cardB = document.createElement("div");
        cardB.className = "card";
        cardB.id = card0.id + "B";
        let spanB = document.createElement("span");
        spanB.className = "bio";
        spanB.append(span0.innerHTML);
        let brB = document.createElement("br");
        let priceB = document.createElement("span");
        priceB.className = "price";
        priceB.id = price0.id + "B";
        priceB.append(price0.innerHTML);
        let imgB = document.createElement("img");
        imgB.className = "cardImg";
        imgB.id = img0.id + "B";
        imgB.src = img0.src;
        cardB.append(imgB);
        cardB.append(spanB);
        cardB.append(brB);
        cardB.append(priceB);
        document.getElementById("gridB").append(cardB);
        priceZak +=Number(priceB.innerHTML);
        document.getElementById("priceZak").innerHTML = priceZak

      

}
grid1.addEventListener('click',cardF1);
},1000)
}
 


//Link in main document

let new1 = document.querySelector('#new1');
if(new1){
function funNew1 () {
    window.open("new.html")
    window.close("index.html")
}
new1 = document.querySelector('#new1');
new1.addEventListener('click', funNew1);

function funPop1 () {
    window.open("pop.html")
    window.close("index.html")
}
let pop1 = document.querySelector('#pop1');
pop1.addEventListener('click', funPop1);

function funCatalog1 () {
    window.open("catalog.html")
    window.close("index.html")
}
let catalog1 = document.querySelector('#catalog1');
catalog1.addEventListener('click', funCatalog1);

function funAbout1 () {
    window.open("AboutUs.html")
    window.close("index.html")
}
let about1 = document.querySelector('#about1');
about1.addEventListener('click', funAbout1);
}


function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }
