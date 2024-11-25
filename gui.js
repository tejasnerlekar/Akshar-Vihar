let scripts = [
  "Devanagari",
  "Bangla",
  "Gujarati",
  "Gurumukhi",
  "Kannada",
  "Latin",
  "Malayalam",
  "Odia",
  "Tamil",
  "Telugu",
];

let ratios =["1600x900","900x1600","1280x720","720x1280", "1000x1000"];
let ratio;

let script;
let word = "अक्षर विहार";
let textinput;
//The Grid
let rows;
let column;
let gap;

//Basic position
let xposition;
let yposition;
let leading;
let angle;

//Point Size
let pts;
let ptsminimum;
let ptsmaximum;
let weightSlider;
let widthSlider;

//The Wave
let wave;
let wave2;
let wavedist;
let displace;
let duration;

//color
let backgroundColor;
let textcolor;
let backopacity;
let textopacity;


let randomizeButton;
let exportButton;

let y0 = 340;


function gui() {
  //container
  let container = createDiv();
  container.style("border", "1px solid grey");
  container.style("width", "270px");
  container.style("height", "100%");
  container.style("background-color", "black");
  container.style("overflow", "auto");
  container.id('gui');

  //title
  let title;
  title = createElement("h1", "Akshar<br>Vihar");
  title.position(10, 0);
  title.parent('gui');

  let subtitle;
  subtitle = createElement("h2", "01 Loops & Wave");
  subtitle.position(10, 130);
  subtitle.parent('gui');

  //line
  let lineElement = createElement("div");
  lineElement.position(0, 170);
  lineElement.style("width", "270px");
  lineElement.style("height", "1px");
  lineElement.style("background-color", "grey");
  lineElement.parent('gui');

  //Script Input
  let scriptLable;
  scriptLable = createElement("h3", "Script");
  scriptLable.position(10, 180);
  scriptLable.parent('gui');

  script = createSelect();
  script.position(80, 195);
  script.size(160, 25);
  script.style("cursor", "pointer");
  script.class("select");
  script.parent('gui');
  for (let a = 0; a < scripts.length; a++) {
    script.option(scripts[a]);
  }

  //Text Input
  let TextLable;
  TextLable = createElement("h3", "Text");
  TextLable.position(10, 220);
  TextLable.parent('gui');

  textInput = createInput(word);
  textInput.position(80, 235);
  textInput.size(150, 25);
  textInput.class("select");
  textInput.style("cursor", "pointer");
  textInput.parent('gui');
  
  //ratio
  let ratioLable;
  ratioLable = createElement("h3", "Ratio");
  ratioLable.position(10, 280);
  ratioLable.parent('gui');

  ratio = createSelect();
  ratio.position(80, 280);
  ratio.size(160, 25);
  ratio.style("cursor", "pointer");
  ratio.class("select");
  ratio.parent('gui');
  for (let b = 0; b < ratios.length; b++) {
    ratio.option(ratios[b]);
  }

  ///Grid
  let rowsLable;
  rowsLable = createElement("h3", "Rows");
  rowsLable.position(10, 325);
  rowsLable.parent('gui');

  rows = createSlider(1, 200, 5);
  rows.position(80, y0 + 10);
  rows.size(150);
  rows.class("sliders");
  rows.parent('gui');

  let columnLable;
  columnLable = createElement("h3", "Column");
  columnLable.position(10, 355);
  columnLable.parent('gui');

  column = createSlider(1, 200, 3);
  column.position(80, y0 + 40);
  column.size(150);
  column.class("sliders");
  column.parent('gui');

  let gapLable;
  gapLable = createElement("h3", "Gutter");
  gapLable.position(10, 385);
  gapLable.parent('gui');
  gap = createSlider(-200, 500, 120);
  gap.position(80, y0 + 70);
  gap.size(150);
  gap.class("sliders");
  gap.parent('gui');

  //point size

  let weightLable;
  weightLable = createElement("h3", "Weight");
  weightLable.position(10, 455);
  weightLable.parent('gui');

  weightSlider = createSlider(100, 800, 400);
  weightSlider.position(80, y0 + 140);
  weightSlider.size(150);
  weightSlider.class("sliders");
  weightSlider.parent('gui');

  let widthLable;
  widthLable = createElement("h3", "Width");
  widthLable.position(10, 485);
  widthLable.parent('gui');

  widthSlider = createSlider(75, 125, 100);
  widthSlider.position(80, y0 + 170);
  widthSlider.size(150);
  widthSlider.class("sliders");
  widthSlider.parent('gui');

  let ptsminLable;
  ptsminLable = createElement("h3", "Pts-min");
  ptsminLable.position(10, 515);
  ptsminLable.parent('gui');

  ptsminimum = createSlider(1, 500, 36);
  ptsminimum.position(80, y0 + 200);
  ptsminimum.size(150);
  ptsminimum.class("sliders");
  ptsminimum.parent('gui');

  let ptsmaxLable;
  ptsmaxLable = createElement("h3", "Pts-min");
  ptsmaxLable.position(10, 545);
  ptsmaxLable.parent('gui');

  ptsmaximum = createSlider(1, 500, 36);
  ptsmaximum.position(80, y0 + 230);
  ptsmaximum.size(150);
  ptsmaximum.class("sliders");
  ptsmaximum.parent('gui');

  ///position & wave

  let XposLable;
  XposLable = createElement("h3", "X-pos");
  XposLable.position(10, 615);
  XposLable.parent('gui');

  xposition = createSlider(0, 1000, 1);
  xposition.position(80, y0 + 300);
  xposition.size(150);
  xposition.class("sliders");
  xposition.parent('gui');

  let YposLable;
  YposLable = createElement("h3", "Y-pos");
  YposLable.position(10, 645);
  YposLable.parent('gui');

  yposition = createSlider(0, 1000, 20);
  yposition.position(80, y0 + 330);
  yposition.size(150);
  yposition.class("sliders");
  yposition.parent('gui');

  let leadingLable;
  leadingLable = createElement("h3", "Leading");
  leadingLable.position(10, 675);
  leadingLable.parent('gui');

  leading = createSlider(0, 500, 100);
  leading.position(80, y0 + 360);
  leading.size(150);
  leading.class("sliders");
  leading.parent('gui');
  
  
  let angleLable;
  angleLable = createElement("h3", "Rotate");
  angleLable.position(10, 705);
  angleLable.parent('gui');

  angle = createSlider(0, 70, 0);
  angle.position(80, y0 + 390);
  angle.size(150);
  angle.class("sliders");
  angle.parent('gui');

  let wavedistLable;
  wavedistLable = createElement("h3", "Offset");
  wavedistLable.position(10, 735);
  wavedistLable.parent('gui');

  wavedist = createSlider(0, 100, 10);
  wavedist.position(80, y0 + 420);
  wavedist.size(150);
  wavedist.class("sliders");
  wavedist.parent('gui');

  let displaceLable;
  displaceLable = createElement("h3", "Displace");
  displaceLable.position(10, 765);
  displaceLable.parent('gui');

  displace = createSlider(0, 100, 5);
  displace.position(80, y0 + 450);
  displace.size(150);
  displace.class("sliders");
  displace.parent('gui');

  let durationLable;
  durationLable = createElement("h3", "Duration");
  durationLable.position(10, 795);
  durationLable.parent('gui');

  duration = createSlider(6, 240, 12);
  duration.position(80, y0 + 480);
  duration.size(150);
  duration.class("sliders");
  duration.parent('gui');

  //colour picker

  let bgcolorLable;
  bgcolorLable = createElement("h3", "Background");
  bgcolorLable.position(10, 865);
  bgcolorLable.parent('gui');

  backgroundColor = createColorPicker("#000000");
  backgroundColor.position(125, y0 + 540);
  backgroundColor.size(100, 25);
  backgroundColor.class("select");
  backgroundColor.parent('gui');
  
  
  let backopacityLable;
  backopacityLable = createElement("h3", "Opacity");
  backopacityLable.position(10, 895);
  backopacityLable.parent('gui');
  
  backopacity = createSlider(0, 255, 255);
  backopacity.position(80, y0 + 580);
  backopacity.size(150);
  backopacity.class("sliders");
  backopacity.parent('gui');

  let txtcolorLable;
  txtcolorLable = createElement("h3", "Text Fill");
  txtcolorLable.position(10, 945);
  txtcolorLable.parent('gui');

  textcolor = createColorPicker("#ffffff");
  textcolor.position(125, y0 + 620);
  textcolor.size(100, 25);
  textcolor.class("select");
  textcolor.parent('gui');
  
  
  let textopacityLable;
  textopacityLable = createElement("h3", "Opacity");
  textopacityLable.position(10, 975);
  textopacityLable.parent('gui');
  
  textopacity = createSlider(0, 255, 255);
  textopacity.position(80, y0 + 660);
  textopacity.size(150);
  textopacity.class("sliders");
  textopacity.parent('gui');

  //randomise
  randomizeButton = createElement("button", "Randomize");
  randomizeButton.position(40, y0 + 720);
  randomizeButton.size(150, 30);
  randomizeButton.mousePressed(randomizeValues);
  randomizeButton.style("cursor", "pointer");
  randomizeButton.parent('gui');

  //randomizeButton.class ('sliders');

  exportButton = createElement("button", "Export gif");
  exportButton.position(40, y0 + 760);
  exportButton.size(150, 30);
  exportButton.mousePressed(exportGif);
  exportButton.style("cursor", "pointer");
  exportButton.parent('gui');

  //line
  let lineElement2 = createElement("div");
  lineElement2.position(0, 1160);
  lineElement2.style("width", "270px");
  lineElement2.style("height", "1px");
  lineElement2.style("background-color", "grey");
  lineElement2.parent('gui');

  let creditsLable;
  creditsLable = createElement(
    "h4",
    "Font: Anek Variable by Ektype <br>Built with: p5.js <br>Development Support: ChatGPT by OpenAI<br> Design & Development: Tejas Nerlekar"
  );
  creditsLable.position(10, 1160);
  creditsLable.parent('gui');
}

function randomizeValues() {
  rows.value(floor(random(1, 101)));
  column.value(floor(random(1, 101)));
  gap.value(floor(random(-200, 501)));
  ptsminimum.value(floor(random(1, 501)));
  ptsmaximum.value(floor(random(1, 501)));
  xposition.value(floor(random(0, 501)));
  yposition.value(floor(random(0, 501)));
  leading.value(floor(random(0, 501)));
  wavedist.value(floor(random(0, 101)));
  displace.value(floor(random(1, 101)));
  duration.value(floor(random(6, 144)));
  weightSlider.value(floor(random(100, 800)));
  widthSlider.value(floor(random(75, 125)));
    }

function repositionProgressBar() {
  setTimeout(() => {
    let progressBar = select("#saveGifResult");
    if (progressBar) {
      progressBar.style("position", "absolute");
      progressBar.style("top", "10px");
      progressBar.style("right", "10px");
      progressBar.style("width", "300px"); 
      progressBar.style("font-family", "'Baloo 2', sans-serif"); 
      progressBar.style("font-size", "16px");
      progressBar.style("background", "rgba(0, 0, 0, 0.8)");
      progressBar.style("color", "#fff");
      progressBar.style("padding", "10px");
      progressBar.style("border-radius", "5px");
      progressBar.style("z-index", "1000")
       
    }
  }, 100);
}


