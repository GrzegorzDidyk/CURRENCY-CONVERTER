let amountPlnElement = document.querySelector(".js-amountPln");
let currenyElement = document.querySelector(".js-currencySellect");
let exchangeRate = document.querySelector(".js-exchangeRate");
let paragraphElement = document.querySelector(".js-form__paragraph");
let formElement = document.querySelector(".js-form");

let euro = 4.5658;
let dolar = 3.7869;
let funt = 5.3191;



formElement.addEventListener("input", (event) => {
    let currency = currenyElement.value;
    switch (currency) {
        case "EUR":
            exchangeRate.value = euro;
            break;
        case "USD":
            exchangeRate.value = dolar;
            break;
        case "GBP":
            exchangeRate.value = funt;
            break;
        case "":
            exchangeRate.value = "";
            break;
    }
});


formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let currency = currenyElement.value;
    let amountPln = +amountPlnElement.value;
    let score;
    switch (currency) {
        case "EUR":
            score = (amountPln / euro);
            break;
        case "USD":
            score = (amountPln / dolar);
            break;
        case "GBP":
            score = (amountPln / funt);
            break;
    }
    paragraphElement.innerHTML = `Za ${amountPln} PLN otrzymasz <strong> ${score.toFixed(2)} ${currency} </strong>`; 
});

formElement.addEventListener("reset", () => {
    paragraphElement.innerHTML = ``;


});