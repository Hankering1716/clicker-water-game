let woda = 0
var licz = document.getElementById('licz')
let upgrade = 1;
const elementdousuniecia = document.getElementById('remove1')
const elementdousuniecia1 = document.getElementById('remove2')
const elementdousuniecia3 = document.getElementById('remove3')
const elementdousuniecia4 = document.getElementById('remove4')
const elementdousuniecia5 = document.getElementById('remove5')
const elementdousuniecia6 = document.getElementById('remove6')



const persekunda = document.getElementById("persekunda"); // na sekunde (klik)



persekunda.textContent = 1;
function plusOne() {
    document.getElementById('falsz').innerHTML = ``
    woda += upgrade;
    licz.textContent = woda.toString()
}

function upgrade1() {
    if(woda>=30) {
        woda = woda - 30;
        upgrade += 1;
        elementdousuniecia.remove()
        document.getElementById('falsz').innerHTML = ``;
        persekunda.textContent = 2;
    }
    else {
        document.getElementById('falsz').innerHTML = `Brakuje ci ${30 - woda} wód`

    }
}
function upgrade2() {
    if(woda>=60) {
        woda = woda - 60;
        upgrade += 1;
        elementdousuniecia1.remove()
        document.getElementById('falsz').innerHTML = ``
        persekunda.textContent = 3;
    }
    else {
        document.getElementById('falsz').innerHTML = `Brakuje ci ${60 - woda} wód`
        
    }
}

function upgrade3() {
    if(woda>=200) {
        woda = woda - 200 ;
        upgrade += 1;
        elementdousuniecia3.remove()
        document.getElementById('falsz').innerHTML = ``
        persekunda.textContent = 4;
    }
    else {
        document.getElementById('falsz').innerHTML = `Brakuje ci ${200 - woda} wód`
        
    }
}
function upgrade4() {
    if(woda>=500) {
        woda = woda - 500 ;
        upgrade += 1;
        elementdousuniecia4.remove()
        document.getElementById('falsz').innerHTML = ``;
        persekunda.textContent = 5;
    }
    else {
        document.getElementById('falsz').innerHTML = `Brakuje ci ${500 - woda} wód`
        
    }
}

function upgrade5() {
    if(woda>=1000) {
        woda = woda - 1000;
        upgrade += 1;
        elementdousuniecia5.remove()
        document.getElementById('falsz').innerHTML = ``
        persekunda.textContent = 10;
    }
    else {
        document.getElementById('falsz').innerHTML = `Brakuje ci ${1000 - woda} wód`
    }
}

function upgrade6() {
    if(woda>=10000) {
        woda = woda - 10000;
        upgrade += 100;
        elementdousuniecia6.remove()
        document.getElementById('falsz').innerHTML = ``
        persekunda.textContent = 100;
    }
    else {
        document.getElementById('falsz').innerHTML = `Brakuje ci ${10000 - woda} wód`
    }
}


var falsz = document.getElementById("falsz");
var nasekunde = 0.1;




const persekunda1 = document.getElementById("persekunda1"); // na sekunde


persekunda1.textContent = nasekunde;

function upgrade7() {
    if(woda>=500) {
        woda = woda - 500
        persekunda1.textContent = nasekunde = 1;
        document.getElementById('remove7').remove();
    
    }
    else {
        document.getElementById('falsz').innerHTML = `Brakuje ci ${500 - woda} wód`
    }
}