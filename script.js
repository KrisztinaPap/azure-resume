// Get current year for footer

document.getElementById("currentYear").innerHTML = new Date().getFullYear();

// Count site visits

/* function visitorCounter() {
    var counterSpan = document.getElementById("counterSpan");
    var currentCounterValue = Number(counterSpan.textContent);
    var updatedCountValue = currentCounterValue;
    updatedCountValue++;
    counterSpan.innerHTML = Number(updatedCountValue);
}

window.onload = visitorCounter; */