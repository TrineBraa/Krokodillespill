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

function submitTheAnswer() {
    if (document.getElementById("fieldForInput").value == "=" && topNumber == bottomNumber) {
        pointScore++;
        updateNumbers()
    } else if (document.getElementById("fieldForInput").value == ">" && topNumber > bottomNumber) {
        pointScore++;
        updateNumbers()
    }
    else if (document.getElementById("fieldForInput").value == "<" && topNumber < bottomNumber) {
        pointScore++;
        updateNumbers()
    }
    else {
        pointScore--;
        updateNumbers()
    }
}


function updateNumbers() {
    topNumber = RandomizeNumbers();
    bottomNumber = RandomizeNumbers();
    document.getElementById("topNumber").innerHTML = topNumber;
    document.getElementById("bottomNumber").innerHTML = bottomNumber;
}


function RandomizeNumbers() {
    return Math.round(Math.random() * 10);
}