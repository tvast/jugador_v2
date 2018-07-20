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
    // document.getElementById("input1").innerHTML = "Vous pouvez apprendre le français pour voyager et apprécier la culture du pays";
    // document.getElementById("input2").innerHTML = "Et si vous vous inscriviez à un cous de français ?";
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
console.log(Profil1+" - "+Profil2 +" - "+ Profil3 +" - "+ Profil4 +" - "+ Profil5 +" - "+ Profil6 +" - "+ Profil7 +" - "+ Profil8)
var nombreJugador = document.getElementById("nombre").value
console.log(nombreJugador)

  if (Profil1 == 3) {
    document.getElementById("input1").innerHTML = "Vous êtes latéral " + " " +nombreJugador;
    document.getElementById("input2").innerHTML = "prepa examen";
    return console.log(Profil1+" - "+Profil2 +" - "+ Profil3 +" - "+ Profil4 +" - "+ Profil5 +" - "+ Profil6 +" - "+ Profil7 +" - "+ Profil8)
  }
  if (Profil2 == 2) {
    document.getElementById("input1").innerHTML = "Vous êtes attaquant" + " " +nombreJugador;
    document.getElementById("input2").innerHTML = "Intensif";
    return console.log(Profil1+" - "+Profil2 +" - "+ Profil3 +" - "+ Profil4 +" - "+ Profil5 +" - "+ Profil6 +" - "+ Profil7 +" - "+ Profil8)
  }
  if (Profil3 == 1) {
    document.getElementById("input1").innerHTML = "Vous êtes latéral" + " " +nombreJugador;
    document.getElementById("input2").innerHTML = "prepa examen";
    return console.log(Profil1+" - "+Profil2 +" - "+ Profil3 +" - "+ Profil4 +" - "+ Profil5 +" - "+ Profil6 +" - "+ Profil7 +" - "+ Profil8)
  }
  if (Profil4 == 2) {
    document.getElementById("input1").innerHTML = "Vous êtes milieu" + " " +nombreJugador;
    document.getElementById("input2").innerHTML = "français général";
    return console.log(Profil1+" - "+Profil2 +" - "+ Profil3 +" - "+ Profil4 +" - "+ Profil5 +" - "+ Profil6 +" - "+ Profil7 +" - "+ Profil8)
  }
   if (Profil5 == 2) {
    document.getElementById("input1").innerHTML = "Vous êtes attaquant" + " " +nombreJugador;
    document.getElementById("input2").innerHTML = "intensif";
    return console.log(Profil1+" - "+Profil2 +" - "+ Profil3 +" - "+ Profil4 +" - "+ Profil5 +" - "+ Profil6 +" - "+ Profil7 +" - "+ Profil8)
  }
    if (Profil6 == 2) {
    document.getElementById("input1").innerHTML = "Vous êtes défenseur" + " " +nombreJugador;
    document.getElementById("input2").innerHTML = "atelier";
    return console.log(Profil1+" - "+Profil2 +" - "+ Profil3 +" - "+ Profil4 +" - "+ Profil5 +" - "+ Profil6 +" - "+ Profil7 +" - "+ Profil8)
  }

  if (Profil7 == 1) {
    document.getElementById("input1").innerHTML = "Vous êtes milieu" + " " +nombreJugador;
    document.getElementById("input2").innerHTML = "français général";
    return console.log(Profil1+" - "+Profil2 +" - "+ Profil3 +" - "+ Profil4 +" - "+ Profil5 +" - "+ Profil6 +" - "+ Profil7 +" - "+ Profil8)
  }
    if (Profil8 == 1) {
    document.getElementById("input1").innerHTML = "Vous êtes défenseur" + " " +nombreJugador;
    document.getElementById("input2").innerHTML = "atelier";
    return console.log(Profil1+" - "+Profil2 +" - "+ Profil3 +" - "+ Profil4 +" - "+ Profil5 +" - "+ Profil6 +" - "+ Profil7 +" - "+ Profil8)
  }

    else {
    return console.log(Profil1+" - "+Profil2 +" - "+ Profil3 +" - "+ Profil4 +" - "+ Profil5 +" - "+ Profil6 +" - "+ Profil7 +" - "+ Profil8)
  }
}

