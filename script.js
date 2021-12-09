        products = [{
                name: "blouse",
                price: 1000,
                image: "images/blouse.png",
                category: "woman",
            },
            {
                name: "top",
                price: 50,
                image: "images/top.png",
                category: "woman",
            },
            {
                name: "dress",
                price: 79,
                image: "images/dress.png",
                category: "woman",
            },
            {
                name: "sweater",
                price: 80,
                image: "images/sweater.png",
                category: "woman",
            },
            {
                name: "t-shirt",
                price: 49,
                image: "images/t-shirt.png",
                category: "woman",
            },
            {
                name: "skirt",
                price: 120,
                image: "images/skirt.png",
                category: "woman",
            },
            {
                name: "shirt",
                price: 49,
                image: "images/shirt.png",
                category: "man",
            },
            {
                name: "hoodie",
                price: 160,
                image: "images/hoodie.png",
                category: "man",
            },
            {
                name: "t-shirt",
                price: 69,
                image: "images/t-shirt2.png",
                category: "man",
            },
            {
                name: "trousers",
                price: 120,
                image: "images/trousers.png",
                category: "man",
            },
            {
                name: "jacket",
                price: 50,
                image: "images/jacket.png",
                category: "man",
            },
            {
                name: "jacket",
                price: 189,
                image: "images/jeans.png",
                category: "man",
            },
        ]



        const productsList = document.getElementById("productsList");



        let zloty = new Intl.NumberFormat("en-PL", {
            style: "currency",
            currency: "PLN",
        });



        products.forEach(({
            name,
            price,
            image,
        }) => {
            let li = document.createElement("li");
            let div = document.createElement("div");
            let img = document.createElement("img");
            let div2 = document.createElement("div");
            img.src = image;
            div2.innerText = name + " " + zloty.format(price);
            productsList.appendChild(li);
            li.appendChild(div);
            div.appendChild(img);
            div.appendChild(div2);
            li.classList.add("li")
            div.classList.add("div")
            img.classList.add("img")
            div2.classList.add("div2")
        })



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
                div2.innerText = name + " " + zloty.format(price);
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
            products.sort((a, b) => (a.name > b.name) ? -1 : 1)
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
                div2.innerText = name + " " + zloty.format(price);
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
                div2.innerText = name + " " + zloty.format(price);
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
            products.sort((a, b) => (a.price > b.price) ? -1 : 1)
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
                div2.innerText = name + " " + zloty.format(price);
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