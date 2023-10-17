{
  const calculateResult = (amount, currency) => {
    const EUR = 3.52;
    const USD = 5.72;
    const GBP = 2.48;

    switch (currency) {
      case "EUR":
        return amount / EUR;

      case "USD":
        return amount / USD;

      case "GBP":
        return amount / GBP;
    }
  };

  const resultTxt = document.querySelector(".js-result");

  const updateResultText = (result, currency) => {
    resultTxt.innerText = `${result.toFixed(2)} ${currency}`;
  };

  const handleFormReset = () => {
    resultTxt.innerText = "";
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");

    const currency = currencyElement.value;
    const amount = +amountElement.value;

    const result = calculateResult(amount, currency);
    updateResultText(result, currency);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
    formElement.addEventListener("reset", handleFormReset);
  };

  init();
}