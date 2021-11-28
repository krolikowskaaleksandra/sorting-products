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

products.forEach(({
    name,
    price,
}) => {
    let li = document.createElement("li");
    li.innerHTML = name + " " + price;
    productsList.appendChild(li);
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

    }) => {
        let li = document.createElement("li");
        li.innerText = name + " " + price;
        productsList.appendChild(li);

    })
}


function sortProductsZA() {
    products.sort((b, a) => (b.name > a.name) ? -1 : 1)
    productsList.innerText = "";
    products.forEach(({
        name,
        price,
    }) => {
        let li = document.createElement("li");
        li.innerText = name + " " + price;
        productsList.appendChild(li);
    })
}



function sortProductsLow() {
    products.sort((a, b) => (a.price > b.price) ? 1 : -1)
    productsList.innerText = "";
    products.forEach(({
        name,
        price,
    }) => {
        let li = document.createElement("li");
        li.innerText = name + " " + price;
        productsList.appendChild(li);

    })
}

function sortProductsHigh() {
    products.sort((b, a) => (b.price > a.price) ? -1 : 1)
    productsList.innerText = "";
    products.forEach(({
        name,
        price,
    }) => {
        let li = document.createElement("li");
        li.innerText = name + " " + price;
        productsList.appendChild(li);

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