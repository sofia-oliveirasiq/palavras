let palavra;

function setup() {
  createCanvas(400, 400);
  palavra = palavraAleatoria();
}

function palavraAleatoria(){
  let palavras = ["sofis","lutadora","maravilhosa","linda"];
  return random(palavras);
}

function inicializaCores(){
  background("rgb(208,131,208)");
 fill("black");
  textSize(70);
  textAlign(CENTER , CENTER)
}

function palavraParcial(minimo, maximo){ 
  let quantidade = map (mouseX,minimo ,maximo ,1,palavra.length);
  let parcial = palavra.substring(0,quantidade);
  return parcial;
}

function draw() {
  inicializaCores();
  let texto = palavraParcial(0, width);
  text(texto, 200,200);
  
  
 /* if (mouseX < 50){
 let palavra = "S";
  text(palavra, 200 ,200)
  } else if (mouseX < 100){
    let palavra = "so";
    text(palavra , 200,200);
  } else if (mouseX < 150){
    let palavra = "sof";
    text(palavra , 200,200);
  } else if (mouseX < 200){
    let palavra = "sofi";
    text(palavra , 200,200);
  } else if (mouseX < 250){
    let palavra = "sofis";
    text(palavra , 200,200)
  }*/
} 
