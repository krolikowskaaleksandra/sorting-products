        products = [{
                        name: "Tonik normalizujący",
                        price: 29,
                        image: "images/tonik1.png",
                        category: "facialToner",
                },
                {
                        name: "Tonik oczyszczający",
                        price: 35,
                        image: "images/tonik2.png",
                        category: "facialToner",
                },
                {
                        name: "Tonik regulujący",
                        price: 22,
                        image: "images/tonik3.png",
                        category: "facialToner",
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
                        category: "cream",
                },
                {
                        name: "Krem przeciwzmarszczkowy",
                        price: 59,
                        image: "images/krem2.png",
                        category: "cream",
                },
                {
                        name: "Krem na noc",
                        price: 50,
                        image: "images/krem3.png",
                        category: "cream",
                },
                {
                        name: "Pianka oczyszczająca",
                        price: 39,
                        image: "images/pianka1.png",
                        category: "faceWash",
                },
                {
                        name: "Pianka do mycia twarzy",
                        price: 30,
                        image: "images/pianka2.png",
                        category: "faceWash",
                },
                {
                        name: "Delikatna pianka do twarzy",
                        price: 38,
                        image: "images/pianka3.png",
                        category: "faceWash",
                },
                {
                        name: "Peeling do twarzy",
                        price: 24,
                        image: "images/peeling1.png",
                        category: "faceScrub",
                },
                {
                        name: "Łagodzący peeling",
                        price: 29,
                        image: "images/peeling2.png",
                        category: "faceScrub",
                },
                {
                        name: "Peeling cukrowy",
                        price: 34,
                        image: "images/peeling3.png",
                        category: "faceScrub",
                },
        ]

        const productList = document.getElementById("product-list");

        const zloty = new Intl.NumberFormat("en-PL", {
                style: "currency",
                currency: "PLN",
        });


        const displayProducts = (products) => {
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
        const facialToner = document.getElementById("facialToner");
        const serum = document.getElementById("serum");
        const cream = document.getElementById("cream");
        const faceWash = document.getElementById("faceWash");
        const faceScrub = document.getElementById("faceScrub");


        const displayAllCategory = () => {
                const findAllProducts = (product) => {
                        return product;
                }
                const allProducts = products.filter(findAllProducts);
                productList.innerText = "";
                displayProducts(allProducts);
                sessionStorage.setItem("category", "")
        }

        const displayTonikiCategory = () => {
                const findTonikiProducts = (product) => {
                        return product.category === "facialToner";
                }
                const tonikiProducts = products.filter(findTonikiProducts);
                productList.innerText = "";
                displayProducts(tonikiProducts);
                sessionStorage.setItem("category", "facialToner")
        }

        const displaySerumCategory = () => {
                const findSerumProducts = (product) => {
                        return product.category === "serum";
                }
                const serumProducts = products.filter(findSerumProducts);
                productList.innerText = "";
                displayProducts(serumProducts);
                sessionStorage.setItem("category", "serum")
        }

        const displayKremyCategory = () => {
                const findKremyProducts = (product) => {
                        return product.category === "cream";
                }
                const kremyProducts = products.filter(findKremyProducts);
                productList.innerText = "";
                displayProducts(kremyProducts);
                sessionStorage.setItem("category", "cream")
        }

        const displayPiankiCategory = () => {
                const findPiankiProducts = (product) => {
                        return product.category === "faceWash";
                }
                const piankiProducts = products.filter(findPiankiProducts);
                productList.innerText = "";
                displayProducts(piankiProducts);
                sessionStorage.setItem("category", "faceWash")
        }

        const displayPeelingCategory = () => {
                const findPeelingProducts = (product) => {
                        return product.category === "faceScrub";
                }
                const peelingProducts = products.filter(findPeelingProducts);
                productList.innerText = "";
                displayProducts(peelingProducts);
                sessionStorage.setItem("category", "faceScrub")
        }


        allProducts.addEventListener("click", displayAllCategory)
        facialToner.addEventListener("click", displayTonikiCategory)
        serum.addEventListener("click", displaySerumCategory)
        cream.addEventListener("click", displayKremyCategory)
        faceWash.addEventListener("click", displayPiankiCategory)
        faceScrub.addEventListener("click", displayPeelingCategory)


        const sortProducts = (products) => {
                const selectedValue = document.getElementById("selectOption").value;
                if (selectedValue === "ASC") {
                        products.sort((a, b) => a.name.localeCompare(b.name));
                        productList.innerText = "";
                        switch (sessionStorage.getItem('category')) {
                                case "facialToner": {
                                        displayTonikiCategory();
                                        break;
                                }
                                case "serum": {
                                        displaySerumCategory();
                                        break;
                                }
                                case "cream": {
                                        displayKremyCategory();
                                        break;
                                }
                                case "faceWash": {
                                        displayPiankiCategory();
                                        break;
                                }
                                case "faceScrub": {
                                        displayPeelingCategory();
                                        break;
                                }
                                default: {
                                        displayProducts(products);
                                        break;
                                }
                        }
                }
                if (selectedValue === "DESC") {
                        products.sort((a, b) => b.name.localeCompare(a.name));
                        productList.innerText = "";
                        switch (sessionStorage.getItem('category')) {
                                case "facialToner": {
                                        displayTonikiCategory();
                                        break;
                                }
                                case "serum": {
                                        displaySerumCategory();
                                        break;
                                }
                                case "cream": {
                                        displayKremyCategory();
                                        break;
                                }
                                case "faceWash": {
                                        displayPiankiCategory();
                                        break;
                                }
                                case "faceScrub": {
                                        displayPeelingCategory();
                                        break;
                                }
                                default: {
                                        displayProducts(products);
                                        break;
                                }
                        }
                }
                if (selectedValue === "low") {
                        products.sort((a, b) => (a.price > b.price) ? 1 : -1)
                        productList.innerText = "";
                        switch (sessionStorage.getItem('category')) {
                                case "facialToner": {
                                        displayTonikiCategory();
                                        break;
                                }
                                case "serum": {
                                        displaySerumCategory();
                                        break;
                                }
                                case "cream": {
                                        displayKremyCategory();
                                        break;
                                }
                                case "faceWash": {
                                        displayPiankiCategory();
                                        break;
                                }
                                case "faceScrub": {
                                        displayPeelingCategory();
                                        break;
                                }
                                default: {
                                        displayProducts(products);
                                        break;
                                }
                        }
                }
                if (selectedValue === "high") {
                        products.sort((a, b) => (a.price > b.price) ? -1 : 1)
                        productList.innerText = "";
                        switch (sessionStorage.getItem('category')) {
                                case "facialToner": {
                                        displayTonikiCategory();
                                        break;
                                }
                                case "serum": {
                                        displaySerumCategory();
                                        break;
                                }
                                case "cream": {
                                        displayKremyCategory();
                                        break;
                                }
                                case "faceWash": {
                                        displayPiankiCategory();
                                        break;
                                }
                                case "faceScrub": {
                                        displayPeelingCategory();
                                        break;
                                }
                                default: {
                                        displayProducts(products);
                                        break;
                                }
                        }
                }
        }