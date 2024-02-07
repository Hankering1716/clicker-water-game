let woda;


var licz = document.getElementById('licz')

let upgrade = 1;

let iloscklickow = 0;

let ilosczdobytychosiagniec = 0;

let count444 = document.getElementById('countClick'); 

let countEvery = document.getElementById('countWater');

let woda1;

function plusOne() {
    document.getElementById('falsz').innerHTML = ``;
    
    woda += upgrade;

    licz.textContent = Number(woda);

    iloscklickow++;
    
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


var persekunda1 = document.getElementById("persekunda1"); // na sekunde



var kosztulepszenianasekunde1 = 500;



function upgrade7() {
    if(woda>=kosztulepszenianasekunde1) {

        woda = woda - kosztulepszenianasekunde1
        
        nasekunde += 2;
        persekunda1.textContent = nasekunde;
        kosztulepszenianasekunde1 += 500;
        if(nasekunde>=800) {
            kosztulepszenianasekunde1 += 30000;
        }

        document.getElementById('koszt7').innerHTML = kosztulepszenianasekunde1;
        
    }
    else {
        document.getElementById('falsz').innerHTML = `Brakuje ci ${kosztulepszenianasekunde1 - woda} wód`
    }
}


var kosztulepszenianasekunde2 = 1000;

function upgrade8() {

    if(woda>=kosztulepszenianasekunde2) {
        woda = woda - kosztulepszenianasekunde2;
        nasekunde += 3
        persekunda1.textContent = nasekunde;
        kosztulepszenianasekunde2 += 500;
        if(nasekunde>=500) {
            kosztulepszenianasekunde1 += 30000;
        }     document.getElementById('koszt8').innerHTML = kosztulepszenianasekunde2;
        
    
    }
    else {
        document.getElementById("falsz").innerHTML = `Brakuje ci ${kosztulepszenianasekunde2 - woda} wód`
    }
}


// localStorage.setItem("forg", plusOne());

// console.log(localStorage.getItem('forg'))


var css1 =  document.getElementById("dropbtn");



function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    css1.style.backgroundColor = 'green'

    setTimeout(() => {
        css1.style.backgroundColor = 'brown';
        css2.style.backgroundColor = 'brown';
    }, 5000);
}
  

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");

      var dropdowns1 = document.getElementById("dropdownik-content")
      var i;
      for (i = 0; i < dropdowns.length; i++) {
  

        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');





        }
      }
    }
  }


  var css2 =  document.getElementById("dropbutton");



function mojaFunkcja() {
    document.getElementById("dropik").classList.toggle("szow");

    css2.style.backgroundColor = 'red';

    setTimeout(() => {
        css1.style.backgroundColor = 'brown';
        css2.style.backgroundColor = 'brown';
    }, 5000);

}



window.onclick = function(event) {
    if(!event.target.matches('.dropbutton')) {

        var dropdowns1 = document.getElementById("dropdownik-content");
        var v;
        for(v = 0; v< dropdowns1.length; v++) {

            var otwartydropik = dropdowns1[v];


            if(otwartydropik.classList.contains('szow')) {
                openDropdown.classList.remove('szow');
            }
        }
    }
  }


// Osiagnięcia 
let zgoda1 =  '❌';
document.getElementById("osiagniecie1").textContent =  "1. Zdobądź 100 wód | " + zgoda1;


document.getElementById("osiagniecie2").textContent = "2. Zdobądź 500 wód |" + zgoda1;


document.getElementById("osiagniecie3").textContent = "3. Kliknij 100 razy wodę |" + zgoda1;


window.setInterval(
    function sekundowazmiana() {

 


        // nasekunde + (zmienna)
        woda += nasekunde;


        licz.textContent = woda;


        countEvery.textContent = woda;



        count444.textContent = iloscklickow.toString()



            // ciasteczka 

            localStorage.setItem("wodyZapisCookie", woda);
            localStorage.setItem("nasekunde",nasekunde)


        // osiagniecia część dalsza

        if(woda>=100) {
            document.getElementById("osiagniecie1").textContent =  "1. Zdobądź 100 wód | " + '✅';


            document.getElementById("osiagniecieInfo1").innerHTML = "Zdobyłeś osiągnięcie nr 1";


            setTimeout(() => {
                document.getElementById("osiagniecieInfo1").style.display = 'none'

            }, 3000);


        }
        
        if(woda>=500) {
            document.getElementById("osiagniecie2").textContent = "2. Zdobądź 500 wód |" + "✅";

            document.getElementById("osiagniecieInfo2").innerHTML = "Zdobyłeś osiągnięcie nr 2";

            setTimeout(() => {
                document.getElementById("osiagniecieInfo2").style.display = 'none'
            }, 3000);

        }
        

        




        if(iloscklickow>100) {
            document.getElementById("osiagniecie3").textContent = "3. Kliknij 100 razy wodę |" + "✅";
            document.getElementById("osiagniecieInfo3").innerHTML = "Zdobyłeś osiągnięcie nr 3";
            
            setTimeout(() => {
                document.getElementById("osiagniecieInfo3").style.display = 'none'

            }, 3000);
        }

    },1000);


//  ogarnac ciastka i zapisywac wode po refreshu
woda = 0;
function increaseWater(nasekunde) {
    


    woda += nasekunde;

    localStorage.setItem('water', woda);

    if(woda==NaN) {
        return woda = 0;
    } else {
        return woda = parseInt(localStorage.getItem('wodyZapisCookie') || woda);
    }
}


function zwiekszeniaCiaskta() {
    return nasekunde = parsInt(localStorage.getItem("nasekunde") || nasekunde)
}
  setTimeout(() => {

    increaseWater(nasekunde);
    licz.textContent = woda;



  }, 1);


