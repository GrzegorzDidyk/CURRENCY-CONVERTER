{
    const exchangeRateElement = document.querySelector(".js-exchangeRate");
    const formElement = document.querySelector(".js-form");
    const currencyElement = document.querySelector(".js-currencySellect");
    const paragraphElement = document.querySelector(".js-form__paragraph");
    const amountPlnElement = document.querySelector(".js-amountPln");
    const euroRate = 4.5658;
    const dolarRate = 3.7869;
    const funtRate = 5.3191;

    const currencySelection = (event) => {
        const currency = currencyElement.value;
        switch (currency) {
            case "EUR":
                exchangeRateElement.value = euroRate;
                break;
            case "USD":
                exchangeRateElement.value = dolarRate;
                break;
            case "GBP":
                exchangeRateElement.value = funtRate;
                break;
            case "":
                exchangeRateElement.value = "";
                break;
        };
    };

    const calculateResult = (amountPln, currency) => {
        switch (currency) {
            case "EUR":
                return amountPln / euroRate;

            case "USD":
                return amountPln / dolarRate;

            case "GBP":
                return amountPln / funtRate;

        };
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const currency = currencyElement.value;
        const amountPln = +amountPlnElement.value;

        const result = calculateResult(amountPln, currency);

        updateResultText(amountPln, result, currency);
    };

    const updateResultText = (amountPln, result, currency) => {
        paragraphElement.innerHTML = `Za ${amountPln} PLN otrzymasz <strong> ${result.toFixed(2)} ${currency} </strong>`;
    };

    const resetForm = () => {
        paragraphElement.innerHTML = `Za x PLN otrzymasz`;
    };

    const init = () => {
        formElement.addEventListener("input", currencySelection);

        formElement.addEventListener("submit", onFormSubmit);

        formElement.addEventListener("reset", resetForm);
    };

    init();
}