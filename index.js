const salutation = document.getElementById("Salutation");
const time = document.getElementById("Time");
const date = document.getElementById("Date");

const Today = new Date();
date.innerText = Today.toDateString();

const Hour = new Date();
time.innerText = Hour.toLocaleString();

// Creatimg Function

function greeting(name) {

let Salutation =""
if (hour >=0 && hour <=11) {
    Salutation = "Good Morning" ;
} else if (hour >=12 && hour <=4) {
    Salutation = "Good Afternoon";  
} else if (hour >=5 && hour <=9) {
    Sautaion = "Good Evening";
} else if (hour >=9 && hour <=12) {
    Salutation = "Good Night Sleep Tight"
} else {
    Salutation = "Hello"
}
                        }


// How to call the function
greeting("Alvin Lanyon");