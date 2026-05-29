const TARGET = 100;
let attempts = 0;

function check() {
    //take user input from html
    let user_password =
        document.getElementById("InputPass").value;

    //calculate password strength
    let score = 0;

    if (user_password.length >= 6)
        score += Math.floor((user_password.length / 2)) * 10;
    if (/[A-Z]/.test(user_password))
        score += 15;
    if (/[a-z]/.test(user_password))
        score += 15;
    if (/[0-9]/.test(user_password))
        score += 20;
    if (/[!@#$%^&*]/.test(user_password))
        score += 25;

    //assign strength level based on score
    let strength_level = "";

    if (score >= TARGET) {
        strength_level = "Perfect Password!";
    } else if (score >= 91) {
        strength_level = "Very Strong";
    } else if (score >= 71) {
        strength_level = "Strong";
    } else if (score >= 51) {
        strength_level = "Medium";
    } else if (score >= 31) {
        strength_level = "Weak";
    } else {
        strength_level = "Very Weak";
    }

    console.log(score);

    // increment attempt if "Strong" is not achieved
    if(score<71)
        attempts++;

    // show warning
    if(attempts>8 && score<71)
        strength_level = "Need practice! Please try adding uppercase letters, numbers and special characters.";

    //display in html
    document.getElementById("result").innerHTML
    = strength_level;
}

const btnPassCheck =
    document.getElementById("btnPassCheck");
btnPassCheck.addEventListener("click", check);

// const arr = [28, 4, 2026];
// //add/remove element at the end
// arr.push(1000); 
// arr.pop();

// //add/remove element at the beginning
// arr.unshift(-50);
// arr.shift();

// //add/remove at any Index
// //splice(startIndex, deleteCount, ..items)
// arr.splice(1, 0, 5, 6);
// arr.splice(2,1);

// console.log(arr);