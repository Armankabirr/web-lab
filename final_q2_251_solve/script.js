const goal = 2000;
let total = 0;
let entries = 0;



function calculateCal(){
    let userInput = document.getElementById("inputCal").value;
    console.log("num = "+userInput);
    
    
    total = total + Number(userInput);

    console.log(total);
    
    let feedback = "";
    if(total<=800){
        feedback = "Youre off to a healthy start!";
    }
    if(total>=801 && total<=1600){
        feedback = "Good progress, keep it balanced!";
    }
    if(total>=1601 && total<=1999){
        feedback = "Almost at your limit!";
    }
    if(total>= goal){
        feedback = "Goal reached! Stay mindful!";
    }
    
    entries ++;

    if (entries>10 && total<goal){
        feedback = "Be cautious of frequent snacking!";
    }

    let show = document.getElementById("total");
    show.innerHTML = total + " " + feedback;


}


let btn = document.getElementById("AddBtn");
btn.addEventListener("click",calculateCal);