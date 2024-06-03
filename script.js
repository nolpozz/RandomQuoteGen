let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn1 = document.getElementById("btn1");


const url = 'https://api.quotable.io/quotes/random';


let getQuote = () => {
    fetch(url)
        .then((data) => data.json()) 
        .then((item) => {
            quote.innerText = item._id;
            author.innerText = item.context;
        });
}

window.addEventListener("load", getQuote);
btn1.addEventListener("click", getQuote);