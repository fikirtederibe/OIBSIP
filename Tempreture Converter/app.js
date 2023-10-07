document.addEventListener('DOMContentLoaded', function () {
    const inputDegrees = document.querySelector('.input1');
    const dropdown = document.getElementById('dropdown');
    const resultInput = document.querySelector('.input3');
    const convertButton = document.querySelector('.btn');

    convertButton.addEventListener('click', function () {
        const degrees = parseFloat(inputDegrees.value);
        const selectedOption = dropdown.value;

        if (!isNaN(degrees)) {
            if (selectedOption === 'fahrenheit') {
                 const celsius = (degrees - 32) * 5/9;
                resultInput.value = celsius.toFixed(2) + '°C';
            } else if (selectedOption === 'celcius') {
                const fahrenheit = (degrees * 9/5) + 32;
                resultInput.value = fahrenheit.toFixed(2) + '°F';
            }
        } else {
            resultInput.value = 'Please enter a valid temperature.';
        }
    });
});
