        products = [{
                        name: "Tonik normalizujący",
                        price: 29,
                        image: "images/tonik1.png",
                        category: "toniki",
                },
                {
                        name: "Tonik oczyszczający",
                        price: 35,
                        image: "images/tonik2.png",
                        category: "toniki",
                },
                {
                        name: "Tonik regulujący",
                        price: 22,
                        image: "images/tonik3.png",
                        category: "toniki",
                },
                {
                        name: "Przeciwzmarszczkowe serum",
                        price: 49,
                        image: "images/serum1.png",
                        category: "serum",
                },
                {
                        name: "Serum z olejkiem arganowym",
                        price: 39,
                        image: "images/serum2.png",
                        category: "serum",
                },
                {
                        name: "Serum do twarzy na noc",
                        price: 36,
                        image: "images/serum3.png",
                        category: "serum",
                },
                {
                        name: "Krem na dzień",
                        price: 49,
                        image: "images/krem1.png",
                        category: "kremy",
                },
                {
                        name: "Krem przeciwzmarszczkowy",
                        price: 59,
                        image: "images/krem2.png",
                        category: "kremy",
                },
                {
                        name: "Krem na noc",
                        price: 50,
                        image: "images/krem3.png",
                        category: "kremy",
                },
                {
                        name: "Pianka oczyszczająca",
                        price: 39,
                        image: "images/pianka1.png",
                        category: "pianki",
                },
                {
                        name: "Pianka do mycia twarzy",
                        price: 30,
                        image: "images/pianka2.png",
                        category: "pianki",
                },
                {
                        name: "Delikatna pianka do twarzy",
                        price: 38,
                        image: "images/pianka3.png",
                        category: "pianki",
                },
                {
                        name: "Peeling do twarzy",
                        price: 24,
                        image: "images/peeling1.png",
                        category: "peeling",
                },
                {
                        name: "Łagodzący peeling",
                        price: 29,
                        image: "images/peeling2.png",
                        category: "peeling",
                },
                {
                        name: "Peeling cukrowy",
                        price: 34,
                        image: "images/peeling3.png",
                        category: "peeling",
                },
        ]

        const productsList = document.getElementById("productsList");

        const zloty = new Intl.NumberFormat("en-PL", {
                style: "currency",
                currency: "PLN",
        });


        function displayProducts(products) {
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
                        sessionStorage.removeItem('category');
                })
        }
        displayProducts(products);

        // function displayWomenCategory() {
        //     const findWomenProducts = (product) => {
        //         return product.category === "woman";
        //     }
        //     const womenProducts = products.filter(findWomenProducts);
        //     productsList.innerText = "";
        //     displayProducts(womenProducts);
        //     sessionStorage.setItem("category", "woman")
        // }


        // function displayMenCategory() {
        //     const findMenProducts = (product) => {
        //         return product.category === "man";
        //     }
        //     const menProducts = products.filter(findMenProducts);
        //     productsList.innerText = "";
        //     displayProducts(menProducts);
        //     sessionStorage.setItem("category", "man")
        // }



        // function sortProducts(products) {
        //     const selectedValue = document.getElementById("selectOption").value;
        //     if (selectedValue === "az") {
        //         products.sort((a, b) => (a.name > b.name) ? 1 : -1)
        //         productsList.innerText = "";
        //         switch (sessionStorage.getItem('category')) {
        //             case "woman": {
        //                 displayWomenCategory();
        //                 break;
        //             }
        //             case "man": {
        //                 displayMenCategory();
        //                 break;
        //             }
        //             default: {
        //                 displayProducts(products);
        //                 break;
        //             }
        //         }
        //     }
        //     if (selectedValue === "za") {
        //         products.sort((a, b) => (a.name > b.name) ? -1 : 1)
        //         productsList.innerText = "";
        //         switch (sessionStorage.getItem('category')) {
        //             case "woman": {
        //                 displayWomenCategory();
        //                 break;
        //             }
        //             case "man": {
        //                 displayMenCategory();
        //                 break;
        //             }

        //             default: {
        //                 displayProducts(products);
        //                 break;
        //             }
        //         }
        //     }
        //     if (selectedValue === "low") {
        //         products.sort((a, b) => (a.price > b.price) ? 1 : -1)
        //         productsList.innerText = "";
        //         switch (sessionStorage.getItem('category')) {
        //             case "woman": {
        //                 displayWomenCategory();
        //                 break;
        //             }
        //             case "man": {
        //                 displayMenCategory();
        //                 break;
        //             }
        //             default: {
        //                 displayProducts(products);
        //                 break;
        //             }
        //         }
        //     }
        //     if (selectedValue === "high") {
        //         products.sort((a, b) => (a.price > b.price) ? -1 : 1)
        //         productsList.innerText = "";
        //         switch (sessionStorage.getItem('category')) {
        //             case "woman": {
        //                 displayWomenCategory();
        //                 break;
        //             }
        //             case "man": {
        //                 displayMenCategory();
        //                 break;
        //             }
        //             default: {
        //                 displayProducts(products);
        //                 break;
        //             }
        //         }
        //     }
        // }