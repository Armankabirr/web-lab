const TARGET = 100;
let attempts = 0;


function checkStrength(){

    let inputPass = document.getElementById("inputPass").value;
    let score = 0;


    if(inputPass.length>=6){
        score += Math.floor(inputPass.length/2) * 10;
    }
    if(/[A-Z]/.test(inputPass)){
        score += 15;
    }
    if(/[a-z]/.test(inputPass)){
        score += 15;
    }
    if(/[0-9]/.test(inputPass)){
        score += 20;
    }
    if(/[!@#$%^&*]/.test(inputPass)){
        score += 25;
    }

    console.log(score)

    let strength = " ";

    if (score >= TARGET) {
        strength = "Perfect Password!";
    } else if (score >= 91) {
        strength = "Very Strong";
    } else if (score >= 71) {
        strength = "Strong";
    } else if (score >= 51) {
        strength = "Medium";
    } else if (score >= 31) {
        strength = "Weak";
    } else {
        strength = "Very Weak";
    }

    console.log(strength)

    if(score<71){
        attempts ++;
    }

    if(attempts>8 && score <71){
        strength = "Need practice!";
    }

    let resulttxt = document.getElementById("result");
    resulttxt.innerHTML = strength;
    let scoretxt = document.getElementById("score");
    scoretxt.innerHTML = score;



}

let checkBtn = document.getElementById("checkBtn");
checkBtn.addEventListener("click",checkStrength);