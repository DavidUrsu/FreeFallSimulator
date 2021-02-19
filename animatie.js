window.onload = function(){
    var pos=0;
    var rezistenta=prompt("Enter object resistance (percentage) ");
    //var rezistenta = 10;
    var gravitatie=prompt("Enter the gravity of the environment ");
    //var gravitatie = 1;
    var masa=prompt("Enter the mass of the object, in kilograms (for determining the energy) ");
    //var masa = 1;
    var viteza_initiala=0;
    var timp=0;
    var minge = document.getElementById("minge");
    var t = setInterval(cadere, 10);
    var ec_text = document.getElementById("energie_potentiala");
    var ep_text = document.getElementById("energie_cinetica");
    var et_text = document.getElementById("energie_totala");
    var altitudine_text = document.getElementById("altitudine");
    var viteza_text = document.getElementById("viteza");
    var inaltime=700;
    et_text.innerHTML = "Energia totala: " + (masa*gravitatie*(inaltime/100-pos/100)).toFixed(2) + "J";
    var viteza_actuala=0, viteza_initiala=0;
    
    function cadere() {
        if(pos>=inaltime){
            clearInterval(t);
            timp=0;
            viteza_initiala=viteza_actuala*(100-rezistenta)/100;
            t=setInterval(saritura,10);
            et_text.innerHTML = "Total energy: " + ((masa*gravitatie*(inaltime/100-pos/100))+(masa*viteza_actuala*viteza_actuala)/2).toFixed(2) + "J";
        } else {
            viteza_actuala=(gravitatie*timp)/1000;
            if(pos+viteza_actuala>=inaltime){
                pos=inaltime;
            } else {
                pos += viteza_actuala;
            }
            minge.style.top = pos+"px"; //px = pixels
            timp+=10;
            ep_text.innerHTML = "Potential energy: " + (masa*gravitatie*(inaltime/100-pos/100)).toFixed(2) + "J";
            ec_text.innerHTML = "Kinetic energy: " + ((masa*viteza_actuala*viteza_actuala)/2).toFixed(2) + "J";
            viteza_text.innerHTML = "Speed: " + (viteza_actuala).toFixed(2) + "m/s";
            altitudine_text.innerHTML = "Altitude: " + (7-pos/100).toFixed(1) + "m";
        }
    }

    function saritura(){
        if(viteza_actuala<=0){
            clearInterval(t);
            console.log(pos);
            timp=0;
            t=setInterval(cadere,10);
        } else {
            viteza_actuala=(-gravitatie*timp)/1000+viteza_initiala;
            if(pos-viteza_actuala<=0){
                pos=0;
            } else {
                pos -= viteza_actuala;
            }
            minge.style.top = pos+"px"; //px = pixels
            timp+=10;
            ep_text.innerHTML = "Potential energy: " + (masa*gravitatie*(7-pos/100)).toFixed(2) + "J";
            ec_text.innerHTML = "Kinetic energy: " + ((masa*viteza_actuala*viteza_actuala)/2).toFixed(2) + "J";
            viteza_text.innerHTML = "Speed: " + (viteza_actuala).toFixed(2) + "m/s";
            altitudine_text.innerHTML = "Altitude: " + (7-pos/100).toFixed(1) + "m";
        }
    }
}
