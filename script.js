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

        const productList = document.getElementById("product-list");

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
                        productList.appendChild(li);
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

        const allProducts = document.getElementById("allProducts");
        const toniki = document.getElementById("toniki");
        const serum = document.getElementById("serum");
        const kremy = document.getElementById("kremy");
        const pianki = document.getElementById("pianki");
        const peeling = document.getElementById("peeling");

        function displayAllCategory() {
                const findAllProducts = (product) => {
                        return product;
                }
                const allProducts = products.filter(findAllProducts);
                productList.innerText = "";
                displayProducts(allProducts);
                sessionStorage.setItem("category", "")
        }

        function displayTonikiCategory() {
                const findTonikiProducts = (product) => {
                        return product.category === "toniki";
                }
                const tonikiProducts = products.filter(findTonikiProducts);
                productList.innerText = "";
                displayProducts(tonikiProducts);
                sessionStorage.setItem("category", "toniki")
        }

        function displaySerumCategory() {
                const findSerumProducts = (product) => {
                        return product.category === "serum";
                }
                const serumProducts = products.filter(findSerumProducts);
                productList.innerText = "";
                displayProducts(serumProducts);
                sessionStorage.setItem("category", "serum")
        }

        function displayKremyCategory() {
                const findKremyProducts = (product) => {
                        return product.category === "kremy";
                }
                const kremyProducts = products.filter(findKremyProducts);
                productList.innerText = "";
                displayProducts(kremyProducts);
                sessionStorage.setItem("category", "kremy")
        }

        function displayPiankiCategory() {
                const findPiankiProducts = (product) => {
                        return product.category === "pianki";
                }
                const piankiProducts = products.filter(findPiankiProducts);
                productList.innerText = "";
                displayProducts(piankiProducts);
                sessionStorage.setItem("category", "pianki")
        }

        function displayPeelingCategory() {
                const findPeelingProducts = (product) => {
                        return product.category === "peeling";
                }
                const peelingProducts = products.filter(findPeelingProducts);
                productList.innerText = "";
                displayProducts(peelingProducts);
                sessionStorage.setItem("category", "peeling")
        }


        allProducts.addEventListener("click", displayAllCategory)
        toniki.addEventListener("click", displayTonikiCategory)
        serum.addEventListener("click", displaySerumCategory)
        kremy.addEventListener("click", displayKremyCategory)
        pianki.addEventListener("click", displayPiankiCategory)
        peeling.addEventListener("click", displayPeelingCategory)



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