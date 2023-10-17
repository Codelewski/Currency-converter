let resultTxt = document.querySelector(".js-result");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let formElement = document.querySelector(".js-form"); 

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let EUR = 3.52;
  let USD = 5.72;
  let GBP = 2.48;
  
  let currency = currencyElement.value;
  let amount = +amountElement.value;

  switch (currency) {
    case "EUR":
      result = amount / EUR;
      break;
    case "USD":
      result = amount / USD;
      break;
    case "GBP":
      result = amount / GBP;
      break;
  }
  resultTxt.innerText = `${result.toFixed(2)} ${currency}`;
});

formElement.addEventListener("reset", () => {
    resultTxt.innerText = ""
})
