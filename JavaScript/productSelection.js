const productList = [];
var productCount = 0;

class Product {
    constructor(name, price, description, img, alt, product) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.img = img;
        this.alt = alt;
        this.product = product;

        productList[productCount] = this.name;
        productCount++;
    }

    newProduct() {
        let gridLayout = document.getElementById("productList");

        let item = document.createElement("div");
        item.className = "col";
    
        let card = document.createElement("div");
        card.className = "card";
        card.id = this.product
    
        let image = document.createElement("img");
        image.className = "card-img-top";
        image.src = this.img;
        image.alt = this.alt;
    
        let body = document.createElement("div");
        body.className = "card-body";
    
        let pName = document.createElement("h5");
        pName.className = "card-title";
        pName.textContent = this.name;
    
        let pPrice = document.createElement("h5");
        pPrice.className = "card-text item-price";
        pPrice.innerText = "$" + this.price;
    
        let desc = document.createElement("p");
        desc.className = "card-text";
        desc.innerText = this.description;
    
    
        body.appendChild(pName);
        body.appendChild(pPrice);
        body.appendChild(desc);
    
        card.appendChild(image);
        card.appendChild(body);
    
        item.appendChild(card);
    
        gridLayout.appendChild(item);
    }
}



var p1 = new Product("product1", "10", "Product description here.", "../images/Default-Image.svg", "This is an Image", "p1");
var p2 = new Product("product2", "25", "Product description here.", "../images/Default-Image.svg", "This is an Image", "p2");
var p3 = new Product("product3", "15", "Product description here.", "../images/Default-Image.svg", "This is an Image", "p3");
var p4 = new Product("product4", "50", "Product description here.", "../images/Default-Image.svg", "This is an Image", "p4");
var p5 = new Product("product5", "80", "Product description here.", "../images/Default-Image.svg", "This is an Image", "p5");
var p6 = new Product("product6", "5", "Product description here.", "../images/Default-Image.svg", "This is an Image", "p6");



//console.log(productCount);
//console.log(productList.length);
//console.log(window["p" + 1].name);



function runProductPage(id) {
    sessionStorage.setItem("productPage", id);
    sessionStorage.setItem("productName", eval(id).name);
    sessionStorage.setItem("productPrice", eval(id).price);
    sessionStorage.setItem("productDesc", eval(id).description);
    sessionStorage.setItem("productImg", eval(id).img);
    sessionStorage.setItem("productAlt", eval(id).alt);
    window.open("../HTML/productPage.html", "_self");
}

function searchProducts() {
    var srch = sessionStorage.getItem("Search");
    var itemsMatching = 0;
    for(var i = 0;i < productList.length;i++) {
        if(productList[i].search(srch) != -1) {
            eval("p" + eval(i + 1)).newProduct();
            itemsMatching++;
        }
        if(eval(i + 1) >= productCount && itemsMatching == 0) {
            for(var j = 1;j > 0;j++) {
                try {
                    eval("p" + j).newProduct();
                }
                catch {
                    break;
                }
            }
        }
    }
    sessionStorage.removeItem("Search");
}

window.addEventListener("load", function() {
    try {
        if(sessionStorage.getItem("Search").trim().length > 0) {
            searchProducts();
        }
    }
    catch {
        for(var i = 1;i > 0;i++) {
            try {
                eval("p" + i).newProduct();
            }
            catch {
                sessionStorage.setItem("productCount", productCount);
                break;
            }
        }
    }
});


window.addEventListener("load", function() {
    var products = document.querySelectorAll(".card");
    console.log(products);
    products.forEach(function(elem, index, arr) {
        elem.addEventListener("click", function() {
            runProductPage(arr[index].id);
        });
    });
});