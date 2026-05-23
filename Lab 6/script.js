console.log("Hello from JavaScript");

let username = "naam";
console.log(username);

username = "alice";
console.log(username);

const university_name = "UIU";

//university_name = "UIUv2";
console.log(university_name);

if (username == "alice")
    console.log("valid user");
else console.log("invalid user");


let points = 50;

function checkStrength(score) {
    if (score >= 91) {
        return "Very Strong";
    } else if (score >= 71) {
        return "Strong";
    } else if (score >= 51) {
        return"Medium";
    } else if (score >= 31) {
        return "Weak";
    } else {
        return "Very Weak";
    }
}

console.log(checkStrength(points));

console.log("5" == 5); //loose equality, checks only value
console.log("5" === 5); //strict equality, checks value and dataType
console.log(5 === 5);

function greet(person_name) {
    return "Hello, " + person_name;
}

console.log(greet("Bob"));

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let password = "123#";
console.log(password.length);
console.log(password.toUpperCase());
console.log(password.includes("@"));

//regular expression (REGEX)
console.log(/[A-Z]/.test(password)); //uppercase
console.log(/[a-z]/.test(password)); //lowercase
console.log(/[0-9]/.test(password)); //number
console.log(/[!@#$%^&*]/.test(password)); //special characters

let attempts = 0;

function check(){
    attempts++;
    let user_password = 
    document.getElementById("InputPass").value;
    
    document.getElementById("result").innerHTML 
    = "User input password is " + user_password;

    console.log("User attempt #"+attempts);
}

const btnPasswordCheck = 
document.getElementById("btnPassCheck");

btnPasswordCheck.addEventListener("click", check);
