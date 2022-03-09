// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER
investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
while (isNaN(investment)) {
    alert('Investment amount is not numeric, try again!')
    investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
} 

rate = parseFloat(prompt('Enter interest rate as x.x'));
while (isNaN(rate) || rate > 6 || rate < 0) {
    alert('Invalid rate, enter amount between 0-6%.')
    rate = parseFloat(prompt('Enter interest rate as x.x'));
}

years = parseInt(prompt('Enter the number of years you want to invest for'));
while (isNaN(years) || years > 30  || years < 1) {
    alert('Invalid years, enter amount between 1-30.')
    years = parseInt(prompt('Enter the number of years you want to invest for'));
}

// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);