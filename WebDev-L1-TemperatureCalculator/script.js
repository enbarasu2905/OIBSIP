function convertTemperature() {

    let temp = document.getElementById("temperature").value;

    let unit = document.getElementById("unit").value;

    let error = document.getElementById("error");

    error.innerHTML = "";

    if (temp === "") {

        error.innerHTML = "Please enter a temperature.";

        return;

    }

    temp = Number(temp);

    let celsius;
    let fahrenheit;
    let kelvin;

    if (unit === "C") {

        if (temp < -273.15) {

            error.innerHTML = "Temperature cannot be below absolute zero.";

            return;

        }

        celsius = temp;
        fahrenheit = (temp * 9 / 5) + 32;
        kelvin = temp + 273.15;

    }

    else if (unit === "F") {

        if (temp < -459.67) {

            error.innerHTML = "Temperature cannot be below absolute zero.";

            return;

        }

        celsius = (temp - 32) * 5 / 9;
        fahrenheit = temp;
        kelvin = celsius + 273.15;

    }

    else {

        if (temp < 0) {

            error.innerHTML = "Temperature cannot be below absolute zero.";

            return;

        }

        kelvin = temp;
        celsius = temp - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;

    }

    document.getElementById("celsius").innerHTML =
        "Celsius : " + celsius.toFixed(2) + " °C";

    document.getElementById("fahrenheit").innerHTML =
        "Fahrenheit : " + fahrenheit.toFixed(2) + " °F";

    document.getElementById("kelvin").innerHTML =
        "Kelvin : " + kelvin.toFixed(2) + " K";

}
function enterWebsite() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("website").style.display = "block";
}