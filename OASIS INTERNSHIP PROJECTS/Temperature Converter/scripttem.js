function convertTemperature() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const resultDiv = document.getElementById('result');

    let celsius = parseFloat(celsiusInput.value);
    let fahrenheit = parseFloat(fahrenheitInput.value);

    if (!isNaN(celsius)) {
      fahrenheit = (celsius * 9/5) + 32;
      fahrenheitInput.value = fahrenheit.toFixed(2);
      resultDiv.textContent = `Converted to Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
    } else if (!isNaN(fahrenheit)) {
      celsius = (fahrenheit - 32) * 5/9;
      celsiusInput.value = celsius.toFixed(2);
      resultDiv.textContent = `Converted to Celsius: ${celsius.toFixed(2)}°C`;
    } else {
      resultDiv.textContent = 'Please enter a valid temperature.';
    }
  }