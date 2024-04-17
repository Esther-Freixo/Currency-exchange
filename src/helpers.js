export function renderCurrList(
    currList,
    currencyTitle,
    currenciesUl,
) {
    currencyTitle.innerText = '';
    currenciesUl.innerHTML = '';
    currencyTitle.innerText = `Currencies correpondent to 1 ${currList.base_code}`;

    const convRates = currList.conversion_rates;

    for (const key in convRates) {
        if (convRates.hasOwnProperty(key)) {
            const listItem = document.createElement("li");
            listItem.className = 'currency-item';
            listItem.innerText = `${key} ${convRates[key]}`;

            currenciesUl.appendChild(listItem);
        }
    }
};

export function currCalculator() {

}
