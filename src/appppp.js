/** @format */

celsius.addEventListener("click", function(e) {
  e.preventDefault();
  temperature.innerHTML = Math.round((data.main.temp - 32) * 0.55) + " °C";
});

fahrenheit.addEventListener("click", function(e) {
  e.preventDefault();
  temperature.innerHTML =
    Math.round((data.main.temp - 32) * 0.55 * 1.8 + 32) + " °F";
});
