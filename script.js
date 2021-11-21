const products = [{
        name: "blouse",
    },
    {
        name: "top",
    },
    {
        name: "dress",
    },
    {
        name: "sweater",
    },
    {
        name: "shirt",
    },
    {
        name: "skirt",
    },

];
const productsList = document.getElementById("productsList");

products.forEach(({
    name
}) => {
    let li = document.createElement("li");
    li.innerText = name;
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
        name
    }) => {
        let li = document.createElement("li");
        li.innerText = name;
        productsList.appendChild(li);
    })

}

function sortProductsZA() {
    products.sort((b, a) => (b.name > a.name) ? -1 : 1)
    productsList.innerText = "";
    products.forEach(({
        name
    }) => {
        let li = document.createElement("li");
        li.innerText = name;
        productsList.appendChild(li);
    })

}