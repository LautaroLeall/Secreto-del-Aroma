const openFragancias = document.querySelector(".fragancias");
const closeFragancias = document.querySelector(".closefragancias");
const list = document.querySelector(".list");
const listCard = document.querySelector(".listCard");
const total = document.querySelector(".total");
const body = document.querySelector("body");
const quantity = document.querySelector(".quantity");

openFragancias.addEventListener("click", () => {
    body.classList.add("active");
});

closeFragancias.addEventListener("click", () => {
    body.classList.remove("active");
});

let products = [
    {
        id: 1,
        name: "Fragancia 1",
        images: "../assets/images/imgbleudechanel.webp",
        price: 10,
        
    },
    {
        id: 2,
        name: "Fragancia 2",
        images: "../assets/images/imgbleudechanel.webp",
        price: 20,
       
    },
    {
        id: 3,
        name: "Fragancia 3",
        images: "../assets/images/imgbleudechanel.webp",
        price: 30,
       
    },
    {
        id: 4,
        name: "Fragancia 4",
        images: "../assets/images/imgbleudechanel.webp",
        price: 40,
        
    },
    {
        id: 5,
        name: "Fragancia 5",
        images: "../assets/images/imgbleudechanel.webp",
        price: 50,
        
    },
    {
        id: 6,
        name: "Fragancia 6",
        images: "../assets/images/imgbleudechanel.webp",
        price: 60,
        
    },  

];

let listCards = []; 
 
const initApp = () => {
    products.forEach((value,key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = 
        `
        <img src="img/${value.images}">
        <div class="title">${value.name}</div>
        <div class="price">$${value.price.toLocaleString()}</div>
        <button onclick="addToCart(${key})">Add to cart</button>
        `;
        list.appendChild(newDiv);
    });
};

initApp()


const addToCart = (key) => {
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }

    reloadCard();
};

const reloadCard = () => {
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value,key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if (value != null){
            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
            <div><img src="img/${value.images}"></div>
            <div class="cardTitle">${value.name}</div>
            <div class="cardPrice">$${value.price.toLocaleString()}</div>

            <div>
             <button style="background-color: #560bad
             class="cardButton" onclick= "changeQuantity (${key}),${value.quantity - 1}"
             >-</button>
            <div class="count">${count}</div>
               <button style="background-color: #560bad
             class="cardButton" onclick= "changeQuantity (${key}),${value.quantity + 1}"
             >-</button>
            </div>

            list.appendChild(newDiv);
            `
        }
        total.innerHTML = totalPrice.toLocaleString();
        quantity.innertext = count;
    })

};

const changeQuantity = (key, quantity) => {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
};