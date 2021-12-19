        
        
        
        
        
        
        
        
        
        // products = [{
        //         name: "blouse",
        //         price: 1000,
        //         image: "images/blouse.png",
        //         category: "woman",
        //     },
        //     {
        //         name: "top",
        //         price: 50,
        //         image: "images/top.png",
        //         category: "woman",
        //     },
        //     {
        //         name: "dress",
        //         price: 79,
        //         image: "images/dress.png",
        //         category: "woman",
        //     },
        //     {
        //         name: "sweater",
        //         price: 80,
        //         image: "images/sweater.png",
        //         category: "woman",
        //     },
        //     {
        //         name: "t-shirt",
        //         price: 49,
        //         image: "images/t-shirt.png",
        //         category: "woman",
        //     },
        //     {
        //         name: "skirt",
        //         price: 120,
        //         image: "images/skirt.png",
        //         category: "woman",
        //     },
        //     {
        //         name: "shirt",
        //         price: 49,
        //         image: "images/shirt.png",
        //         category: "man",
        //     },
        //     {
        //         name: "hoodie",
        //         price: 160,
        //         image: "images/hoodie.png",
        //         category: "man",
        //     },
        //     {
        //         name: "t-shirt",
        //         price: 69,
        //         image: "images/t-shirt2.png",
        //         category: "man",
        //     },
        //     {
        //         name: "trousers",
        //         price: 120,
        //         image: "images/trousers.png",
        //         category: "man",
        //     },
        //     {
        //         name: "jacket",
        //         price: 50,
        //         image: "images/jacket.png",
        //         category: "man",
        //     },
        //     {
        //         name: "jacket",
        //         price: 189,
        //         image: "images/jeans.png",
        //         category: "man",
        //     },
        // ]

        // const productsList = document.getElementById("productsList");

        // const zloty = new Intl.NumberFormat("en-PL", {
        //     style: "currency",
        //     currency: "PLN",
        // });


        // function displayProducts(products) {
        //     products.forEach(({
        //         name,
        //         price,
        //         image,
        //     }) => {
        //         let li = document.createElement("li");
        //         let div = document.createElement("div");
        //         let img = document.createElement("img");
        //         let div2 = document.createElement("div");
        //         img.src = image;
        //         div2.innerText = name + " " + zloty.format(price);
        //         productsList.appendChild(li);
        //         li.appendChild(div);
        //         div.appendChild(img);
        //         div.appendChild(div2);
        //         li.classList.add("li")
        //         div.classList.add("div")
        //         img.classList.add("img")
        //         div2.classList.add("div2")
        //         sessionStorage.removeItem('category');
        //     })
        // }
        // displayProducts(products);

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