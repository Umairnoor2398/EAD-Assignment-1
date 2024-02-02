function fetchExchangeRates() {
  const baseCurrency = document.getElementById("baseCurrency").value;

  fetch("https://open.er-api.com/v6/latest/USD")
    .then((response) => response.json())
    .then((data) => {
      const rates = data.rates;

      const worker = new Worker("worker.js");

      worker.onmessage = function (e) {
        const processedRates = e.data;

        displayExchangeRates(processedRates);

        worker.terminate();
      };

      worker.postMessage({ baseCurrency, rates });
    })
    .catch((error) => console.error("Error fetching data:", error));
}

function displayExchangeRates(processedRates) {
  const tableBody = document.getElementById("exchangeRateTableBody");

  tableBody.innerHTML = "";

  for (const currency in processedRates) {
    const exchangeRate = processedRates[currency];

    const row = document.createElement("tr");

    const currencyCell = document.createElement("td");
    currencyCell.textContent = currency;

    const rateCell = document.createElement("td");
    rateCell.textContent = exchangeRate;

    row.appendChild(currencyCell);
    row.appendChild(rateCell);

    tableBody.appendChild(row);
  }
}
document.addEventListener("DOMContentLoaded", fetchExchangeRates);
