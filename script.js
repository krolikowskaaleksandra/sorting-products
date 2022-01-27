        products = [{
                        name: "Day cream",
                        price: 49,
                        image: "images/cream1.png",
                        category: "cream",
                        inCart: 0,
                },
                {
                        name: "Anti wrinkle cream",
                        price: 59,
                        image: "images/cream2.png",
                        category: "cream",
                        inCart: 0,
                },
                {
                        name: "Night cream",
                        price: 50,
                        image: "images/cream3.png",
                        category: "cream",
                        inCart: 0,
                },
                {
                        name: "Normalizing facial toner",
                        price: 29,
                        image: "images/facialToner1.png",
                        category: "facialToner",
                        inCart: 0,
                },
                {
                        name: "Antibacterial facial toner",
                        price: 35,
                        image: "images/facialToner2.png",
                        category: "facialToner",
                        inCart: 0,

                },
                {
                        name: "Regulating facial toner",
                        price: 22,
                        image: "images/facialToner3.png",
                        category: "facialToner",
                        inCart: 0,
                },
                {
                        name: "Anti wrinkle serum",
                        price: 49,
                        image: "images/serum1.png",
                        category: "serum",
                        inCart: 0,
                },
                {
                        name: "Argan oil serum",
                        price: 39,
                        image: "images/serum2.png",
                        category: "serum",
                        inCart: 0,
                },
                {
                        name: "Night face serum",
                        price: 36,
                        image: "images/serum3.png",
                        category: "serum",
                        inCart: 0,
                },

                {
                        name: "Gentle face wash",
                        price: 39,
                        image: "images/faceWash1.png",
                        category: "faceWash",
                        inCart: 0,
                },
                {
                        name: "Organic face wash",
                        price: 30,
                        image: "images/faceWash2.png",
                        category: "faceWash",
                        inCart: 0,
                },
                {
                        name: "Detox face wash",
                        price: 38,
                        image: "images/faceWash3.png",
                        category: "faceWash",
                        inCart: 0,
                },
                {
                        name: "Strawberry face scrub",
                        price: 24,
                        image: "images/faceScrub1.png",
                        category: "faceScrub",
                        inCart: 0,
                },
                {
                        name: "Smoothing face scrub",
                        price: 29,
                        image: "images/faceScrub2.png",
                        category: "faceScrub",
                        inCart: 0,
                },
                {
                        name: "Hydrating face scrub",
                        price: 34,
                        image: "images/faceScrub3.png",
                        category: "faceScrub",
                        inCart: 0,
                },
        ]

        const productList = document.getElementById("product-list");

        const zloty = new Intl.NumberFormat("en-PL", {
                style: "currency",
                currency: "PLN",
        });


        const displayProducts = (products) => {
                products.forEach((item) => {
                        let product = document.createElement("li");
                        let productData = document.createElement("div");
                        let productImage = document.createElement("img");
                        let productDescription = document.createElement("div");
                        let addToCartButton = document.createElement("button");
                        productImage.src = item.image;
                        productDescription.innerText = item.name + " " + zloty.format(item.price);
                        addToCartButton.innerText = "Add to cart";
                        productList.appendChild(product);
                        product.appendChild(productData);
                        productData.appendChild(productImage);
                        productData.appendChild(productDescription);
                        product.appendChild(addToCartButton);
                        product.classList.add("product")
                        productData.classList.add("product-data")
                        productImage.classList.add("product-image")
                        productDescription.classList.add("product-description")
                        addToCartButton.classList.add("add-product-to-cart")
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
                sessionStorage.setItem("category", "");

        }

        const displayFacialTonerCategory = () => {
                const findFacialTonerProducts = (product) => {
                        return product.category === "facialToner";
                }
                const facialTonerProducts = products.filter(findFacialTonerProducts);
                productList.innerText = "";
                displayProducts(facialTonerProducts);
                sessionStorage.setItem("category", "facialToner");


        }

        const displaySerumCategory = () => {
                const findSerumProducts = (product) => {
                        return product.category === "serum";
                }
                const serumProducts = products.filter(findSerumProducts);
                productList.innerText = "";
                displayProducts(serumProducts);
                sessionStorage.setItem("category", "serum");

        }

        const displayCreamCategory = () => {
                const findCreamProducts = (product) => {
                        return product.category === "cream";
                }
                const creamProducts = products.filter(findCreamProducts);
                productList.innerText = "";
                displayProducts(creamProducts);
                sessionStorage.setItem("category", "cream");

        }

        const displayFaceWashCategory = () => {
                const findFaceWashProducts = (product) => {
                        return product.category === "faceWash";
                }
                const faceWashProducts = products.filter(findFaceWashProducts);
                productList.innerText = "";
                displayProducts(faceWashProducts);
                sessionStorage.setItem("category", "faceWash");

        }

        const displayFaceScrubCategory = () => {
                const findFaceScrubProducts = (product) => {
                        return product.category === "faceScrub";
                }
                const faceScrubProducts = products.filter(findFaceScrubProducts);
                productList.innerText = "";
                displayProducts(faceScrubProducts);
                sessionStorage.setItem("category", "faceScrub");

        }


        allProducts.addEventListener("click", displayAllCategory)
        facialToner.addEventListener("click", displayFacialTonerCategory)
        serum.addEventListener("click", displaySerumCategory)
        cream.addEventListener("click", displayCreamCategory)
        faceWash.addEventListener("click", displayFaceWashCategory)
        faceScrub.addEventListener("click", displayFaceScrubCategory)


        const sortProducts = (products) => {
                const selectedValue = document.getElementById("select-option").value;
                if (selectedValue === "ASC") {
                        products.sort((a, b) => a.name.localeCompare(b.name));
                        productList.innerText = "";
                        switch (sessionStorage.getItem('category')) {
                                case "facialToner": {
                                        displayFacialTonerCategory();
                                        break;
                                }
                                case "serum": {
                                        displaySerumCategory();
                                        break;
                                }
                                case "cream": {
                                        displayCreamCategory();
                                        break;
                                }
                                case "faceWash": {
                                        displayFaceWashCategory();
                                        break;
                                }
                                case "faceScrub": {
                                        displayFaceScrubCategory();
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
                                        displayFacialTonerCategory();
                                        break;
                                }
                                case "serum": {
                                        displaySerumCategory();
                                        break;
                                }
                                case "cream": {
                                        displayCreamCategory();
                                        break;
                                }
                                case "faceWash": {
                                        displayFaceWashCategory();
                                        break;
                                }
                                case "faceScrub": {
                                        displayFaceScrubCategory();
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
                                        displayFacialTonerCategory();
                                        break;
                                }
                                case "serum": {
                                        displaySerumCategory();
                                        break;
                                }
                                case "cream": {
                                        displayCreamCategory();
                                        break;
                                }
                                case "faceWash": {
                                        displayFaceWashCategory();
                                        break;
                                }
                                case "faceScrub": {
                                        displayFaceScrubCategory();
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
                                        displayFacialTonerCategory();
                                        break;
                                }
                                case "serum": {
                                        displaySerumCategory();
                                        break;
                                }
                                case "cream": {
                                        displayCreamCategory();
                                        break;
                                }
                                case "faceWash": {
                                        displayFaceWashCategory();
                                        break;
                                }
                                case "faceScrub": {
                                        displayFaceScrubCategory();
                                        break;
                                }
                                default: {
                                        displayProducts(products);
                                        break;
                                }
                        }
                }
        }

        //add products to the cart
        let cart = document.querySelectorAll(".add-product-to-cart")
        let cartProductCount = document.querySelector(".cart-product-count")
        for (let i = 0; i < cart.length; i++) {
                cart[i].addEventListener("click", () => {
                        cartNumbers(products[i]);
                        totalCost(products[i]);
                })
        }


        const onLoadCartNumbers = () => {
                let productNumbers = sessionStorage.getItem("cartNumbers");
                if (productNumbers) {
                        cartProductCount.textContent = productNumbers;
                }
        }

        const cartNumbers = (product) => {
                let productNumbers = sessionStorage.getItem("cartNumbers");
                productNumbers = parseInt(productNumbers);
                if (productNumbers) {
                        sessionStorage.setItem("cartNumbers", productNumbers + 1);
                        cartProductCount.textContent = productNumbers + 1;
                } else {
                        sessionStorage.setItem("cartNumbers", 1);
                        cartProductCount.textContent = "1";
                }
                setItems(product);
        }

        const setItems = (product) => {

                let cartItems = sessionStorage.getItem("productsInCart");
                cartItems = JSON.parse(cartItems);

                if (cartItems != null) {
                        if (cartItems[product.name] == undefined) {
                                cartItems = {
                                        ...cartItems,
                                        [product.name]: product
                                }
                        }
                        cartItems[product.name].inCart += 1;
                } else {
                        product.inCart = 1;
                        cartItems = {
                                [product.name]: product
                        }
                }
                sessionStorage.setItem("productsInCart", JSON.stringify(cartItems));
        }

        const totalCost = (product) => {
                let cartCost = sessionStorage.getItem("totalCost");
                if (cartCost != null) {
                        cartCost = parseInt(cartCost);
                        sessionStorage.setItem("totalCost", cartCost + product.price);
                } else {
                        sessionStorage.setItem("totalCost", product.price);
                }
        }
        onLoadCartNumbers();