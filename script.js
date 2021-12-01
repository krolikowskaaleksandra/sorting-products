const products = [{
        name: "blouse",
        price: 100,
        image: "images/blouse.png",

    },
    {
        name: "top",
        price: 50,
        image: "images/top.png",

    },
    {
        name: "dress",
        price: 79,
        image: "images/dress.png",

    },
    {
        name: "sweater",
        price: 80,
        image: "images/sweater.png",

    },
    {
        name: "shirt",
        price: 49,
        image: "images/shirt.png",

    },
    {
        name: "skirt",
        price: 120,
        image: "images/skirt.png",

    },

];
const productsList = document.getElementById("productsList");
// const productsImages = document.getElementById("images");

products.forEach(({
    name,
    price,
    image
}) => {
    let li = document.createElement("li");
    let div = document.createElement("div");
    let img = document.createElement("img");
    let div2 = document.createElement("div");
    img.src = image;
    div2.innerText = name + " " + price + " " + "PLN";
    productsList.appendChild(li);
    li.appendChild(div);
    div.appendChild(img);
    div.appendChild(div2);
    li.classList.add("li")
    div.classList.add("div")
    img.classList.add("img")
    div2.classList.add("div2")
})


// // products.forEach((item) => {
// //     let li = document.createElement("li");
// //     li.innerText = item.name;
// //     productsList.appendChild(li);
// //     products.sort();
// // })

function sortProductsAZ() {
    products.sort((a, b) => (a.name > b.name) ? 1 : -1)
    productsList.innerText = "";
    products.forEach(({
        name,
        price,
        image

    }) => {
        let li = document.createElement("li");
        let div = document.createElement("div");
        let img = document.createElement("img");
        let div2 = document.createElement("div");
        img.src = image;
        div2.innerText = name + " " + price + " " + "PLN";
        productsList.appendChild(li);
        li.appendChild(div);
        div.appendChild(img);
        div.appendChild(div2);
        li.classList.add("li")
        div.classList.add("div")
        img.classList.add("img")
        div2.classList.add("div2")
    })
}


function sortProductsZA() {
    products.sort((b, a) => (b.name > a.name) ? -1 : 1)
    productsList.innerText = "";
    products.forEach(({
        name,
        price,
        image
    }) => {
        let li = document.createElement("li");
        let div = document.createElement("div");
        let img = document.createElement("img");
        let div2 = document.createElement("div");
        img.src = image;
        div2.innerText = name + " " + price + " " + "PLN";
        productsList.appendChild(li);
        li.appendChild(div);
        div.appendChild(img);
        div.appendChild(div2);
        li.classList.add("li")
        div.classList.add("div")
        img.classList.add("img")
        div2.classList.add("div2")
    })
}



function sortProductsLow() {
    products.sort((a, b) => (a.price > b.price) ? 1 : -1)
    productsList.innerText = "";
    products.forEach(({
        name,
        price,
        image
    }) => {
        let li = document.createElement("li");
        let div = document.createElement("div");
        let img = document.createElement("img");
        let div2 = document.createElement("div");
        img.src = image;
        div2.innerText = name + " " + price + " " + "PLN";
        productsList.appendChild(li);
        li.appendChild(div);
        div.appendChild(img);
        div.appendChild(div2);
        li.classList.add("li")
        div.classList.add("div")
        img.classList.add("img")
        div2.classList.add("div2")

    })
}

function sortProductsHigh() {
    products.sort((b, a) => (b.price > a.price) ? -1 : 1)
    productsList.innerText = "";
    products.forEach(({
        name,
        price,
        image
    }) => {
        let li = document.createElement("li");
        let div = document.createElement("div");
        let img = document.createElement("img");
        let div2 = document.createElement("div");
        img.src = image;
        div2.innerText = name + " " + price + " " + "PLN";
        productsList.appendChild(li);
        li.appendChild(div);
        div.appendChild(img);
        div.appendChild(div2);
        li.classList.add("li")
        div.classList.add("div")
        img.classList.add("img")
        div2.classList.add("div2")

    })
}

function getSelectedValue() {
    const selectedValue = document.getElementById("selectOption").value;
    if (selectedValue === "az") {
        return sortProductsAZ();
    }
    if (selectedValue === "za") {
        return sortProductsZA();
    }
    if (selectedValue === "low") {
        return sortProductsLow();
    }
    if (selectedValue === "high") {
        return sortProductsHigh();
    }
}