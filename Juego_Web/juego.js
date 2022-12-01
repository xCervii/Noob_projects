document.getElementById("player").addEventListener("mouseover",sumarPuntos);

var puntos = 0;
var tiempo = 60;
var necesario = 50;

function sumarPuntos(){
    puntos++;
    document.getElementById("pointer").innerHTML = "Puntos: <b>"+puntos+ " / "+necesario+"</b>";
    RandNum = Math.round(Math.random()*780);
    RandNum2 = Math.round(Math.random()*880);
    document.getElementById("player").style.marginTop = RandNum + "px";
    document.getElementById("player").style.marginLeft = RandNum2 + "px";
    if(puntos==necesario){
        alert("Ganaste cabezón.");
        puntos=0;
        tiempo=60;
    }
}

function restartiempo(){
    tiempo--;
    document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;Tiempo:  "+tiempo;
    if(tiempo==0){
        alert("Has perdido cabezón.");
        document.getElementById("pointer").innerHTML = "Puntos conseguidos: "+puntos;
        puntos=0;
        tiempo=60;
    }
}

setInterval(restartiempo, 1000);