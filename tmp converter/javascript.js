document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('convertCelsius').addEventListener('click', convertCelsius);
    document.getElementById('convertFahrenheit').addEventListener('click', convertFahrenheit);
    document.getElementById('reset').addEventListener('click', reset);
});

function convertCelsius() {
    var fahrenheit = parseFloat(document.querySelector("#fahrenheit").value);
    var celsiusResult = (fahrenheit - 32) / 1.8;
    var b = celsiusResult.toFixed(2);
    document.querySelector("#fahrenheit").value = fahrenheit;
    document.querySelector("#celsius").value = b;
}

function convertFahrenheit() {
    var celsius = parseFloat(document.querySelector("#celsius").value);
    var fahrenheitResult = (1.8 * celsius) + 32;
    var a = fahrenheitResult.toFixed(2);
    document.querySelector("#celsius").value = celsius;
    document.querySelector("#fahrenheit").value = a;
}

function reset() {
    document.querySelector("#fahrenheit").value = "";
    document.querySelector("#celsius").value = "";
}
