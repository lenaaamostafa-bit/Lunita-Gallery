let paintings = [];
let editIndex = -1;
function displayPaintings(){
    let container= document.getElementById("cardsContainer");
    container.innerHTML= "";
    for(let i=0; i<paintings.length; i++) 
    {
        let card= document.createElement("div");
        card.className= "card";
        let img= document.createElement("img");
        img.src= paintings[i].image;
        let title= document.createElement("h3");
        title.innerText= paintings[i].title;
        let artist= document.createElement("p");
        artist.innerText= paintings[i].artist;
        let price= document.createElement("h4");
        price.innerText=  paintings[i].price+" LE";
        let editBtn= document.createElement("button");
        editBtn.innerText= "Edit";
        editBtn.onclick= function (){
            editPainting(i);
        };
        let deleteBtn= document.createElement("button");
        deleteBtn.innerText= "Delete";
        deleteBtn.onclick= function () {
            deletePainting(i);
        };
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(artist);
        card.appendChild(price);
        card.appendChild(editBtn);
        card.appendChild(deleteBtn);
        container.appendChild(card);
    }

}

function addPainting(){
    let title= document.getElementById("title").value;
    let artist= document.getElementById("artist").value;
    let price= document.getElementById("price").value;
    let image= document.getElementById("image").value;
    if(title=="" || artist=="" || price=="" || image=="") 
    {
        alert("Please fill all fields.");
    }
    let painting= {title: title, artist: artist, price: price, image: image};
    if (editIndex==-1) 
    {
        paintings.push(painting);
    } 
    else 
    {
        paintings[editIndex] = painting;
        editIndex = -1;
    }
    document.getElementById("title").value = "";
    document.getElementById("artist").value = "";
    document.getElementById("price").value = "";
    document.getElementById("image").value = "";
    displayPaintings();
}
function deletePainting(index){
    paintings.splice(index, 1);
    displayPaintings();
}
function editPainting(index) {
    document.getElementById("title").value = paintings[index].title;
    document.getElementById("artist").value = paintings[index].artist;
    document.getElementById("price").value = paintings[index].price;
    document.getElementById("image").value = paintings[index].image;
    editIndex= index;
}
paintings.push(
    {
        title: "The hidden river",
        artist: "Shahd Mostafa",
        price: 80000,
        image: "p3.jpg"
    },
    {
        title: "Silent roses",
        artist: "Rodaina Mostafa",
        price: 95000,
        image: "p7.png"
    },
    {
        title: "nature's whispers",
        artist: "Jana Naser",
        price: 79000,
        image: "p5.png"
    }
);
displayPaintings();
