function kelvinToCelsius(kelvin) {
  kelvin -= 273.15;
  celsius = kelvin;
  return Number(celsius.toFixed(2));
}

function kelvinToFahrenheit(kelvin) {
  kelvin = ((kelvin - 273.15) * 9) / 5 + 32;
  fahrenheit = kelvin;
  return Number(fahrenheit.toFixed(2));
}

function celsiusToFahrenheit(celsius) {
  celsius = (celsius * 9) / 5 + 32;
  fahrenheit = celsius;
  return Number(fahrenheit.toFixed(2));
}

function celsiusToKelvin(celsius) {
  celsius += 273.15;
  kelvin = celsius;
  return Number(kelvin.toFixed(2));
}

function fahrenheitToKelvin(fahrenheit) {
  fahrenheit = ((fahrenheit - 32) * 5) / 9 + 273.15;
  kelvin = fahrenheit;
  return Number(kelvin.toFixed(2));
}

function fahrenheitToCelsius(fahrenheit) {
  fahrenheit = ((fahrenheit - 32) * 5) / 9;
  celsius = fahrenheit;
  return Number(celsius.toFixed(2));
}

function convertTemperature(temperature, initialUnit, finalUnit) {
  initialUnit != finalUnit;
  initialUnit && finalUnit !== 0;

  switch (initialUnit) {
    case "C":
      switch (finalUnit) {
        case "K":
          return celsiusToKelvin(temperature);
        case "F":
          return celsiusToFahrenheit(temperature);
      }
    case "F":
      switch (finalUnit) {
        case "C":
          return fahrenheitToCelsius(temperature);
        case "K":
          return fahrenheitToKelvin(temperature);
      }
    case "K":
      switch (finalUnit) {
        case "C":
          return kelvinToCelsius(temperature);
        case "F":
          return kelvinToFahrenheit(temperature);
      }
  }
}

console.log(convertTemperature(0, "C", "K")); // 273.15
console.log(convertTemperature(0, "C", "F")); // 32

console.log(convertTemperature(0, "F", "C")); // -17.78
console.log(convertTemperature(0, "F", "K")); // 255.37

console.log(convertTemperature(0, "K", "C")); // -273.15
console.log(convertTemperature(0, "K", "F")); // -459.67

module.exports = {
  kelvinToCelsius,
  kelvinToFahrenheit,
  celsiusToFahrenheit,
  celsiusToKelvin,
  fahrenheitToKelvin,
  fahrenheitToCelsius,
  convertTemperature,
};
