const goal = 2000;
let total = 0;
let tr = 0;

function totalCal(){

    let input = document.getElementById("cal").value;



    total += Number(input);

    let status = " ";

    if(total >= goal){
        status = "Goal reached! Stay mindful!";
    }
    if(total >= 1601 && total <= 1999){
        status = "Almost at your limit!";
    }
    if(total >= 801 && total <= 1600){
        status = "Good progress, keep it balanced!";
    }
    if(total >= 0 && total <= 800){
        status = "You're off to a healthy start!";
    }
    
    tr ++;
    if(tr>10 && total<goal){
        status = "Be cautious of frequent snacking!";
    }



    let totalShow = document.getElementById("total");

    totalShow.innerHTML = total;

    let feed = document.getElementById("status");

    feed.innerHTML = status ;
    
}

let btn = document.getElementById("addBtn");
btn.addEventListener("click",totalCal);