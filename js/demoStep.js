// This code have been maded by Théophiel Vast in 2018. Switches triggered function that add value to variables

var Profil1= 0 ;
var Profil2= 0 ;
var Profil3= 0 ;
var Profil4= 0;

// Triggered first question
document.getElementById("qui1").addEventListener("click", grabIt);  
function grabIt() {
	var checkbox = document.getElementById('qui1').checked;


  if (checkbox == true) {
  		// document.getElementById("input1").innerHTML = "Pour un voyage en français vous pouvez utiliser notre produit : ";
  		// document.getElementById("input2").innerHTML = "Cours intensif";
      Profil1 ++
      console.log(Profil1 + "Step1")
  }
  if(checkbox == false) {
  	// document.getElementById("input1").innerHTML = "Vous pouvez apprendre le français pour voyager et apprécier la culture du pays";
  	// document.getElementById("input2").innerHTML = "Et si vous vous inscriviez à un cous de français ?";
    Profil1 --
    console.log(Profil1+"Step1 bis")
  }

  else {
    return Profil1
  }


}
//... second question
document.getElementById("qui2").addEventListener("click", grabIt1);  
function grabIt1() {
  var checkbox = document.getElementById('qui2').checked;


  if (checkbox == true) {
      // document.getElementById("input1").innerHTML = "Pour un voyage en français vous pouvez utiliser notre produit : ";
      // document.getElementById("input2").innerHTML = "Cours intensif";
      Profil2 ++
      console.log(Profil2 + "Step2")
  }
  if(checkbox == false) {
    // document.getElementById("input1").innerHTML = "Vous pouvez apprendre le français pour voyager et apprécier la culture du pays";
    // document.getElementById("input2").innerHTML = "Et si vous vous inscriviez à un cous de français ?";
    Profil2 --
    console.log(Profil2 + "Step2 bis")
  }

  else {
    return Profil1
  }


}

document.getElementById("qui3").addEventListener("click", grabIt2);  
function grabIt2() {
  var checkbox = document.getElementById('qui3').checked;


  if (checkbox == true) {
      // document.getElementById("input1").innerHTML = "Pour un voyage en français vous pouvez utiliser notre produit : ";
      // document.getElementById("input2").innerHTML = "Cours intensif";
      Profil1 ++
      console.log(Profil1 + "Step3")
  }
  if(checkbox == false) {
    // document.getElementById("input1").innerHTML = "Vous pouvez apprendre le français pour voyager et apprécier la culture du pays";
    // document.getElementById("input2").innerHTML = "Et si vous vous inscriviez à un cous de français ?";
    Profil1 --
    console.log(Profil1 + "Step3 bis")
  }

  else {
    return Profil1
  }


}

document.getElementById("qui4").addEventListener("click", grabIt3);  
function grabIt3() {
  var checkbox = document.getElementById('qui4').checked;


  if (checkbox == true) {
      // document.getElementById("input1").innerHTML = "Pour un voyage en français vous pouvez utiliser notre produit : ";
      // document.getElementById("input2").innerHTML = "Cours intensif";
      Profil2 ++
      console.log(Profil2 + "Step4")
  }
  if(checkbox == false) {
    // document.getElementById("input1").innerHTML = "Vous pouvez apprendre le français pour voyager et apprécier la culture du pays";
    // document.getElementById("input2").innerHTML = "Et si vous vous inscriviez à un cous de français ?";
    Profil2 --
    console.log(Profil2 + "Step4 bis")
  }

  else {
    return Profil1
  }


}

document.getElementById("qui5").addEventListener("click", grabIt4);  
function grabIt4() {
  var checkbox = document.getElementById('qui5').checked;


  if (checkbox == true) {
      // document.getElementById("input1").innerHTML = "Pour un voyage en français vous pouvez utiliser notre produit : ";
      // document.getElementById("input2").innerHTML = "Cours intensif";
      Profil1 ++
      console.log(Profil1 + "Step5")
  }
  if(checkbox == false) {
    // document.getElementById("input1").innerHTML = "Vous pouvez apprendre le français pour voyager et apprécier la culture du pays";
    // document.getElementById("input2").innerHTML = "Et si vous vous inscriviez à un cous de français ?";
    Profil1 --
    console.log(Profil1 + "Step5 bis")
  }

  else {
    return Profil1
  }


}

document.getElementById("qui6").addEventListener("click", grabIt5);  
function grabIt5() {
  var checkbox = document.getElementById('qui6').checked;


  if (checkbox == true) {
      // document.getElementById("input1").innerHTML = "Pour un voyage en français vous pouvez utiliser notre produit : ";
      // document.getElementById("input2").innerHTML = "Cours intensif";
      Profil2 ++
      console.log(Profil2 + "Step6")
  }
  if(checkbox == false) {
    // document.getElementById("input1").innerHTML = "Vous pouvez apprendre le français pour voyager et apprécier la culture du pays";
    // document.getElementById("input2").innerHTML = "Et si vous vous inscriviez à un cous de français ?";
    Profil2 --
    console.log(Profil2 + "Step6 bis")
  }

  else {
    return Profil1
  }


}

function total() {

var nombreJugador = document.getElementById("nombre").value
console.log(nombreJugador)

  if (Profil1 > Profil2) {
    document.getElementById("input1").innerHTML = "Vous êtes attaquant " + " " +nombreJugador;
    document.getElementById("input2").innerHTML = "Cours intensif";
  }
  if (Profil1 < Profil2) {
    document.getElementById("input1").innerHTML = "Vous êtes défenseur" + " " +nombreJugador;
    document.getElementById("input2").innerHTML = "Séjour";
  }
}

