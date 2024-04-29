const valueToConvert = document.getElementById("valueToConvert");
const celsius = document.getElementById("Celsius");
const fahrenheit = document.getElementById("Fahrenheit");
const error = document.getElementById("error");
let valueConverted = document.getElementById("valueConverted");

function convert(){
    if(celsius.checked){
        const convertedValue = celsiusToFahrenheit(Number(valueToConvert.value));
        valueConverted.textContent = `Converted Value: ${convertedValue} °F`;
        error.textContent = "";
    }else if(fahrenheit.checked){
        const convertedValue = fahrenheitToCelsius(Number(valueToConvert.value));
        valueConverted.textContent = `Converted Value: ${convertedValue} °C`;
        error.textContent = "";
    }
    else{
        error.textContent = "Can you check a unit tempuratury to convert";
        error.style.color = "red";
    }
}
function celsiusToFahrenheit(num){
    let res = (num*9/5) + 32;
    return res.toFixed(2);
}
function fahrenheitToCelsius(num){
    let res = (num - 32 ) *5/9;
    return res.toFixed(2);
}