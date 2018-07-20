// This code have been maded by Théophiel Vast in 2018. Switches triggered function that add value to variables

var Profil1= 0 ;
var Profil2= 0 ;
var Profil3= 0 ;
var Profil4= 0;
var Profil5= 0 ;
var Profil6= 0 ;
var Profil7= 0 ;
var Profil8= 0;

// Triggered first question
document.getElementById("qui1").addEventListener("click", grabIt);  
function grabIt() {
	var checkbox = document.getElementById('qui1').checked;


  if (checkbox == true) {

      Profil1++ ;
      Profil2++ ;
      Profil3++ ;
      Profil4++;
     
  }
  if(checkbox == false) {
  	
      Profil1-- ;
      Profil2-- ;
      Profil3-- ;
      Profil4-- ;
    
  }

  else {
    return console.log("goal !")
  }


}
//... second question
document.getElementById("qui2").addEventListener("click", grabIt1);  
function grabIt1() {
  var checkbox = document.getElementById('qui2').checked;


  if (checkbox == true) {
      
      Profil5++ ;
      Profil6++ ;
      Profil7++ ;
      Profil8++ ;
      
  }
  if(checkbox == false) {
    
      Profil5-- ;
      Profil6-- ;
      Profil7-- ;
      Profil8-- ;
    
  }

  else {
    return console.log("goal !")
  }


}
//Third question
document.getElementById("qui3").addEventListener("click", grabIt2);  
function grabIt2() {
  var checkbox = document.getElementById('qui3').checked;


  if (checkbox == true) {
      
      Profil1++ ;
      Profil2++ ;
      Profil3-- ;
      Profil4-- ;
      
  }
  if(checkbox == false) {
     
      Profil1-- ;
      Profil2-- ;
      Profil3++ ;
      Profil4++ ;
  }

  else {
    return console.log("goal !")
  }


}
//la réponse b
document.getElementById("qui4").addEventListener("click", grabIt3);  
function grabIt3() {
  var checkbox = document.getElementById('qui4').checked;


  if (checkbox == true) {
      
      Profil5++ ;
      Profil6++ ;
      Profil7-- ;
      Profil8-- ;
      
  }
  if(checkbox == false) {
      
      Profil5-- ;
      Profil6-- ;
      
      Profil7++ ;
      Profil8++ ;
  }

  else {
    return console.log("goal !")
  }


}

document.getElementById("qui5").addEventListener("click", grabIt4);  
function grabIt4() {
  var checkbox = document.getElementById('qui5').checked;


  if (checkbox == true) {
      
      Profil1++ ;
      Profil2-- ;
      Profil3-- ;
      Profil4++ ;
  }
  if(checkbox == false) {
    
      Profil1-- ;
      Profil2++ ;
      Profil3++ ;
      Profil4-- ;
  }

  else {
    return console.log("goal !")
  }


}

document.getElementById("qui6").addEventListener("click", grabIt5);  
function grabIt5() {
  var checkbox = document.getElementById('qui6').checked;


  if (checkbox == true) {
      
      Profil5++ ;
      Profil6-- ;
      Profil7-- ;
      Profil8++ ;
  }
  if(checkbox == false) {
    
      Profil5-- ;
      Profil6++ ;
      Profil7++ ;
      Profil8-- ;
  }

  else {
    return console.log("goal !")
  }


}

function total() {

var nombreJugador = document.getElementById("nombre").value


  if (Profil1 == 3) {
    document.getElementById("input1").innerHTML = 
    "Hola"+ " " +nombreJugador + "¡Eres Benjamin Pavard! El campeón de las pasas decisivas." 
    document.getElementById("input2").innerHTML = 
    "¿Te gusta ponerte desafíos? Prepara con nosotros tu título oficial de francés reconocido internacionalmente y para siempre";
    document.getElementById("myImg").src = 
    "assets/pavard-A.jpg";
    document.getElementById("target").href = "http://www.institutfrancais.es/madrid/cursosdefrances/adultos/preparacion-examenes-oficiales-frances/";
    
  }
  if (Profil2 == 2) {
    document.getElementById("input1").innerHTML = 
    "Hola"+ " " +nombreJugador + "¡Eres Kylian M’Bappé! Muy rápido, no te lo piensas cuando estás delante del portero, marcas. Muy rápido, eres explosivo." + " " +nombreJugador;
    document.getElementById("input2").innerHTML = 
    "El curso que te corresponde es el intensivo de francés. ¡Sube un nivel en un mes o 15 días!";
    document.getElementById("myImg").src = 
    "assets/mbape.jpg";
    document.getElementById("target").href = "http://www.institutfrancais.es/madrid/cursosdefrances/adultos/cursos-intensivos-frances-adultos/";
    
  }
  if (Profil3 == 1) {
    document.getElementById("input1").innerHTML = 
    "Hola"+ " " +nombreJugador + "¡Eres Benjamin Pavard! El campeón de las pasas decisivas." + " " +nombreJugador;
    document.getElementById("input2").innerHTML =
    "¿Te gusta ponerte desafíos? Prepara con nosotros tu título oficial de francés reconocido internacionalmente y para siempre";
    document.getElementById("myImg").src = 
    "assets/pavard-A.jpg";
    document.getElementById("target").href = "http://www.institutfrancais.es/madrid/cursosdefrances/adultos/preparacion-examenes-oficiales-frances/";
    
  }
  if (Profil4 == 2) {
    document.getElementById("input1").innerHTML = 
    "Hola"+ " " +nombreJugador + "¡Eres Ngolo Kante! Tienes mucha paciencia, eres constante y regular." + " " +nombreJugador;
    document.getElementById("input2").innerHTML = 
    "3 horas por semana a tu ritmo, y vuélvete un más francés poco a poco";
    document.getElementById("myImg").src = 
    "assets/Ngolo.jpg";
    document.getElementById("target").href = "http://www.institutfrancais.es/madrid/cursosdefrances/adultos/curso-frances-general-adultos/";
    
  }
   if (Profil5 == 2) {
    document.getElementById("input1").innerHTML = 
    "Hola"+ " " +nombreJugador + "¡Eres Kylian M’Bappé! Muy rápido, no te lo piensas cuando estás delante del portero, marcas. Muy rápido, eres explosivo." + " " +nombreJugador;
    document.getElementById("input2").innerHTML = 
    "El curso que te corresponde es el intensivo de francés. ¡Sube un nivel en un mes o 15 días!";
    document.getElementById("myImg").src = 
    "assets/mbape.jpg";
    document.getElementById("target").href = "http://www.institutfrancais.es/madrid/cursosdefrances/adultos/cursos-intensivos-frances-adultos/";
    
  }
    if (Profil6 == 2) {
    document.getElementById("input1").innerHTML = 
    "Hola"+ " " +nombreJugador + " ¡Eres Raphaël Varane! Tienes paciencia y madurez." + " " +nombreJugador;
    document.getElementById("input2").innerHTML = 
    "A ti te gusta vivir las experiencias en una inmersión 100% francesa, prueba nuestros talleres lingüísticos y culturales";
    document.getElementById("myImg").src = 
    "assets/varane-A.jpg";
    document.getElementById("target").href = "http://www.institutfrancais.es/madrid/cursosdefrances/adultos/talleres-frances-especializado/";
    
  }

  if (Profil7 == 1) {
    document.getElementById("input1").innerHTML = 
    "Hola"+ " " +nombreJugador + "¡Eres Ngolo Kante! Tienes mucha paciencia, eres constante y regular." + " " +nombreJugador;
    document.getElementById("input2").innerHTML = 
    "3 horas por semana a tu ritmo, y vuélvete un más francés poco a poco";
    document.getElementById("myImg").src = 
    "assets/Ngolo.jpg";
    document.getElementById("target").href = "http://www.institutfrancais.es/madrid/cursosdefrances/adultos/curso-frances-general-adultos/";
    
  }
    if (Profil8 == 1) {
    document.getElementById("input1").innerHTML = 
    "Hola"+ " " +nombreJugador + " ¡Eres Raphaël Varane! Tienes precisión y madurez." + " " +nombreJugador;
    document.getElementById("input2").innerHTML = 
    "A ti te gusta vivir las experiencias en una inmersión 100% francesa, prueba nuestros talleres lingüísticos y culturales";
    document.getElementById("myImg").src = 
    "assets/varane-A.jpg";
    document.getElementById("target").href = "http://www.institutfrancais.es/madrid/cursosdefrances/adultos/talleres-frances-especializado/";
    
  }

    else {
    // return alert(Profil1+" - "+Profil2 +" - "+ Profil3 +" - "+ Profil4 +" - "+ Profil5 +" - "+ Profil6 +" - "+ Profil7 +" - "+ Profil8)
  }
}

