var pName = sessionStorage.getItem("productName");
var pID = sessionStorage.getItem("productPage");
var pPrice = sessionStorage.getItem("productPrice");
var pDescription = sessionStorage.getItem("productDesc");
var pImg = sessionStorage.getItem("productImg");
var pAlt = sessionStorage.getItem("productAlt");


window.addEventListener("load", function() {
    document.title = "Buy & Sell - " + pName;
});


document.getElementById("productName").textContent = pName;
document.getElementById("productPrice").textContent = "$" + pPrice;
document.getElementById("productDescription").textContent = pDescription;
document.getElementById("productImage").src = pImg;
document.getElementById("productImage").alt = pAlt;



function addtocart() {
    var pCount = sessionStorage.getItem("productCount");
    var pID = sessionStorage.getItem("productPage");
    for(var i = 1;i<=pCount;i++) {
        if(String(sessionStorage.getItem("itemID" + i)) == "null") {
            for(var j = 1;j<=pCount;j++) {
                if(sessionStorage.getItem("itemID" + j) == pID) {
                    sessionStorage.setItem("itemQuan" + j, Number(sessionStorage.getItem("itemQuan" + j)) + 1);
                    break;
                }
                else if(j == pCount) {
                    sessionStorage.setItem("itemID" + i, pID);
                    sessionStorage.setItem("itemName" + i, sessionStorage.getItem("productName"));
                    sessionStorage.setItem("itemQuan" + i, 1);
                    sessionStorage.setItem("itemPrice" + i, sessionStorage.getItem("productPrice"));
                }
            }
            break;
        }
        else {
            continue;
        }
    }
    window.open("../HTML/shoppingCart.html", "_self");
}

document.getElementById("addCart").addEventListener("click", addtocart);