function removeItem(x) {
    console.log(x);
    sessionStorage.removeItem("itemName"+x);
    sessionStorage.removeItem("itemID"+x);
    sessionStorage.removeItem("itemQuan" + x);
    sessionStorage.removeItem("itemPrice" + x);
}

function getItem(x) {
    var arr = [];
    arr[0] = sessionStorage.getItem("itemName" + x);
    arr[1] = sessionStorage.getItem("itemID" + x);
    arr[2] = sessionStorage.getItem("itemQuan" + x);
    arr[3] = sessionStorage.getItem("itemPrice" + x);
    return arr;
}

function createItem(x) {

}

function updateQuan(id) {
    let num = id.substr(1);
    let quantity = document.getElementById("quantity"+num).value;
    if(quantity == 0) {
        removeItem(num);
        location.reload();
    }
    else{
        sessionStorage.setItem("itemQuan"+num, quantity);
        apply("quantity"+1);
    }
}

function apply(id) {
    let num = id.substr(8);
    let sQuan = sessionStorage.getItem("itemQuan"+num);
    let val = document.getElementById(id);

    if(sQuan != val.value) {
        document.getElementById("u"+num).style="display:initial";
    }
    else {
        document.getElementById("u"+num).style="display:none";
    }
}

function removeCart(id) {
    let num = id.substr(1);
    removeItem(num);
    location.reload();
}




function cartContent() {
    var pCount = sessionStorage.getItem("productCount");
    if(pCount > 0) {
        for(var i = 1;i <= pCount;i++) {
            var arr = getItem(i);
            if(String(arr[0]) != "null") {  
                document.getElementById("quantity" + i).value = arr[2];
                break;
            }
            else {
                document.getElementById("CartContent").innerHTML = "The Cart Is Empty";
                break;
            }
        }
    }
    else {
        document.getElementById("CartContent").innerHTML = "The Cart Is Empty";
    }
}

window.addEventListener("load", cartContent);


window.addEventListener("load", function() {
    var update = document.querySelectorAll(".apply");
    var quan = document.querySelectorAll(".quantity");
    var remove = document.querySelectorAll(".remove");
    update.forEach(function(elem, index, arr) {
        elem.addEventListener("click", function() {
            updateQuan(arr[index].id);
        });
    });

    quan.forEach(function(elem, index, arr) {
        elem.addEventListener("change", function() {
            apply(arr[index].id);
        });
    });

    remove.forEach(function(elem, index, arr) {
        elem.addEventListener("click", function() {
            removeCart(arr[index].id);
        });
    });
});