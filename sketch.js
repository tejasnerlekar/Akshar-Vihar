//Tejas Nerlekar(@tejas.nerlekar)
//"Akshar Vihar" is a typography tool for Indian scripts, offering customizable layouts and wave effects for playful and creative text generation. Let’s have fun with wavy, loopy letters

let scripts = [
  "Bangla",
  "Devanagari",
  "Gujarati",
  "Gurumukhi",
  "Kannada",
  "Latin",
  "Malayalam",
  "Odia",
  "Tamil",
  "Telugu",
];

let script;
let font;
let word = "Akshar Vihar";
let textinput;

//fonts
let banglaFont = "Anek Bangla";
let devanagariFont = "Anek Devanagari";
let gujaratiFont = "Anek Gujarati";
let gurumukhiFont = "Anek Gurmukhi";
let kannadaFont = "Anek Kannada";
let latinFont = "Anek Latin";
let malayalamFont = "Anek Malayalam";
let odiaFont = "Anek Odia";
let tamilFont = "Anek Tamil";
let teluguFont = "Anek Telugu";

//The Grid
let rows;
let column;
let gap;

//Basic position
let xposition;
let yposition;
let leading;

//Point Size
let pts;
let ptsminimum;
let ptsmaximum;

//The Wave
let wave;
let wave2;
let wavedist;
let displace;
let bounce;

//color
let backgroundColor;
let textcolor;

let randomizeButton;

let y0 = 300;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(24);
  gui();
}

function gui() {
  //Script Input
  script = createSelect();
  script.position(80, 200);
  script.size(150, 25);
  for (let a = 0; a < scripts.length; a++) {
    script.option(scripts[a]);
  }

  //Text Input
  textInput = createInput(word);
  textInput.position(80, 240);
  textInput.size(150, 25);

  ///Grid
  rows = createSlider(1, 100, 5);
  rows.position(80, y0 + 10);
  rows.size(150);

  column = createSlider(1, 100, 10);
  column.position(80, y0 + 40);
  column.size(150);

  gap = createSlider(-100, 300, 50);
  gap.position(80, y0 + 70);
  gap.size(150);

  //point size//
  ptsminimum = createSlider(1, 500, 36);
  ptsminimum.position(80, y0 + 150);
  ptsminimum.size(150);

  ptsmaximum = createSlider(1, 500, 36);
  ptsmaximum.position(80, y0 + 180);
  ptsmaximum.size(150);

  ///position & wave
  xposition = createSlider(0, 500, 1);
  xposition.position(80, y0 + 260);
  xposition.size(150);

  yposition = createSlider(0, 500, 20);
  yposition.position(80, y0 + 290);
  yposition.size(150);

  leading = createSlider(0, 500, 100);
  leading.position(80, y0 + 320);
  leading.size(150);

  wavedist = createSlider(0, 100, 10);
  wavedist.position(80, y0 + 350);
  wavedist.size(150);

  displace = createSlider(1, 100, 10);
  displace.position(80, y0 + 380);
  displace.size(150);

  bounce = createSlider(0, 30, 5);
  bounce.position(80, y0 + 410);
  bounce.size(150);

  //colour picker
  backgroundColor = createColorPicker("#000000");
  backgroundColor.position(125, y0 + 490);
  backgroundColor.size(100, 25);

  textcolor = createColorPicker("#ffffff");
  textcolor.position(125, y0 + 530);
  textcolor.size(100, 25);

  //randomise
  randomizeButton = createButton("Randomize");
  randomizeButton.position(40, y0 + 620);
  randomizeButton.size(150, 30);
  randomizeButton.mousePressed(randomizeValues);
}

function randomizeValues() {
  rows.value(floor(random(1, 101)));
  column.value(floor(random(1, 101)));
  gap.value(floor(random(-100, 301)));
  ptsminimum.value(floor(random(1, 501)));
  ptsmaximum.value(floor(random(1, 501)));
  xposition.value(floor(random(0, 501)));
  yposition.value(floor(random(0, 501)));
  leading.value(floor(random(0, 501)));
  wavedist.value(floor(random(0, 101)));
  displace.value(floor(random(1, 101)));
  bounce.value(floor(random(0, 31)));
}

function draw() {
  let x = xposition.value();
  let y = yposition.value();
  let l = leading.value();

  let ptsmin = ptsminimum.value();
  let ptsmax = ptsmaximum.value();

  let r = rows.value();
  let col = column.value();
  let g = gap.value();

  let wd = wavedist.value();
  let d = displace.value();
  let b = bounce.value();

  let sc = script.selected();
  word = textInput.value();

  let bg = backgroundColor.value();
  let c = textcolor.value();

  //Set font based on the selected script
  switch (sc) {
    case "Bangla":
      font = banglaFont;
      break;
    case "Devanagari":
      font = devanagariFont;
      break;
    case "Gujarati":
      font = gujaratiFont;
      break;
    case "Gurumukhi":
      font = gurumukhiFont;
      break;
    case "Kannada":
      font = kannadaFont;
      break;
    case "Latin":
      font = latinFont;
      break;
    case "Malayalam":
      font = malayalamFont;
      break;
    case "Odia":
      font = odiaFont;
      break;
    case "Tamil":
      font = tamilFont;
      break;
    case "Telugu":
      font = teluguFont;
      break;
    default:
      font = devanagariFont;
  }

  background(bg);

  let startX = (width + 200) / 2 - ((col - 1) * (textWidth(word) + g)) / 2;
  let startY = height / 2 - ((r - 1) * l) / 2;

  for (let j = 0; j < col; j++) {
    for (let i = 0; i < r; i++) {
      noStroke();
      fill(c);

      let pts = map(cos(radians(frameCount + i * wd)), -1, 1, ptsmin, ptsmax);
      textSize(pts);
      textFont(font);
      textAlign(CENTER);

      wave = x * sin(radians(i * d + frameCount * b));
      wave2 = y * sin(radians(i * d + frameCount * b));

      text(
        word,
        startX + j * (textWidth(word) + g) + wave,
        startY + i * l + wave2
      );
    }
  }

  // GUI Text and graphics
  fill(0);
  stroke(255);
  rect(-10, -10, 260, height + 50);
  line(-10, 160, 250, 160);

  textAlign(LEFT);
  noStroke();
  textFont("Gotu");
  textSize(40);
  fill(255);
  text("AKSHAR\nVIHAR", 10, 50);

  textFont("Baloo 2");
  textSize(16);
  fill(150);
  text(" Loops & Waves", 10, 140);

  textFont("Baloo 2");
  textSize(16);
  noStroke();
  fill(150);
  text("Script", 10, 215);
  text("Add Text", 10, 260);

  text("Rows", 10, y0 + 25);
  text("Column", 10, y0 + 55);
  text("Gutter", 10, y0 + 85);

  text("Pts-Min", 10, y0 + 165);
  text("Pts-Max", 10, y0 + 195);

  text("x-pos.", 10, y0 + 275);
  text("y-pos.", 10, y0 + 305);
  text("Leading", 10, y0 + 335);
  text("Offset", 10, y0 + 365);
  text("Displace", 10, y0 + 395);
  text("Bounce", 10, y0 + 425);

  text("Background", 10, y0 + 505);
  text("Text Fill", 10, y0 + 545);

  //Credits
  fill(0);
  stroke(255);
  rect(width - 230, height - 120, 250, 150, 20, 20);

  fill(150);
  noStroke();
  textAlign(RIGHT);
  textSize(18);
  text(
    "Font: Anek by Ektype\nMade with P5js\n \nMade by Tejas Nerlekar",
    width - 20,
    height - 80
  );
}
