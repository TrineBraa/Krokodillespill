let topNumber = '';
let bottomNumber = '';
let pointScore = 0;

// function showResult() {
//     document.getElementById("showThePoints").innerHTML = `0`;
//     onload()
// }

function restartGame() {
    updateNumbers();
}

//funksjonen for hva du putter i input feltet.
function submitTheAnswer() {
    if (document.getElementById("fieldForInput").value == "=" && topNumber == bottomNumber) {
        pointScore++;
    } else if (document.getElementById("fieldForInput").value == ">" && topNumber > bottomNumber) {
        pointScore++;
    }
    else if (document.getElementById("fieldForInput").value == "<" && topNumber < bottomNumber) {
        pointScore++;
    }
    else {
        pointScore--;
    }
    updateNumbers()

}

//alt som redigerer number her i denne funksjonen. 
function updateNumbers() {
    topNumber = RandomizeNumbers();
    bottomNumber = RandomizeNumbers();
    document.getElementById("topNumber").innerHTML = topNumber;
    document.getElementById("bottomNumber").innerHTML = bottomNumber;
    document.getElementById("showThePoints").innerHTML = pointScore;
    document.getElementById("fieldForInput").value = '';
}


function RandomizeNumbers() {
    return Math.round(Math.random() * 10);
}