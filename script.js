// script.js

function calculateRunType(gender, height, agility, strength, acceleration) {
    // Explosive
    if (
        agility >= 65 &&
        (agility - strength) >= 10 &&
        acceleration >= 80 &&
        (
            (gender === "male" && height <= 182) ||
            (gender === "female" && height <= 162)
        )
    ) {
        return "Explosive";
    }
    // Lengthy
    if (
        strength >= 65 &&
        (strength - agility) >= 4 &&
        acceleration >= 40 &&
        (
            (gender === "male" && height >= 183) ||
            (gender === "female" && height >= 164)
        )
    ) {
        return "Lengthy";
    }
    // Controlled
    return "Controlled";
}

function displayResult(runType) {
    const resultDiv = document.getElementById('result');
    let desc = "";
    if (runType === "Explosive") desc = "The player has the <span class='tag explosive'>Explosive</span> run style.";
    else if (runType === "Lengthy") desc = "The player has the <span class='tag lengthy'>Lengthy</span> run style.";
    else if (runType === "Controlled") desc = "The player has the <span class='tag controlled'>Controlled</span> run style.";
    else desc = "Invalid values given.";
    resultDiv.innerHTML = desc;
}


function onInputChange() {
    const gender = document.getElementById("gender").value;
    const height = parseInt(document.getElementById("height").value, 10);
    const agility = parseInt(document.getElementById("agility").value, 10);
    const strength = parseInt(document.getElementById("strength").value, 10);
    const acceleration = parseInt(document.getElementById("acceleration").value, 10);

    if (
        isNaN(height) ||
        isNaN(agility) ||
        isNaN(strength) ||
        isNaN(acceleration)
    ) {
        document.getElementById('result').innerHTML = "Fill in all fields to see the run style.";
        return;
    }

    const runType = calculateRunType(gender, height, agility, strength, acceleration);
    displayResult(runType);
}

// Bind listeners
document.addEventListener("DOMContentLoaded", function () {
    ["gender", "height", "agility", "strength", "acceleration"].forEach(id => {
        document.getElementById(id).addEventListener("input", onInputChange);
    });

    // Modal events
    const modal = document.getElementById("infoModal");
    const infoIcon = document.getElementById("infoIcon");
    const closeModal = document.getElementById("closeModal");

    infoIcon.onclick = function () {
        modal.style.display = "block";
    };
    closeModal.onclick = function () {
        modal.style.display = "none";
    };
    window.onclick = function (event) {
        if (event.target == modal)
            modal.style.display = "none";
    };
});
