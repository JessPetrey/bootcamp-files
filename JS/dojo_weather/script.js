// Celsius to Fahrenheit Formula: (°C * 1.8) + 32 = °F
// Fahrenheit to Celsius Formula: (°F - 32) / 1.8 = °C

// might come back to this, would change variables to the days
// arrays with 2 values, high and low
// could then make day functions to swap the innerText? 
// this logic is tough rn...

var highC = [24, 27, 21, 26];
var lowC = [18, 19, 16, 21];
function celsiusToF(high, low){
    for (var i = 0; i < highC.length; i++) {
        var highF = []
        highF.push(Math.floor((highC[i] * 1.8) + 32))
        console.log(highF)
    }
    for (var i = 0; i < lowC.length; i++) {
        var lowF = []
        lowF.push(Math.floor((lowC[i] * 1.8) + 32))
        console.log(lowF)
    }
    return 
}
celsiusToF()


// this works, only for "today"

// function convertTemp() {
//     var high = document.querySelector(".high")
//     var low = document.querySelector(".low")
//     high.innerText = ("75°")
//     low.innerText = ("64°")
// }

function dismissCookies() {
    var dismiss = document.getElementById("dismiss");
    dismiss.remove();
}

