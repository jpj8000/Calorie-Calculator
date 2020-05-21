function WaterBy() {
    weight = document.getElementById("pounds").value;
    exercise = document.getElementById("exercise").value;
    document.getElementById("result").innerHTML = (weight * 0.66) + ((exercise / 30) * 12);
}

function CalorieBy() {
    weight = document.getElementById("pounds").value;
    age = document.getElementById("years").value;
    height = document.getElementById("inches").value;
    document.getElementById("answer").innerHTML = 66 + (6.3 * weight) + (12.9 * height) - (6.8 * age);
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

$("#button1").click(function () {
    $("#water").animate({
        top: "0px",
        height: "200px",
    }, 1500);
});
