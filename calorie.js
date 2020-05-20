function multiplyBy() {
    weight = document.getElementById("pounds").value;
    exercise = document.getElementById("exercise").value;
    document.getElementById("result").innerHTML = (weight * 0.66) + ((exercise / 30) * 12);
}



function multiplyBy() {
    calories = document.getElementById("totalCalories").value;

    document.getElementById("totalFats").innerHTML = calories * 0.25;

    document.getElementById("totalCarbs").innerHTML = calories * 0.55;

    document.getElementById("totalProtein").innerHTML = calories * 0.20;
}


function randomNutritionalFact() {
    var random = Math.floor(Math.random() * 7);
    switch (random) {
        case 0:
            return "Eggs are high in nutrients.";
        case 1:
            return "Avacados contain more fat than any other fruit or vegetable.";
        case 2:
            return "Water makes up approximately 70% of a human’s body weight.";
        case 3:
            return "The average person could live without food for nearly a month, but we could only survive about one week without water.";
        case 4:
            return "Consuminga polar bear's lived will kill you because of its high levels of Vitamin A.";
        case 5:
            return "Milk can help lower levels of anxiety.";
        case 6:
            return "There is approximately the same number of calories in a pound of spinach as there are in two Oreos.";
    }
}

var water = document.getElementById("water");
var glass = document.getElementById("glass");

var waterHeight = 0;

glass.addEventListener('click', (event) => {
    changeHeight(event);
});


function changeHeight(event) {
    if (waterHeight < 200) {
        waterHeight = waterHeight + 5;
        water.style.height = waterHeight + "px";
        water.style.top = 210 - waterHeight + "px";
        console.log(waterHeight);
    }
}
