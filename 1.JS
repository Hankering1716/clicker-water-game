let woda = 0
var licz = document.getElementById('licz')
let upgrade = 1;


function plusOne() {
    document.getElementById('falsz').innerHTML = ``
    woda += upgrade;
    licz.textContent = woda.toString()
}





var persekunda = document.getElementById("persekunda"); // na sekunde (klik)






var punktydozdobycia1 = 30;
function upgrade1() {
    if(woda>=punktydozdobycia1) {

        woda = woda - punktydozdobycia1;

        upgrade += 2;
        document.getElementById('falsz').innerHTML = ``;

        licz.textContent = woda;
        persekunda.textContent = 2;
        punktydozdobycia1 += 100;
        document.getElementById("koszt1").innerHTML = punktydozdobycia1;
        persekunda.textContent = upgrade;

    }
    else {
        document.getElementById('falsz').innerHTML = `Brakuje ci ${punktydozdobycia1 - woda} wód`

    }
}

var punktydozdobycia2 = 60;
function upgrade2() {
    if(woda>=punktydozdobycia2) {
        woda = woda - punktydozdobycia2;

        upgrade += 3;
        document.getElementById('falsz').innerHTML = ``;

        licz.textContent = woda;
        persekunda.textContent = 2;
        punktydozdobycia2 += 100;
        document.getElementById("koszt2").innerHTML = punktydozdobycia2;
        persekunda.textContent = upgrade;
    }
    else {
        document.getElementById('falsz').innerHTML = `Brakuje ci ${punktydozdobycia2 - woda} wód`
        
    }
}

var punktydozdobycia3 = 200;



function upgrade3() {
    if(woda>=punktydozdobycia3) {
        woda = woda - punktydozdobycia3;

        upgrade += 4;
        document.getElementById('falsz').innerHTML = ``;

        licz.textContent = woda;
        persekunda.textContent = 2;
        punktydozdobycia3 += 5000;
        document.getElementById("koszt3").innerHTML = punktydozdobycia3;
        persekunda.textContent = upgrade;
    }
    else {
        document.getElementById('falsz').innerHTML = `Brakuje ci ${punktydozdobycia3 - woda} wód`
        
    }
}

var punktydozdobycia4 = 500;

function upgrade4() {
    if(woda>=punktydozdobycia4) {
        woda = woda - punktydozdobycia4;

        upgrade += 5;
        document.getElementById('falsz').innerHTML = ``;

        licz.textContent = woda;
        persekunda.textContent = 2;
        punktydozdobycia4 += 8000;
        document.getElementById("koszt4").innerHTML = punktydozdobycia4;
        persekunda.textContent = upgrade;
    }
    else {
        document.getElementById('falsz').innerHTML = `Brakuje ci ${punktydozdobycia4 - woda} wód`
        
    }
}
var punktydozdobycia5 = 1000;

function upgrade5() {
    if(woda>=punktydozdobycia5) {
        woda = woda - punktydozdobycia5;

        upgrade += 10;
        document.getElementById('falsz').innerHTML = ``;

        licz.textContent = woda;
        persekunda.textContent = 2;
        punktydozdobycia5 += 8000;
        document.getElementById("koszt5").innerHTML = punktydozdobycia5;
        persekunda.textContent = upgrade;

    }
    else {
        document.getElementById('falsz').innerHTML = `Brakuje ci ${punktydozdobycia5 - woda} wód`
    }
}

var punktydozdobycia6 = 10000;

function upgrade6() {
    if(woda>=punktydozdobycia6) {
        woda = woda - punktydozdobycia6;
        upgrade += 20;

        document.getElementById('falsz').innerHTML = ``
        punktydozdobycia6 += 80000;
        persekunda.textContent = 100000;
        document.getElementById("koszt6").innerHTML = punktydozdobycia6;
        persekunda.textContent = upgrade;
    }
    else {
        document.getElementById('falsz').innerHTML = `Brakuje ci ${punktydozdobycia6 - woda} wód`
    }
}


var falsz = document.getElementById("falsz");


var nasekunde = 1;


const persekunda1 = document.getElementById("persekunda1"); // na sekunde


persekunda1.textContent = nasekunde;

window.setInterval(
    function sekundowazmiana() {
        woda += nasekunde;
        licz.textContent = woda;
    },1000);

var kosztulepszenianasekunde1 = 500;
function upgrade7() {
    if(woda>=kosztulepszenianasekunde1) {
        woda = woda - 500
        nasekunde += 1;
        persekunda1.textContent = nasekunde = 2;
        kosztulepszenianasekunde1 += 500;
        document.getElementById('koszt7').innerHTML = kosztulepszenianasekunde1;
        
    }
    else {
        document.getElementById('falsz').innerHTML = `Brakuje ci ${500 - woda} wód`
    }
}
