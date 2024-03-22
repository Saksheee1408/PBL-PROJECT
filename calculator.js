function appendToResult(value) {
    document.getElementById('result').value += value;
}

function removeLastChar() {
    var result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}

function calculate() {
    var result = document.getElementById('result').value;
    var calculation = eval(result);
    document.getElementById('result').value = calculation;
}

function calculateSimpleInterest() {
    var principal = parseFloat(prompt("Enter principal amount:"));
    var rate = parseFloat(prompt("Enter interest rate (as a percentage):"));
    var time = parseFloat(prompt("Enter time period (in years):"));

    var simpleInterest = (principal * rate * time) / 100;
    alert("Simple Interest: " + simpleInterest.toFixed(2));
}

function calculateCompoundInterest() {
    var principal = parseFloat(prompt("Enter principal amount:"));
    var rate = parseFloat(prompt("Enter interest rate (as a percentage):"));
    var time = parseFloat(prompt("Enter time period (in years):"));

    var compoundInterest = principal * (Math.pow((1 + rate / 100), time)) - principal;
    alert("Compound Interest: " + compoundInterest.toFixed(2));
}

function convertCurrency() {
    const fromCurrency = prompt("Enter currency to convert from (e.g., USD):").toUpperCase();
    const toCurrency = prompt("Enter currency to convert to (e.g., EUR):").toUpperCase();
    const amount = parseFloat(prompt(`Enter amount in ${fromCurrency}:`));

    const exchangeRates = {
        "USD": { "EUR": 0.85, "GBP": 0.75, "JPY": 109.35 },
        "EUR": { "USD": 1.18, "GBP": 0.88, "JPY": 129.14 },
        "GBP": { "USD": 1.34, "EUR": 1.14, "JPY": 146.83 },
        "JPY": { "USD": 0.0091, "EUR": 0.0077, "GBP": 0.0068 },
    };

    if (exchangeRates[fromCurrency] && exchangeRates[fromCurrency][toCurrency]) {
        const exchangeRate = exchangeRates[fromCurrency][toCurrency];
        const convertedAmount = amount * exchangeRate;
        alert(`Converted amount: ${convertedAmount.toFixed(2)} ${toCurrency}`);
    } else {
        alert('Invalid currency selection');
    }
}
