console.log("P5 cargó");

function setup() {

  console.log("Setup");

  let canvas = createCanvas(windowWidth, windowHeight, WEBGL);

  canvas.parent("hero-canvas");

}

function draw() {

    rotateY(map(mouseX, 0, width, -0.25, 0.25));
rotateX(map(mouseY, 0, height, 0.15, -0.15));

  background(9, 9, 9, 230);

  // Luces
  ambientLight(55);
  pointLight(120, 20, 30, 0, 0, 400);
  pointLight(180, 40, 50, 300, -200, 300);
  pointLight(255, 255, 255, -300, 200, -200);

  
 rotateY(sin(frameCount * 0.005) * 0.25);

  noStroke();

  // Movimiento general

  rotateX(map(mouseY, 0, height, 0.15, -0.15));
rotateY(map(mouseX, 0, width, -0.2, 0.2));
  rotateY(frameCount * 0.003);

  // TORUS
  push();
  rotateY(frameCount * 0.01);
  specularMaterial(120, 20, 30);
  shininess(80);
  torus(160, 10);
  pop();

  // ESFERA CENTRAL
  push();
  specularMaterial(220);
  shininess(100);
  sphere(60);
  pop();

  // ESFERA ORBITANDO
  push();
  rotateY(frameCount * 0.015);
  translate(240, 0, 0);
  ambientMaterial(90, 15, 20);
  sphere(30);
  pop();

  // CUBO
  push();
  rotateX(frameCount * 0.01);
  translate(-220, 80, 0);
  ambientMaterial(170);
  box(55);
  pop();

}

// ESFERA SUPERIOR
push();

translate(0, -220, -80);

ambientMaterial(210);

sphere(18);

pop();

// ESFERA INFERIOR
push();

translate(0, 220, 60);

ambientMaterial(120, 25, 35);

sphere(25);

pop();

// ESFERA DERECHA
push();

translate(320, -120, -100);

ambientMaterial(170);

sphere(15);

pop();

// ESFERA IZQUIERDA
push();

translate(-320, 120, 120);

ambientMaterial(90, 20, 25);

sphere(20);

pop();



function windowResized(){

  let hero = document.getElementById("hero");

  resizeCanvas(hero.offsetWidth, hero.offsetHeight);

}
