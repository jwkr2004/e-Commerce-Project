var letters = /^[A-Za-z]+$/;
var numbers = /^[0-9]+$/;


function submit(event) {
    event.preventDefault();
    runSearch();
}

function runSearch() {
    var text = document.getElementById("input");
    if(text.value.trim().length > 0) {
        sessionStorage.setItem("Search", text.value);
        window.open("../HTML/productSelection.html", "_self");
    }
    else {

    }
}


document.getElementById("submit").addEventListener("click", runSearch);
document.getElementById("search").addEventListener("submit", submit);