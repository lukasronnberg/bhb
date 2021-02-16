let count = 1; //variabel som håller koll på vilken bild vi är på

function left() { //för pil åt vänster
  if (count > 1) { //ser till att variablen går 1-2-3-1-2-3 istället för 1-2-3-4-5-6
    count--;
  } else {
    count = 3;
  }

  if (count == 1) { //ändrar bilden till den rätta utifrån variabeln
    document.getElementById('bild').src = "img1.jpeg";
  } else if (count == 2) {
    document.getElementById('bild').src = "img2.jpeg";
  } else {
    document.getElementById('bild').src = "img3.jpeg";
  }


  console.log(count);

}

function right() { //för pil åt höger

  if (count < 3) {
    count++;
  } else {
    count = 1;
  }

  if (count == 1) {
    document.getElementById('bild').src = "img1.jpeg";
  } else if (count == 2) {
    document.getElementById('bild').src = "img2.jpeg";
  } else {
    document.getElementById('bild').src = "img3.jpeg";
  }


  console.log(count);

}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}