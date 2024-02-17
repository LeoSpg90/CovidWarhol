var angulo = 0.0;

function setup() {
  createCanvas(600, 600);

}

function draw() {
  background(220);

  var valorSeno = sin(angulo);
  var radio = map(valorSeno, -1, 1, 24, 27);
  angulo += 0.1;

  //primer fila
  
  stroke(220);
  fill('#EDE132');
  rect(0, 0, 200, 200);
  fill('#28CDF0');
  rect(200, 0, 200, 200);
  fill('#5E32ED');
  rect(400, 0, 200, 200);

  //segunda fila
  fill('#36CF25');
  rect(0, 200, 200, 200);
  fill('#DB1D96');
  rect(200, 200, 200, 200);
  fill('#DE5F14');
  rect(400, 200, 200, 200);
  
  //tercer fila
  fill('#1D82DB');
  rect(0, 400, 200, 200);
  fill('#6E1ADB');
  rect(200, 400, 200, 200);
  fill('#DBA11D');
  rect(400, 400, 200, 200);
  

  x = width / 2;
  y = height / 2;
  /*
    xrect = 0;
    yrect = 0;


    //fondo
    for (i = 0; i < width; i += 200) {

      noStroke();
      fill('#E818A4');
      rect(i, yrect, 200, 200);
      yrect += 200;

      for (p = 200; p < width; p += 200) {

        noStroke();
        fill('#FFF758');
        rect(xrect, p, 200, 200);
        xrect += 200;

      }
    }*/



  //antenas
  stroke('#63F522');
  strokeWeight(3);

  //antena1
  line(x - (radio), y - (radio + 5), x + (radio + 5), y + (radio + 7));
  line(x - (radio + 5), y - (radio), x - (radio - 5), y - (radio + 10));
  line(x + (radio), y + (radio + 12), x + (radio + 10), y + (radio + 2));

  //antena2
  line(x - (radio - 15), y + (radio + 5), x + (radio - 15), y - (radio + 15));
  line(x - (radio - 8), y + (radio + 6), x - (radio - 20), y + (radio + 10));
  line(x + (radio - 20), y - (radio + 17), x + (radio - 9), y - (radio + 13));

  //antena3
  line(x - (radio + 15), y + (radio - 20), x + (radio + 7), y - (radio - 20));
  line(x - (radio + 16), y + (radio - 25), x - (radio + 14), y + (radio - 15));
  line(x + (radio + 7), y - (radio - 15), x + (radio + 9), y - (radio - 25));

  //cuerpo  
  fill('#63F522');
  noStroke();
  ellipse(x, y, radio * 2, radio * 2);

  //jeringa
  /* push();
  fill(0, 255, 255);
  rectMode(CENTER);
  stroke(0);
  strokeWeight(2);
  rect(mouseX, mouseY, 25, 45);
  //pulsor
  fill(255);
  rect(mouseX, mouseY + 25, 35, 10);
  //aguja
  fill(255);
  noStroke();
  rect(mouseX, mouseY - 35, 1, 25);
  pop();
*/


  push();
  fill(0, 255, 255);
  rectMode(CENTER);
  stroke(0);
  strokeWeight(2);
  rect(mouseX, mouseY, 25, 45);
  //pulsor
  fill(255);
  rect(mouseX, mouseY + 25, 35, 10);
  //aguja
  fill(255);
  noStroke();
  rect(mouseX, mouseY - 35, 1, 25);
  noCursor();
  pop();

}