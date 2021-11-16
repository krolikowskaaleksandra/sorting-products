let products = ["blouse", "top", "dress", "sweater", "shirt", "skirt"];

let productsList = document.getElementById("productsList");

products.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    productsList.appendChild(li);
})

let AZ = document.getElementById('A-Z');
AZ.onclick = function () {
    alert("ola");
};

let ZA = document.getElementById('Z-A');
ZA.onclick = function () {
    alert("adi");
};